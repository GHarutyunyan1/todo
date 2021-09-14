import React from "react";
import './App.css';
import ToDoAddPanel from "./components/ToDoAddPanel";

import Container from '@material-ui/core/Container';


class App extends React.Component{
  
  render(){   
    return (
      <Container maxWidth="sm">
        <ToDoAddPanel />
      </Container>
    );
  }
}
export default App;
