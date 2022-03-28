import React,{useState} from "react";

const Homepage=()=>{
    const [state,setState] =useState('')
    const ClickHandler=(e)=>{
        setState(e.target.value);
        alert('welcome to menu')
    }
    return(
        <div>
        <div className="text-center">
            <h1>Welcome to Food's</h1>
            <h1>Kitchen</h1>
        </div>
        <div className="text-center">
        <button type="button" class="btn btn-primary  " onClick={ClickHandler} >Go To Menu</button>

        </div>
        </div>
    )
}
export default Homepage;