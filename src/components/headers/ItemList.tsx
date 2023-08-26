import { For } from "solid-js";
import Item from "./Item";
import Table from "./Table";
import Form from "./RForm";

export default function ItemList({
  items,
}:{items:any}) {
    console.log(items)
    const handleDelete=()=>{
        console.log("Delete")
       }


  return (
    <>
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-md shadow-md p-4">
         <ul className="divide-y divide-gray-300">
         <li className="flex py-2 bg-gradient-to-r from-teal-300 to-blue-400">
         <span className="w-1/12 text-center font-semibold text-white">ID</span>
          <span className="w-1/12 text-center font-semibold text-white">Image</span>  
          <span className="w-1/3 text-center font-semibold text-white">Name</span>
          <span className="w-1/3 text-center font-semibold text-white">Age</span>
          <span className="w-1/3 text-center font-semibold text-white">Location</span>
          <span className="w-1/3 text-center font-semibold text-white">Actions</span>
        </li>
         <For each={items}>
        {(item) => <Item item={item} />}
        </For> 
        
      </ul>
    </div>

      </>
   
  );
}
