import React from "react";

const About = () => {
  return (
    <div className="flex items-center mt-20 mb-36">
      <div className="w-1/2">
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1564399236984-fbae990bf054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className=" rounded-lg h-72 w-96"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1622702203226-0f2e6620fbcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
            className=" rounded-lg absolute h-48 w-60 top-1/2 left-44 border-4"
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2 ml-6">
        <p className="text-xl text-orange-600 font-extrabold font-mono">About us</p>
        <h3 className="text-3xl font-bold">
          Hello customer, <br /> We are ready to
          <br /> serve you all time.
        </h3>
        <div className="text-gray-400">
          <p className="my-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae, delectus explicabo
            aliquam reprehenderit consequatur iste ea nostrum mollitia veritatis.
          </p>
          <p className="mb-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae, delectus explicabo
            aliquam reprehenderit consequatur iste ea nostrum mollitia veritatis.
          </p>
        </div>

        <button className="btn btn-outline">Explore more</button>
      </div>
    </div>
  );
};

export default About;
