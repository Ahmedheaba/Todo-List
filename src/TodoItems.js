import React from 'react'

const TodoItem = (props) => {
    const {items, deleteItem} = props;
    const ListItems = items.map(item =>{
        return(
            <div key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => deleteItem(item.id)}> Del </button>
            </div>
        )
    })
    return (
        <div>
            {ListItems}
        </div>
    )
}
export default TodoItem;