import React from 'react'
import design from './design';
import './css/editor.scss';

const testGrid = '3x4'

class GlyphEditor extends React.Component {
    constructor(props) {
        super(props)
        this.defaultAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy1234567890-=+@£$%&()';
        this.state = {
            design: design,
            currentGlyph: 'A',
            existingGlyphs: design.grids[testGrid].letters
        }
        this.handleGlyphClick = this.handleGlyphClick.bind(this)
        this.togglePosition = this.togglePosition.bind(this)
    }

    handleGlyphClick(e) {
        let g = e.target.getAttribute('data-g');
        this.setState((prevState) => {
            prevState.currentGlyph = g;
            if (!prevState.design.grids[testGrid].letters[g]) {
                let emptyGlyph = new Array(prevState.design.grids[testGrid].rows * prevState.design.grids[testGrid].columns).fill(0)
                prevState.design.grids[testGrid].letters[g] = emptyGlyph.join('')
            }
            return prevState;
        })
    }
    updateJSON() {
        design.grids[testGrid].letters[this.state.currentGlyph] = this.state.activePositions
    }

    togglePosition(e) {
        // We can store active positions as a binary string! much more efficient than 2d array of active positions (that was better for hand authoring)
        let arr = this.state.design.grids[testGrid].letters[this.state.currentGlyph].split('')
        console.log(arr)
        let i = e.target.getAttribute('data-i');
        if (arr[i] === "1") {
            arr[i] = "0"
        } else {
            arr[i] = "1"
        }
        this.setState((prevState) => {
            prevState.design.grids[testGrid].letters[this.state.currentGlyph] = arr.join('')
            return prevState
        })
        this.updateJSON()
    }

    render() {
        const rows = []
        const cols = []
        const toggles = []
        const p = 100;
        const s = 200;
        const rowCount = design.grids[testGrid].rows;
        const colCount = design.grids[testGrid].columns;

        for (let i = 0; i < rowCount; i++) {
            let x1 = p;
            let y1 = p + i * s;
            let x2 = p + (colCount - 1) * s;
            let y2 = y1;
            rows.push(<line vectorEffect="non-scaling-stroke" key={'row-' + i} x1={x1} y1={y1} x2={x2} y2={y2}></line>)
        }

        for (let i = 0; i < colCount; i++) {
            let x1 = p + i * s;
            let y1 = p;
            let x2 = x1;
            let y2 = (p + (rowCount - 1) * s);
            cols.push(<line vectorEffect="non-scaling-stroke" key={'col-' + i} x1={x1} y1={y1} x2={x2} y2={y2}></line>)
        }

        let currentCol = 0;
        let currentRow = 0;
        for (let i = 0; i < (colCount * (rowCount)); i++) {
            if (currentCol > colCount - 1) {
                currentCol = 0;
                currentRow++;
            }
            let x = p + currentCol * s;
            let y = p + currentRow * s;
            toggles.push(<circle data-active={this.state.design.grids[testGrid].letters[this.state.currentGlyph].split('')[i]} data-i={i} onClick={this.togglePosition} r={.4 * s} cx={x} cy={y}></circle>)
            currentCol++;
        }

        let glyphItems = this.defaultAlphabet.split('').map((g) => {
            return (
                <li data-active={g === this.state.currentGlyph} className='editor-glyph'>
                    <button data-g={g} onClick={this.handleGlyphClick}>
                        {g}
                    </button>
                </li>)
        })



        return (
            <>
                <svg width={this.props.width} height={this.props.height} className="editor-preview">
                    {toggles}
                    {rows}
                    {cols}
                </svg>
                <ul className='editor-glyphs'>
                    {glyphItems}
                </ul>
                <div className="editor-json">
                    {JSON.stringify(design)}
                </div>
            </>
        )
    }
}

export default GlyphEditor;