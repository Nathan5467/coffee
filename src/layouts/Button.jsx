import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1  border-white bg-[#FFDCAB] hover:text-[#4B382A] transition-all rounded-full">
        {props.title}
      </button>
    </div>
  )
}

export default Button
