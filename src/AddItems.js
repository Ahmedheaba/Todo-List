import React, { Component } from 'react';

class AddItem extends Component {
    state = { 
        name: ''
     }
     handleChange = (e) => {
         this.setState({
             [e.target.id]:e.target.value
         })
     }
     handleSubmit = (e) =>{
         e.preventDefault()
         this.props.addItem(this.state)
         this.setState({
             name : ''
         })
     }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Enter Your Task' id='name' onChange={this.handleChange} value={this.state.name} />
                    <input type='submit' value='Add' />
                </form>
            </div>
         );
    }
}
 
export default AddItem;