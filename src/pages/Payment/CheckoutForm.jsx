import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import axiosPrivate from '../../components/AxisPrivate';


function CheckoutForm({book}) {

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const {totalPrice, userName, email, _id} = book;

    useEffect(()=> {

        const url = 'http://localhost:5000/api/payment/create-payment-intent';
        const getSecret = async()=> {
            const {data} = await axiosPrivate.post(url, {totalPrice})
            if(data?.clientSecret){
                setClientSecret(data?.clientSecret);
            };
        }
        getSecret()
    }, [totalPrice]);



    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        { setCardError(error) || '' };
        setSuccess('')

        //Confirm card payment --------->

        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: userName,
                  email: email
                },
              },
            },
        );

        if (intentError) {
            setCardError(intentError.message)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Congress! Your payment is success');

            //Send database patch to transactionId

            const payment = {
                bookingId: _id,
                transactionId: paymentIntent?.id
            };

            // update booking pyment
            const url = `http://localhost:5000/api/payment/booking/${_id}`;

            const patchPayment = async () => {
                const { data } = await axiosPrivate.patch(url, payment);
            };
            patchPayment();
        };
    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-sm mt-3 bg-secondary border-none ' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-500'> {cardError?.message} </p>
            }

            {
                success && <>
                    <p className='text-green-500'> {success} </p>
                    <p className='text-info'> transactionId : {transactionId} </p>
                </>
            }

        </>
    )
}

export default CheckoutForm