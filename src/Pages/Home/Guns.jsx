import React, { useEffect, useState } from "react";
import Gun from "./Gun";

const Guns = () => {
  const [guns, setGuns] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  const pages = Math.ceil(count/size);

    useEffect(() => {
      const url = `http://localhost:5000/guns?page=${page}&size=${size}`;
      fetch(url)
        
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count);
          setGuns(data.guns);
        });
    }, [page, size]);

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-center text-orange-500">Our All Guns Bellow</h2>
      <p className="text-center mt-3 mb-8 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Iusto recusandae libero a d
        incidunt asperiores praesentium <br />
      </p>

      <div className="grid grid-cols-3 gap-8">
        {guns?.map((gun) => (
          <Gun key={gun._id} gun={gun}></Gun>
        ))}
      </div>
      <div className="text-center my-10">
        <p className="text-xl my-2 font-bold">
          Selected page:{page} size:{size}
        </p>
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            key={number}
            className="btn btn-outline btn-xs mr-3"
          >
            {number}
          </button>
        ))}
        <select
          className="btn btn-outline"
          onChange={(event) => setSize(event.target.value)}
          defaultValue={6}
        >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default Guns;
