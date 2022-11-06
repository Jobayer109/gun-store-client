import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="carousel  mt-6 rounded-md">
        <div id="item1" className="carousel-item w-full h-96">
          <img
            src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full"
            alt=""
          />
        </div>
        <div id="item2" className="carousel-item w-full h-96">
          <img
            src="https://images.unsplash.com/photo-1585589266882-2cb137ba7db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            className="w-full"
            alt=""
          />
        </div>
        <div id="item3" className="carousel-item w-full h-96">
          <img
            src="https://images.unsplash.com/photo-1551485913-b5dbedb723bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGd1bnxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
            className="w-full"
            alt=""
          />
        </div>
        <div id="item4" className="carousel-item w-full h-96">
          <img
            src="https://images.unsplash.com/photo-1607768178747-f4933d20ce75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGd1bnxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs btn-outline">
          1
        </a>
        <a href="#item2" className="btn btn-xs btn-outline">
          2
        </a>
        <a href="#item3" className="btn btn-xs btn-outline">
          3
        </a>
        <a href="#item4" className="btn btn-xs btn-outline">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
