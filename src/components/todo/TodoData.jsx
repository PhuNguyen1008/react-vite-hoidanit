const TodoData = (props) => {

    //props la 1 object
    //destructuring object
    const { name, age, data } = props;

    console.log(">>>check props: ", props)
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learn React</div>
            <div>Watch Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;