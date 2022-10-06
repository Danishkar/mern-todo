import React, { useEffect, useState } from "react";
import List from './List';
const NewItem = ()=>{
    const [count,setCount] = useState(0)
    const [item,setItem] = useState("");
    const [allItem,setAllItem] = useState(null)
    const changingCount = ()=>{
        setCount((prevCount)=>(prevCount= prevCount+1))
    }
    useEffect(()=>{
        const fetchContent = async()=>{
            const response = await fetch("/api/todo");
            const json = await response.json()
            if (response.ok){
                setAllItem(json)
            }else{
                console.log(json.error);
            }
        }
        fetchContent();
        console.log("effect ran");
    },[count])
    const Clicked = async(e)=>{
        const response =  await fetch("/api/todo",{
            method:"POST",
            body:JSON.stringify({todo:item}),
            headers:{
                "Content-Type": 'application/json'
            }

        })
        const json = await response.json()
        if(response.ok){
            setItem("")
            changingCount()
        }
        if(!response.ok){
            console.log(json.error);
        }
    }
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