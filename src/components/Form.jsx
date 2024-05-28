import React from 'react'
import Menu from '../assets/menu.svg'
const Form = () => {
  return (
    <>
    <div className='flex gap-4 mb-4'>
      <img src={Menu} alt="menu" className='cursor-grab'/>
      <form className=' flex flex-col gap-4'>
      <h2 className='font-semibold'>Ustun nomi</h2>
        <input type="text" className='outline-none w-[500px] py-2 border indent-2' placeholder='Ustun nomi'/>
      </form>
      <form className=' flex flex-col gap-4'>
      <h2 className='font-semibold'>Key</h2>
        <input type="text" className='outline-none w-[500px] py-2 border indent-2' placeholder='Key'/>
      </form>
    </div>
    </>
  )
}

export default Form

