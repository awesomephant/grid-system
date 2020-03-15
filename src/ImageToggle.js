import React from 'react';

// const equal = require('fast-deep-equal/es6/react');

export default class ImageToggle extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const setting = e.target.getAttribute('name');
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.props.updateSetting(setting, value)
    }
    render() {
        return (
            <div className='setting imageToggle'>
            </div>
        )
    }
}