import React, { useEffect, useState } from "react";
import Gun from "./Gun";

const Guns = () => {
  const [guns, setGuns] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/guns")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-center text-orange-500">Our All Guns Bellow</h2>
      <p className="text-center mt-3 mb-8 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Iusto recusandae libero a d
        incidunt asperiores praesentium <br />
      </p>

          <div className="grid grid-cols-3 gap-8">
              {
                  guns?.map(gun => <Gun key={gun._id} gun={gun}></Gun>)
              }
      </div>
    </div>
  );
};

export default Guns;
