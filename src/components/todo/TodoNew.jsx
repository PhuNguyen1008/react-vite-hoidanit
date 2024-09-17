import { useState } from "react";

const TodoNew = (props) => {

    //useStage Hook getter/setter
    //destructuring array
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props;
    //addNewTodo("eric");

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("")
    }

    const handleChange = (name) => {
        setValueInput(name);

    }

    return (
        <div className='todo-new'>
            <input
                type="text"
                onChange={(event) => handleChange(event.target.value)}
                value={valueInput}
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