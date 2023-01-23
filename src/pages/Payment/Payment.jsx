import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom'
import {
    Elements,
} from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import axiosPrivate from '../../components/AxisPrivate';
import Loader from '../Shared/Loader';
import { useState } from 'react';
import { useEffect } from 'react';


const stripePromise = loadStripe('pk_test_51LWZkbIsl7sYqXtenLYtf47U3mBAiuWxPRwNXgFbjaMp5Cd5DX9gH3supi7ZacBObUAHokBU7VzsHM2asmfPyePn00sfWD2Vom')


function Payment() {

    const { id } = useParams();
    const [book, setBook] = useState({});


    const { name, totalPrice, userName} = book;

    useEffect(()=> {
        const url = `http://localhost:5000/api/order/${id}`;

        const getOrder = async() => {
          const {data} =  await axiosPrivate.get(url)
          setBook(data)
        }
        getOrder()
    },[id])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm book={book} />
                            </Elements>
                        </div>
                    </div>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-accent"> Hello, {userName} </h2>
                            <p> Please Pay for <span className='text-secondary'> {name} </span> </p>
                            <p> Please Pay : <span className='text-secondary'> {totalPrice} </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment