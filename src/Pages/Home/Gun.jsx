import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Gun = ({ gun }) => {
  const { _id, bullet, category, img, name, price } = gun;
  return (
    <div>
      <div className="card w-80 h-96 shadow-xl">
        <figure>
          <img className="h-36 w-60" src={img} alt="gun" />
        </figure>
        <div className="card-body font-semibold">
          <h2 className="card-title text-orange-900">{name}</h2>
          <p>
            Category: <span className="text-orange-900">{category}</span>
          </p>
          <p>
            Bullet: <span className="text-orange-900"> {bullet}</span>
          </p>
          <p>
            Price: $ <span className=" text-orange-900">{price}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <FaArrowRight className="text-center text-2xl  text-orange-600"></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gun;
