import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';

class EditItem extends React.Component{
  
  render(){   
    return (
      <Button
        color ="secondary"
        startIcon={<EditIcon fontSize="large"/>}
      />
    );
  }
}
export default EditItem;
