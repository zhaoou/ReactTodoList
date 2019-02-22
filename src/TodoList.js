import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        console.log("props",props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(event, i){
        event.preventDefault();
        this.props.delete(i);
        event.currentTarget.reset();
    }


    render() {
        return (
            this.props.name.map(
                (e, i)=>(
                    <div key={i}>
                        <p>{e}</p>
                        <form onSubmit={(event) => this.deleteTodo(event,i)}>
                            <button type={"submit"} key={i}>delete</button>
                        </form>
                    </div>
                )
            ));

    }
}

export default TodoList;
