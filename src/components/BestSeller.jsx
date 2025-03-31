import React from "react";
import { Container } from ".";

function BestSeller() {
  const bestProducts = [
    {
      prodImage: "../../public/assets/headphones-removebg-preview.png",
      prodName: "Product Name",
      prodPrice: "$260.00",
    },
    {
      prodImage: "../../public/assets/headphones-removebg-preview.png",
      prodName: "Product Name",
      prodPrice: "$260.00",
    },
    {
      prodImage: "../../public/assets/headphones-removebg-preview.png",
      prodName: "Product Name",
      prodPrice: "$260.00",
    },
    {
      prodImage: "../../public/assets/headphones-removebg-preview.png",
      prodName: "Product Name",
      prodPrice: "$260.00",
    },
    {
      prodImage: "../../public/assets/headphones-removebg-preview.png",
      prodName: "Product Name",
      prodPrice: "$260.00",
    },
  ];

  return (
    <>
      <section>
        <Container>
          <div className="flex flex-col gap-7 py-5">
            <div className="w-full text-center">
              <h2 className="text-xl font-bold text-[#495AD9]">
                Shop Best Sellars
              </h2>
            </div>

            <div className="flex flex-row gap-5 w-full">
              {bestProducts.map((prod, index) => {
                return (
                  <div key="index" className=" flex flex-col gap-1">
                    <img src={prod.prodImage} alt="" className="w-[80%] " />

                    <h2 className="font-medium ">{prod.prodName}</h2>
                    <p className="text-base text-[#495AD9] font-semibold ">
                      {prod.prodPrice}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default BestSeller;
