export default function Item({item}:{item:any}) {

    const handleDelete=()=>{
     console.log("Delete")
    }

    const handleEdit=(id:string)=>{
        console.log("Edit" + id)
    }


    return (
<>
<li className="flex py-2 bg-white">
<span className="w-1/12 text-center">1</span>
<span className="w-8/12 text-center">
            <img src={item.image} alt="Image 1" className="w-24 h-24 rounded-lg" />
          </span>
          <span className="w-1/3 text-center">Jane Smith</span>
          <span className="w-1/3 text-center">35</span>
          <span className="w-1/3 text-center">Los Angeles</span>
          <span className="w-1/3 text-center space-x-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600" onClick={()=>handleEdit()}>
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600" onClick={()=>handleDelete()}>
                Delete
              </button>
            </span>

        </li>
</>
)
}

