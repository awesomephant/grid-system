import React from 'react';
import Slider from './Slider.js';
import Toggle from './Toggle.js';
import Dropdown from './Dropdown.js';
import LockingSliderGroup from './LockingSliderGroup.js';
import './css/Settings.scss';

// const equal = require('fast-deep-equal/es6/react');

export default class Settings extends React.Component {
    render() {
        return (
            <div className='settings'>
                <Dropdown updateSetting={this.props.updateSetting} options={['circle', 'rect']} value={this.props.settings.elementShape} id='elementShape' title='Element Shape'></Dropdown>
                <LockingSliderGroup updateSetting={this.props.updateSetting} title='Global Scale'>
                    <Slider value={this.props.settings.globalScaleX} title='X' id='globalScaleX' min='0.01' max='10' step='.1'></Slider>
                    <Slider value={this.props.settings.globalScaleY} title='Y' id='globalScaleY' min='0.01' max='10' step='.1'></Slider>
                </LockingSliderGroup>
                <LockingSliderGroup updateSetting={this.props.updateSetting} title='Element Scale'>
                    <Slider value={this.props.settings.elementScaleX} title='X' id='elementScaleX' min='0.01' max='10' step='.1'></Slider>
                    <Slider value={this.props.settings.elementScaleY} title='Y' id='elementScaleY' min='0.01' max='10' step='.1'></Slider>
                </LockingSliderGroup>
                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.elementRotation} title='Element Rotation' id='elementRotation' min='0' max='360' step='.1'></Slider>
                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.gridSkew} title='Grid Skew' id='gridSkew' min='-5' max='5' step='.001'></Slider>
                <Toggle value={this.props.settings.gridActive} id='gridActive' updateSetting={this.props.updateSetting} title='Enable Grid'></Toggle>
            </div>
        )
    }
}