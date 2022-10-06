import React, { useEffect, useState } from "react";
import api from "../api/todo_axios";
import List from './List';
const NewItem = ()=>{
    const [count,setCount] = useState(0)
    const [item,setItem] = useState("");
    const [allItem,setAllItem] = useState(null)
    const changingCount = ()=>{
        setCount((prevCount)=>(prevCount= prevCount+1))
    }
    useEffect(()=>{
        // using axios instead of the normal fetch method to get all items
        const fetchContent = async()=>{
            const response = await api.get("/api/todo");
            // const json = await response.data
            if(response.statusText === 'OK'){
                setAllItem(response.data)
            }else{
                console.log(response.statusText);
            }  
        }
        // const fetchContent = async()=>{
        //     const response = await fetch("/api/todo");
        //     const json = await response.json()
        //     if (response.ok){
        //         setAllItem(json)
        //     }else{
        //         console.log(json.error);
        //     }
        // }
        fetchContent();
        console.log("effect ran");
    },[count])
    // using axios instead of the normal fetch method to post a items
    const Clicked = async(e)=>{
        const todo_item = {todo:item};
        const headers={
            "Content-Type": 'application/json'
        }
        const response = await api.post("/api/todo", todo_item, { headers })
        const json =  await response.data;
        if(response.statusText === 'OK'){
            setItem("")
            changingCount()
        }else{
            console.log(json.error);
        }
    }
    // const Clicked = async(e)=>{
    //     const response =  await fetch("/api/todo",{
    //         method:"POST",
    //         body:JSON.stringify({todo:item}),
    //         headers:{
    //             "Content-Type": 'application/json'
    //         }

    //     })
    //     const json = await response.json()
    //     if(response.ok){
    //         setItem("")
    //         changingCount()
    //     }
    //     if(!response.ok){
    //         console.log(json.error);
    //     }
    // }
    return(
        <div className="box">
            {allItem && allItem.map((oneItem)=>{
                return(
                    <List oneItem={oneItem} key={oneItem._id} changingCount = {changingCount}/>
                )
            })}
            <input 
                name="newItem" 
                type="text" 
                placeholder="New Item" 
                autoComplete="off" 
                onChange={(e)=>{setItem(e.target.value)}}
                value={item}
            />
            <button name="list" onClick={Clicked}>+</button>
        </div>
    )
}
export default NewItem;