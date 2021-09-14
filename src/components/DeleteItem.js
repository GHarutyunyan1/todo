import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

class DeleteItem extends React.Component{
  
  render(){  
    console.log(this.props); 
    return (
      <Button
        onClick={()=> this.props.itemDelete(this.props.itemId)}
        color ="secondary"
        startIcon={<DeleteIcon fontSize="large"/>}
      />
    );
  }
}
export default DeleteItem;
