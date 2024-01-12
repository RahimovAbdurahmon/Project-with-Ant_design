import React from 'react'
// import Switcher from './components/Switcher'

const Cart = ({title, img, name, price}) => {
  return (
    <div className='p-[30px] rounded-[10px] bg-gray-200 dark:bg-gray-800 w-[300px]'>
        <button className='px-[20px] text-white rounded py-[5px] bg-green-950'>{title}</button>
        <img src={img} alt="" className='m-auto w-[250px] my-[20px] h-[300px]' />
        <h1 className='text-[20px] font-[600] dark:text-white'>{name}</h1>
        <div className='flex justify-between mt-[20px]'>
            <h3 className='text-[18px] font-[600] dark:text-white'>${price}</h3>
            <img src="src/assets/Star.png" alt="" />
        </div>
    </div>
  )
}

export default Cart