import React, { Component } from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked, 
            initialChecked: this.props.checked 
        };
    }

    handleChange(e) {
        const { checked } = e.target;

        const confirmMessage = `Are you sure you want to mark this task as ${checked ? 'confirm' : 'cancel'}?`;
        const confirmAction = window.confirm(confirmMessage);

        if (confirmAction) {
            this.setState({ checked });
            this.props.onChange(checked);              
        } else {
          
            this.setState({ checked: this.state.initialChecked });
        }
    }

    render() {
        return (
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChange.bind(this)}                                   
            />
        );
    }
}

export default CheckBox;
