import React from "react";
import './ToDoAddPanel.css';
import ToDoList from './ToDoList';
import TextField from '@material-ui/core/TextField';

import { Button } from '@material-ui/core';

class ToDoAddPanel extends React.Component {
  state ={
    items: [],
    inputValue: "",
  }
  addItem = ()=>{
    return 1; 
  }
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  };
  addItem = () => {
    let id = (this.state.items.length-1) +1;
    let item = this.state.items.concat([{id:id, todo: this.state.inputValue, checkd:false}]);
    this.setState({items: item, inputValue:"",});
  }
  render(){
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
          <ToDoList list={this.state.items}/>
      </div>
    );
  }
}

export default ToDoAddPanel;

