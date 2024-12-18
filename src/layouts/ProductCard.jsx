import React from 'react'


const ProductCard = (props) => {
  return (
    <div className=" w-full lg:">
      <img src={props.img} alt="img" />
    <div>
    <h2> {props.title}</h2>
    <div>
        <BsStarFill className=" text- bg-[#8B5E3C] " />
        <BsStarFill className=" text- bg-[#8B5E3C] " />
        <BsStarFill className=" text- bg-[#8B5E3C] " />
        <BsStarHalf className=" text- bg-[#8B5E3C] " />
        <BsStarFill className=" text- bg-[#8B5E3C] " />
        </div>
        <h3>$15.99</h3>
        <Button title="ADD TO CARD "/>
        </div>
        </div>
  )
}

export default ProductCard 
