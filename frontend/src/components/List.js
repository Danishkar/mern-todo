import React from "react";
import api from "../api/todo_axios"
const List = (props)=>{
    const handleDelete = ()=>{
        const goingToDelete = async()=>{
            const response = await api.delete("/api/todo/"+props.oneItem._id);
            props.changingCount()
        }
        setTimeout(goingToDelete,500);
    }
    // const handleDelete = ()=>{
    //     const goingToDelete = async()=>{
    //         const response = await fetch('/api/todo/'+props.oneItem._id,{
    //             method:"DELETE"
    //         })
    //         const json = await response.json()
    //         response.ok ? console.log(json) : console.log(json.error);
    //         props.changingCount()
    //     }
    //     setTimeout(goingToDelete,500);
    // }
    return(
        <div className="item">
            <input type="checkbox" onClick={handleDelete}/>
            <p>{props.oneItem.todo}</p>
        </div>  
        
    )
}
export default List;