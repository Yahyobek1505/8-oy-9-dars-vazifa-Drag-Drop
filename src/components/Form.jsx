import React, { useState } from 'react'
import Menu from '../assets/menu.svg'
import { Draggable } from '@hello-pangea/dnd';
const Form = (props) => {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');

  function handleChangeName(e) {
    const obj ={
      name: e.target.value,
      key: key
    }
    setName(e.target.value)
    props.changeInput(obj, props.data.id)
  }
  function handleChangeKey(e) {
    const obj ={
      name: name,
      key: e.target.value,
    }
    setKey(e.target.value)
    props.changeInput(obj, props.data.id)
  }
  return (
    <>
   <Draggable draggableId={`drag_${props.index}`} index={props.data.id}>
   {
    (provided) => (
      <div ref={provided.innerRef} 
      {...provided.dragHandleProps}
      {...provided.draggableProps}
      className='flex gap-4 mb-4'>

      <img src={Menu} alt="menu" className='cursor-grab'/>
      <form className=' flex flex-col gap-4'>
      <h2 className='font-semibold'>Ustun nomi</h2>
        <input value={name} onChange={handleChangeName} type="text" className='outline-none w-[500px] py-2 border indent-2 rounded-md' placeholder='Ustun nomi'/> 
      </form>
      <form className=' flex flex-col gap-4'>
      <h2 className='font-semibold'>Key</h2>
        <input value={key} onChange={handleChangeKey} type="text" className='outline-none w-[500px] py-2 border indent-2 rounded-md' placeholder='Key'/> 
      </form>
    </div>
    )
   }
   </Draggable>
    </>
  )
}

export default Form

