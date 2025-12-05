import React from "react";

const OurProducts = () => {
  return (
    <div className="max-w-11/12 mx-auto mt-5">
      <div className="bg-base-100 w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="my-1">Premium Hoodie Drop Shoulder</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis possimus doloremque ratione? Incidunt, omnis asperiores fugiat laboriosam odio maxime.</p>
          <div className="card-actions mt-2">
            <button className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black">L</button>
            <p className="px-3 py-1 border text-sm">M</p>
            <p className="px-3 py-1 border text-sm">XL</p>
            <p className="px-3 py-1 border text-sm">XXL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
