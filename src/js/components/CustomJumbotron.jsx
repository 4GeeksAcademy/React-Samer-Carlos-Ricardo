import React from 'react';

const CustomJumbotron = () => {
  return (
    <div className="bg-light py-5 px-4 rounded mx-3 my-4">
      <div className="container">
        <div className="text-start">
          <h1 className="display-4 fw-light text-dark mb-4">
            A Warm Welcome!
          </h1>
          <p className="lead text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid 
            similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
          </p>
          <button className="btn btn-primary btn-lg">
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomJumbotron;