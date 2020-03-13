import React from 'react';
import './css/Slider.css';

export default class Slider extends React.Component {
    render() {
        let valueStyle = {
            left: ((this.props.value / this.props.max) * 100) + '%'
        }
        return (
            <div className='setting slider'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <div className='slider-track'>
                    <input className='slider-input' onChange={this.props.changeHandler} name={this.props.id} type='range' min={this.props.min} max={this.props.max} step={this.props.step} value={this.props.value}></input>
                    <div style={valueStyle} className='slider-value'>
                        <input className='value-input' onChange={this.props.changeHandler} name={this.props.id} type='number' min={this.props.min} max={this.props.max} step={this.props.step} value={this.props.value}></input>
                    </div>
                </div>
            </div>
        )
    }
}