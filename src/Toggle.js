import React from 'react'
import './css/Toggle.css'

export default class Toggle extends React.Component {
    render() {
        return (
            <div className='setting'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <input onChange={this.props.changeHandler} name={this.props.id} type='checkbox' checked={this.props.value}></input>
            </div>
        )
    }
}