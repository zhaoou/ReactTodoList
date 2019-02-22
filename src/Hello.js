import React, {Component, Fragment} from 'react';

class Hello extends Component {
    constructor(props){
        super(props);
        this.numRef = React.createRef();
        this.nameRef = React.createRef();
         this.state = {numbers:[1,2,3,4,5]};
        this.addNumber = this.addNumber.bind(this);
        this.addName = this.addName.bind(this);

        console.log("constructor",props)
    }


    addNumber(event){
        event.preventDefault();
        let numbers1 = [...this.state.numbers];
        numbers1.push(this.numRef.current.value);
        this.setState({numbers:numbers1});
        event.currentTarget.reset();
    };

    addName(event){
        event.preventDefault();
        this.props.addName(this.nameRef.current.value);
        event.currentTarget.reset();
    };

    render() {
        return (
            <Fragment>
                <hr/>
                <h3>Hello {this.state.numbers}</h3>
                <h3>Hello {this.props.name}</h3>
                <form onSubmit={this.addNumber}>
                    <input type={"text"} name={"number"} ref={this.numRef}/>
                    <button type={"submit"}>add</button>
                </form>
                    <br/>
                <form onSubmit={this.addName}>
                    <input type={"text"} name={"name"} ref={this.nameRef}/>
                    <button type = {"submit"}>add</button>
                </form>
            </Fragment>
        );
    }
}

export default Hello;
