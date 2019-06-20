import React, {Component} from 'react';
import './todo-list-item.css';

 class TodoListItem extends Component {
    state = {
      done : false,
      important :false
    } 
  labelClick = () => {
    this.setState(({done})=>{
      return{
        done: !done
      }
    })
   }
   clickImportant= () =>{
     this.setState (({important}) =>{
       return{
          important: !important
      }
     })
   }
   render () {
  const {done, important} = this.state;
     const {label, onDeleted} = this.props;
     const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
    let classNames = "todo-list-item"
    if(done) {
      classNames += " done";
    }
    let classNameImportant = "btn btn-outline-success btn-sm float-right"
    if(important) {
      classNameImportant += " important"
    }
     return (
      (
        <span className={classNames}> 
          <span
            className="todo-list-item-label"
            style={style}
            onClick = {this.labelClick}>
            {label}
          </span>
    
          <button type="button"
                  className={classNameImportant}
                  onClick = {this.clickImportant}>
            <i className="fa fa-exclamation" />
          </button>
    
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onDeleted}>
            <i className="fa fa-trash-o" />
          </button>
        </span>
      )
     )
   }
 }




export default TodoListItem;
