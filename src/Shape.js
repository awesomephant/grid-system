import React from 'react'

export default class Shape extends React.Component {
    render() {
        if (this.props.shape === 'circle') {
            return (
                <g transform={this.props.position}>
                    <g transform={this.props.rotate}>
                        <circle transform={this.props.transform} key={'element-' + this.props.id} className='element' cx={this.props.width / 2} cy={this.props.width / 2} r={this.props.width}></circle>
                    </g>
                </g>
            )
        } else if (this.props.shape === 'rect') {
            return (
                <g transform={this.props.position}>
                    <g transform={this.props.rotate}>
                        <rect transform={this.props.transform} key={'element-' + this.props.id} className='element' x={0} y={0} width={this.props.width} height={this.props.height}></rect>
                    </g>
                </g>
            )
        }
    }
}