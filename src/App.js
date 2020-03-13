import React from 'react';
import './css/App.css';
import Settings from './Settings';
import design from './design';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: {
        gridID: "6x8",
        gridColumns: 6,
        gridRows: 8,
        elementScale: 1,
        globalScale: 100,
        padding: 100,
        letter: 'B'
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
    console.log(design.grids)
    let g = design.grids[this.state.settings.gridID];

    let s = this.state.settings.globalScale;
    let p = this.state.settings.padding;

    for (let i = 0; i < this.state.settings.gridRows + 1; i++) {
      rows.push(<line key={'row-' + i} x1={p} y1={p + i * s} x2={p + this.state.settings.gridColumns * s} y2={p + i * s}></line>)
    }

    for (let i = 0; i < this.state.settings.gridColumns + 1; i++) {
      let x1 = p + i * s;
      cols.push(<line key={'col-' + i} x1={x1} y1={p} x2={p + i * s} y2={p + this.state.settings.gridRows * s}></line>)
    }

    for (let i = 0; i < g.letters[this.state.settings.letter].positions.length; i++) {
      let pos = g.letters[this.state.settings.letter].positions[i];
      elements.push(<circle key={'element-' + i} fill='black' cx={pos[0] * s + p} cy={pos[1] * s + p} r={30 * this.state.settings.elementScale}></circle>)
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
