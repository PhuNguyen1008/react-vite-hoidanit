import { useState } from "react";

const TodoNew = (props) => {

    //useStage Hook getter/setter
    //destructuring array
    // const valueInput = "eric";
    const [valueInput, getValueInput] = useState("eric")

    const { addNewTodo } = props;
    //addNewTodo("eric");

    const handleClick = () => {
        console.log(">>> check valueInput: ", valueInput)
    }

    const handleChange = (name) => {
        getValueInput(name);
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleChange(event.target.value)}
            />
            <button
                style={{ cursor: "point" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;