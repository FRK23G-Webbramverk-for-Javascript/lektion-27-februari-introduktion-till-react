import './TodoItem.css';

function TodoItem() {
    const task = 'Köp kaffe';

    return (
        <li className='todo-item'>{ task }</li>
    )
}

export default TodoItem;