import React from 'react';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.updateSetting(this.props.id, e.target.value)
    }
    render() {
        return (
            <div className='setting text'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <input className='text-input' onChange={this.handleChange} name={this.props.id} type='text' value={this.props.value}></input>
            </div>
        )
    }
}