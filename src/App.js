import React, { Component } from 'react'
import AddItem from './AddItems';
import TodoItem from './TodoItems';

class App extends Component {
    state = { 
        todo : []
     }
     deleteItem = (id) => {
         let items = this.state.todo
         let i = items.findIndex(item => item.id === id)
         items.splice(i,1)
         this.setState({
             todo:items
         })
    }
    addItem = (item) =>{
        item.id = Math.random()
        let items = this.state.todo
        items.push(item)
        this.setState({
            todo:items
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div>Todo....</div>
                <AddItem addItem = {this.addItem} />
                <TodoItem items={this.state.todo} deleteItem = {this.deleteItem} />
            </React.Fragment>
         );
    }
}
 
export default App;
