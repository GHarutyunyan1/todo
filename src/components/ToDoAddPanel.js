import React from "react";
import './ToDoAddPanel.css';
import ToDoList from './ToDoList';
import TextField from '@material-ui/core/TextField';

import { Button } from '@material-ui/core';

class ToDoAddPanel extends React.Component {
  state ={
    items: [{
      id: 1,
      todo: "test1",
      checkt: true,
    }],
    inputValue: "",
  }
  
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  };
  addItem = () => {
    if(this.state.inputValue.trim().length < 1 ){
      return null;
    }
    let id = (this.state.items.length) + 1;
    let item = this.state.items.concat([{id:id, todo: this.state.inputValue, checkt:false}]);
    this.setState({items: item, inputValue:"",});
  }
  handelChechet = (itemId) => {
    let newItems = this.state.items.map(item =>{
      if(item.id === itemId){
        item.checkt = !item.checkt;
        return item;
      }else{
        return item
      }
    })
    this.setState({items:newItems})
  }
  itemDelete = (itemId) => {
    this.setState({items: this.state.items.filter(item => item.id !== itemId)})
  }
  render(){
   // console.log(this.state.items)
    return (
      <div className="addPanelDiv">  
          <TextField
            id="outlined-name"
            size="small" 
            label="Add item"
            value={this.state.inputValue}
            onChange={this.handleChange}
            variant="outlined"
          />
          <Button 
            variant="outlined"
            color="primary"
            onClick={this.addItem} 
            name="plus">Add Item 
          </Button>
          <ToDoList 
            itemDelete={this.itemDelete}
            handelChechet={this.handelChechet} 
            list={this.state.items}
          />
      </div>
    );
  }
}

export default ToDoAddPanel;

