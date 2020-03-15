import React from 'react';
import Settings from './Settings';
import Shape from './Shape';
import design from './design';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: {
        gridID: "6x8",
        gridColumns: 6,
        gridRows: 8,
        gridSkew: 1,
        gridActive: true,
        globalScale: 100,
        padding: 100,
        letter: 'B',
        elementScaleX: 1,
        elementScaleY: 1.8,
        elementRotation: 80,
      }
    }
    this.updateSetting = this.updateSetting.bind(this);
  }

  updateSetting(setting, value) {
    this.setState((prevState) => {
      if (prevState.settings[setting] !== null) {
        prevState.settings[setting] = value;
      } else {
        console.error(`Attempted to update non-existing setting ${setting}`)
      }
      return prevState;
    })
  }

  render() {
    const rows = []
    const cols = []
    const elements = []
    let g = design.grids[this.state.settings.gridID];

    let s = this.state.settings.globalScale;
    let p = this.state.settings.padding;

    if (this.state.settings.gridActive) {
      for (let i = 0; i < this.state.settings.gridRows + 1; i++) {
        let x1 = p + (((this.state.settings.gridSkew * s) / this.state.settings.gridRows) * i);
        let y1 = p + i * s;
        let x2 = (p + this.state.settings.gridColumns * s) + ((this.state.settings.gridSkew * s) / this.state.settings.gridRows * i);
        let y2 = p + i * s;
        rows.push(<line key={'row-' + i} x1={x1} y1={y1} x2={x2} y2={y2}></line>)
      }

      for (let i = 0; i < this.state.settings.gridColumns + 1; i++) {
        let x1 = p + i * s;
        let y1 = p;
        let x2 = (p + i * s) + this.state.settings.gridSkew * s;
        let y2 = (p + this.state.settings.gridRows * s);
        cols.push(<line key={'col-' + i} x1={x1} y1={y1} x2={x2} y2={y2}></line>)
      }
    }

    for (let i = 0; i < g.letters[this.state.settings.letter].positions.length; i++) {
      let pos = g.letters[this.state.settings.letter].positions[i];
      let defaultWidth = 30;
      let defaultHeight = 30;
      let sizeScaled = 30 * this.state.settings.elementScale;
      let widthScaled = defaultWidth * this.state.settings.elementScaleX;
      let heightScaled = defaultHeight * this.state.settings.elementScaleY;
      
      let gridPointX = (pos[0] * s + p) + ((this.state.settings.gridSkew * s) / this.state.settings.gridRows * pos[1]);
      let x = gridPointX / this.state.settings.elementScaleX;
      let y = (pos[1] * s + p) / this.state.settings.elementScaleY;
      let transform = `translate(${-widthScaled / 2} ${-heightScaled / 2}) scale(${this.state.settings.elementScaleX} ${this.state.settings.elementScaleY}) translate(${x} ${y})`;
      elements.push(
        <Shape shape='circle' transform={transform} width={defaultWidth} height={defaultHeight} key={i}></Shape>
      )
    }

    return (
      <>
        <svg width='2000' height='2000'>
          {elements}
          {rows}
          {cols}
        </svg>
        <Settings updateSetting={this.updateSetting} settings={this.state.settings}></Settings>
      </>
    );
  }
}

export default App;
