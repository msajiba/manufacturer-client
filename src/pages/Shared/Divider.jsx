import React from 'react';

const Divider = ({text}) => {
    return (
        <div
        data-aos="fade-bottom"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="divider my-20 text-center uppercase text-4xl  text-secondary
        font-serif"
      >
        <p> {text} </p>
      </div>
    );
};

export default Divider;