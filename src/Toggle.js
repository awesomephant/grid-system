import React from 'react'
import './css/Toggle.scss'

export default class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.props.updateSetting(this.props.id, value)
    }
    handleClick(e) {
        this.inputRef.current.click()
    }
    render() {
        return (
            <div className='setting toggle'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <div data-active={this.props.value} className="toggle-body" onClick={this.handleClick}>
                    <div className="toggle-element"></div>
                </div>
                <input ref={this.inputRef} onChange={this.handleChange} name={this.props.id} type='checkbox' checked={this.props.value}></input>
            </div>
        )
    }
}