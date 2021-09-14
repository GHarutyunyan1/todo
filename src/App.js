import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ToDoList from "./components/ToDoList";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';


class App extends React.Component{
  state = {
    items: [{
      id: uuidv4(),
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
    console.log(uuidv4());
    let item = this.state.items.concat([{id:uuidv4(), todo: this.state.inputValue, checkt:false}]);
    this.setState({items: item, inputValue:"",});
  }
  handelChechet = (id) => {
    let newItems = this.state.items.map(item =>{
      if(item.id === id){
        item.checkt = !item.checkt;
      }
      return item
    })
    this.setState({items:newItems})
  }
  itemDelete = (itemId) => {
    this.setState({items: this.state.items.filter(item => item.id !== itemId)})
  }
  render(){   
    return (
      <Container className="TodoCon" maxWidth="sm"> 
        <TextField
          id="outlined-name"
          size="small" 
          label="Add item"
          value={this.state.inputValue}
          onChange={this.handleChange}
          variant="outlined"
          //fullWidth
        />
        <Button 
          variant="outlined"
          color="primary"
          onClick={this.addItem}
        > 
          Add Item 
        </Button>
        <ToDoList 
          itemDelete={this.itemDelete}
          handelChechet={this.handelChechet} 
          list={this.state.items}
        />
      </Container>
    );
  } 
}
export default App;
