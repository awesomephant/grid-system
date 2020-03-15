import React from 'react'

export default class Shape extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.shape === 'circle') {
            return (<circle transform={this.props.transform} key={'element-' + this.props.key} className='element' cx={this.props.width / 2} cy={this.props.width / 2} r={this.props.width}></circle>)
        } else if (this.props.shape === 'rect') {
            return (<rect transform={this.props.transform} key={'element-' + this.props.key} className='element' x={0} y={0} width={this.props.width} height={this.props.height}></rect>)
        }
    }
}