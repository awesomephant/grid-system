import React from 'react';

export default class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const setting = this.props.id;
        this.props.updateSetting(setting, e.target.value)
    }
    render() {
        const optionItems = this.props.options.map((op) => {
            return (<option key={`op-${op}`} value={op}>{op}</option>)
        })
        return (
            <div className='setting dropdown'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <select value={this.props.value} id={this.props.id} onChange={this.handleChange}>
                    {optionItems}
                </select>
            </div>
        )
    }
}