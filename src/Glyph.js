import React from 'react'
import font from './Font';
import Shape from './Shape';

const defaultSize = 30;

export default class Glyph extends React.Component {
    render() {
        const rows = []
        const cols = []
        const elements = []
        let g = font.grids[this.props.settings.gridID];
        if (this.props.settings.gridActive) {
            // Draw Rows
            for (let i = 0; i < this.props.settings.gridRows; i++) {
                let x1 = (this.props.settings.gridSkew / (this.props.settings.gridRows - 1)) * i + this.props.x;
                let y1 = i * this.props.settings.cellHeight + this.props.y;
                let x2 = ((this.props.settings.gridColumns - 1) * this.props.settings.cellWidth) + ((this.props.settings.gridSkew) / (this.props.settings.gridRows - 1) * i) + this.props.x;
                let y2 = i * this.props.settings.cellHeight + this.props.y;
                rows.push(<line vectorEffect="non-scaling-stroke" key={'row-' + i} x1={x1} y1={y1} x2={x2} y2={y2}></line>)
            }

            // Draw Columns
            for (let i = 0; i < this.props.settings.gridColumns; i++) {
                let x1 = i * this.props.settings.cellWidth + this.props.x;
                let y1 = this.props.y;
                let x2 = i * this.props.settings.cellWidth + this.props.x + parseFloat(this.props.settings.gridSkew);
                let y2 = ((this.props.settings.gridRows - 1) * this.props.settings.cellHeight) + this.props.y;
                cols.push(<line vectorEffect="non-scaling-stroke" key={'col-' + i} x1={x1} y1={y1} x2={x2} y2={y2}></line>)
            }
        }
        const positionsList = g.letters[this.props.g].replace(/ /g, '').split('');
        for (let i = 0; i < positionsList.length; i++) {
            let row = Math.floor(i / g.columns);
            const pos = [(i - row * g.columns), row]
            let widthScaled = defaultSize * this.props.settings.elementScaleX;
            let heightScaled = defaultSize * this.props.settings.elementScaleY;
            let gridPointX = (pos[0] * this.props.settings.cellWidth) + (this.props.settings.gridSkew / (this.props.settings.gridRows - 1) * pos[1]) + this.props.x;
            let x = (gridPointX / this.props.settings.elementScaleX);
            let y = ((pos[1] * this.props.settings.cellHeight) + this.props.y) / this.props.settings.elementScaleY;

            let rotate = `rotate(${this.props.settings.elementRotation}, ${x * this.props.settings.elementScaleX}, ${y * this.props.settings.elementScaleY})`;
            let transform = `translate(${-widthScaled / 2} ${-heightScaled / 2}) scale(${this.props.settings.elementScaleX} ${this.props.settings.elementScaleY}) translate(${x} ${y})`;

            if (positionsList[i] === "1") {
                elements.push(
                    <Shape key={`shape-${i}`} shape={this.props.settings.elementShape} rotate={rotate} transform={transform} width={defaultSize} height={defaultSize} id={i}></Shape>
                )
            }
        }


        return (
            <g>
                {elements}
                {rows}
                {cols}
            </g>
        )
    }
}