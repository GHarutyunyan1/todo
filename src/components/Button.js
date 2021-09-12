
import React from "react";
import { Button } from '@material-ui/core';

class ButtonAdd extends React.Component{
  
  render(){
    return (
      <Button color="primary" onClick={this.props.onClick}>{this.props.name}</Button>
    );
  }
}

export default Button;
