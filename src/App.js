import React from "react";
import './App.css';
import ToDoAddPanel from "./components/ToDoAddPanel";

import Container from '@material-ui/core/Container';


class App extends React.Component{
  state = {
    value: 0,
  };
  valuePlus = () => {
    this.setState({value: this.state.value + 1});
  };
  
  valueMinus = () => {
    this.setState({value: this.state.value -1});
  };
  
  render(){   
    return (
      <Container maxWidth="sm">
        <ToDoAddPanel />
      </Container>
    );
  }
}
export default App;
