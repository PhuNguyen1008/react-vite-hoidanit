const TodoData = (props) => {

    //props la 1 object
    //destructuring object
    const { todoList } = props;

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={'todo-item'} key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;