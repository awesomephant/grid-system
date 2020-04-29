import React from 'react'
import design from './design';
import Shape from './Shape';

export default class Glyph extends React.Component {
    render() {
        const rows = []
        const cols = []
        const elements = []
        let g = design.grids[this.props.settings.gridID];

        let s = this.props.glyphScale;
        let p = 0;

        if (this.props.settings.gridActive) {
            for (let i = 0; i < this.props.settings.gridRows; i++) {
                let x1 = p + (((this.props.settings.gridSkew * s) / (this.props.settings.gridRows - 1)) * i) + this.props.x;
                let y1 = (p + i * s) + this.props.y;
                let x2 = (p + (this.props.settings.gridColumns - 1) * s) + ((this.props.settings.gridSkew * s) / (this.props.settings.gridRows - 1) * i) + this.props.x;
                let y2 = (p + i * s) + this.props.y;
                rows.push(<line vectorEffect="non-scaling-stroke" key={'row-' + i} x1={x1} y1={y1} x2={x2} y2={y2}></line>)
            }

            for (let i = 0; i < this.props.settings.gridColumns; i++) {
                let x1 = p + i * s + this.props.x;
                let y1 = p + this.props.y;
                let x2 = (p + i * s) + this.props.settings.gridSkew * s + this.props.x;
                let y2 = (p + (this.props.settings.gridRows - 1) * s) + this.props.y;
                cols.push(<line vectorEffect="non-scaling-stroke" key={'col-' + i} x1={x1} y1={y1} x2={x2} y2={y2}></line>)
            }
        }
        const positionsList = g.letters[this.props.g].replace(/ /g, '').split('');
        for (let i = 0; i < positionsList.length; i++) {
            let row = Math.floor(i / g.columns);
            const pos = [(i - row * g.columns), row]
            
            let defaultWidth = 30;
            let defaultHeight = 30;
            let widthScaled = defaultWidth * this.props.settings.elementScaleX;
            let heightScaled = defaultHeight * this.props.settings.elementScaleY;
            let gridPointX = (pos[0] * s + p) + ((this.props.settings.gridSkew * s) / this.props.settings.gridRows * pos[1]);
            let x = (gridPointX / this.props.settings.elementScaleX);
            let y = (pos[1] * s + p) / this.props.settings.elementScaleY;

            let position = `translate(${this.props.x} ${this.props.y})`

            let rotate = `rotate(${this.props.settings.elementRotation}, ${x * this.props.settings.elementScaleX}, ${y * this.props.settings.elementScaleY})`;

            let transform = `translate(${-widthScaled / 2} ${-heightScaled / 2}) scale(${this.props.settings.elementScaleX} ${this.props.settings.elementScaleY}) translate(${x} ${y})`;
            
            if (positionsList[i] === "1") {
                elements.push(
                    <Shape key={`shape-${i}`} shape={this.props.settings.elementShape} rotate={rotate} transform={transform} position={position} width={defaultWidth} height={defaultHeight} id={i}></Shape>
                )
            }
        }

        let globalTransfrom = `scale(${this.props.settings.globalScaleX} ${this.props.settings.globalScaleY})`;

        return (
            <g transform={globalTransfrom}>
                {elements}
                {rows}
                {cols}
            </g>
        )
    }
}