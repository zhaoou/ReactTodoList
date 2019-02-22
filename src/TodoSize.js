import React, {Component} from 'react';

class TodoSize extends Component {
    constructor(props){
        super(props);
        console.log("props",props);
    }



    render() {
        return (

            <p>you have {this.props.size} items to do</p>
        )

    }
}

export default TodoSize;
