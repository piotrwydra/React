import React, {useState} from "react";

const Greeting = props => {

    // ["Piotr", setName]
    // ["changed" , setName = name = "changed"]

    const [name, setName] = useState(props.name)
    const [first, setFirst] = useState("Ibrahim")
    const changeName = (name, value, another) => {
        ((name) => {value(another)})
    }
    /*const changeName2 = first => {
        setFirst("another")
    }*/
    return (
        <div>
            <p>Hello, {name}</p>
            <button onClick={changeName}>Change me</button>
            <p>Hello, {first}</p>


        </div>
    )

}

export default Greeting;