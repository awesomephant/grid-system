import React from 'react'
import LockToggle from './LockToggle.js'

export default class LockingSliderGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locked: true,
            controlledSettings: []
        }
        this.updateChildSetting = this.updateChildSetting.bind(this)
        this.handleLockClick = this.handleLockClick.bind(this)

        React.Children.map(this.props.children, k => {
            this.state.controlledSettings.push(k.props.id)
        })


    }

    handleLockClick(){
        if (this.state.locked === true){
            this.setState({locked: false});
        } else {
            this.setState({locked: true});
        }
    }

    updateChildSetting(id, value) {
        this.props.updateSetting(id, value)
        if (this.state.locked === true) {
            for (let i = 0; i < this.state.controlledSettings.length; i++) {
                let cs = this.state.controlledSettings[i];
                console.log(id)
                console.log(cs)
                if (cs !== id) { //avoid loop
                    this.props.updateSetting(cs, value)
                }
            }
        }
    }

    render() {
        let kidsWithProps = React.Children.map(this.props.children, k => {
            return (React.cloneElement(k, { 'updateSetting': this.updateChildSetting }))
        })
        return (
            <div className='setting sliderGroup'>
                <span>{this.props.title}<LockToggle clickHandler={this.handleLockClick} value={this.state.locked} /></span>
                {kidsWithProps}
            </div>
        )
    }
}