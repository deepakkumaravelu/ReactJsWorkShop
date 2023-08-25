import { useState } from "react";

function Cars(props){
    const[age,setAge]=useState(8);
    return(
        <div>
            <p>car brand is {props.brand} and the age is {age}</p>
            
        </div>
    );
}
export default Cars;