import React, {Component} from 'react';
import './App.css';
// import Hello from "./Hello";
import TodoList from "./TodoList";
import TodoSize from "./TodoSize";

class App extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {ray:["Michael", "Stepan"]};
    //     this.addName = this.addName.bind(this);
    //     console.log("constructor",this.state)
    // }
    //
    // addName(name){
    //     let oldNames = [...this.state.ray];
    //     oldNames.push(name);
    //     this.setState({ray:oldNames});
    // }
    //
    // render() {
    //     return (
    //         this.state.ray.map(
    //             (e, i)=>(
    //                 <Hello key={i} name={e} addName={this.addName}/>
    //             )
    //         ));
    // }


    constructor(props){
        super(props);
        this.state = {ray:[]};
        console.log("constructor",this.state)
        this.todoRef = React.createRef();
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(event){
        event.preventDefault();
        let oldList = [...this.state.ray];
        oldList.push(this.todoRef.current.value);
        this.setState({ray:oldList});
        event.currentTarget.reset();
    }

    deleteTodo(i){
        let oldList = [...this.state.ray];
        oldList.splice(i,1);
        console.log(oldList);
        this.setState({ray:oldList});
    }

    render() {
        return (

            <div>
                <h3>Todo List</h3>
                <TodoList name={this.state.ray} delete={this.deleteTodo}/>
                <hr/>
                <form onSubmit={this.addTodo}>
                    <input type={"text"} name={"todo"} ref={this.todoRef}/>
                    <button type={"submit"}>add</button>
                </form>

                <TodoSize size={this.state.ray.length}/>

            </div>
        )
    }
}

export default App;
