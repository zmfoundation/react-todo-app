import React, { Component } from 'react'

class Addtask extends Component {
    state = {
        name: null,
        id: null,
    }

    onChangeHandle = (e) => {
        this.setState( {
            [e.target.id]: e.target.value
        } );
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        this.props.addTask( this.state );
    }

    render() {
        return (
            <div className="new-task">
                <form onSubmit={ this.onSubmitHandle }>
                    <input type="text" name="name" id="name" placeholder="Task Name" onChange={ this.onChangeHandle } />
                    <input type="submit" value="Add Task"/>
                </form>
            </div>
        )
    }
}

export default Addtask; 