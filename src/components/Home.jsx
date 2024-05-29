import React, { useState } from "react";
import Add from "../assets/add-square.svg";
import Form from "./Form";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

const Home = () => {
  const [items, setItems] = useState([{ id: Date.now(), name: "", key: "" }]);

  function handleAddItem() {
    let obj = {
      id: Date.now(),
      name: "",
      key: "",
    };
    setItems([...items, obj]);
  }

  function handleChangeInput(obj, id) {
    if (id) {
      let copied = JSON.parse(JSON.stringify(items));
      copied = copied.map((el) => {
        if ((id = el.id)) {
          el.name = obj.name;
          el.key = obj.key;
        }
        return el;
      });
      setItems(copied);
    }
  }
  function handleSave() {
    console.log(items);
    let copied = JSON.stringify(items)
    localStorage.setItem('data', copied)
  }
  function handleDragEnd() {
    console.log('end');
  }
  return (
    <>
     <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="form-droppable">
      {
        (provided, snapshot) =>(
          
      <div className="media border border-b-2 mt-4 p-6 bg-[#faf9f9] rounded-md"
      ref={provided.innerRef}
      {...provided.droppableProps}
      droppableId ='droppable'
      >
        <h1 className=" text-xl font-semibold mb-4">Loyiha ketma-ketligi</h1>

        {items.map((el, index) => {
          return <Form key={index} data={el} index = {index} changeInput={handleChangeInput} />;
        })}

        <div className="footer px-4 flex justify-between">
          <p
            className="flex gap-2 cursor-pointer w-[130px] items-center"
            onClick={handleAddItem}>
            <img src={Add} alt="" className="cursor-pointer" />
            <span className="font-semibold text-blue-800">ustun qo'shish</span>
          </p>
          <button onClick={handleSave} className="bg-blue-700 px-6 py-2 rounded-lg text-white ">
            Saqlash
          </button>
        </div>
        {provided.placeholder}
      </div>
        )
      }
      </Droppable>
     </DragDropContext>
    </>
  );
};

export default Home;
