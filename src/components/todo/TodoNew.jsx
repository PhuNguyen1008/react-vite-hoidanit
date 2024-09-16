
const TodoNew = (props) => {
    console.log(">>>check point: ", props)
    const { addNewTodo } = props;

    //addNewTodo("eric");

    const handleClick = () => {
        alert("click me")
    }

    const handleChange = (name) => {
        console.log(">>> handleChange", name)
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
        </div>
    )
}

export default TodoNew;