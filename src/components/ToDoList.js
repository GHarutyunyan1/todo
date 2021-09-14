import React from "react";
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';
//import { makeStyles } from '@material-ui/core/styles';
//import { withTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
//import IconButton from '@material-ui/core/IconButton';
//import CommentIcon from '@material-ui/icons/Comment';

class ToDoList extends React.Component {
  /*handleToggle = (id) => {
    this.props.handelChechet(id);
  }*/
  
  render(){
    //console.log(this.props)
    return (
      <List>
      {this.props.list.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        console.log(value.id)
        return (
          <ListItem key={value.id} role={undefined} dense button >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.checkt}
                tabIndex={-1}
                onClick= {()=> this.props.handelChechet(value.id)}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.todo} />
            <ListItemSecondaryAction>
              <EditItem />
              <DeleteItem 
                itemDelete={this.props.itemDelete}
                itemId={value.id}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    );
  }
}

export default ToDoList;