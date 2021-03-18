import React from 'react';
import Settings from './Settings';
import Glyph from './Glyph';
import font from "./Font"

const defaultSize = 30;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      editModeEnabled: false,
      settings: {
        showGrid: true,
        gridID: "6x8",
        gridColumns: 6,
        gridRows: 8,
        gridSkew: 12,
        gridActive: true,
        padding: 100,
        elementScaleX: 1.5,
        elementScaleY: 1.5,
        elementRotation: 20,
        elementShape: 'circle',
        cellWidth: 30,
        cellHeight: 40,
        smoothing: 10,
        spacing: 17,
        text: "Space"
      }

    }
    this.updateSetting = this.updateSetting.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentDidMount() {
    this.updateWindowDimensions()
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
    const letters = this.state.settings.text.toLowerCase().split('');
    const gridWidth = this.state.settings.gridColumns * this.state.settings.cellWidth + defaultSize * this.state.settings.elementScaleX + this.state.settings.spacing;
    const gridHeight = this.state.settings.gridRows * this.state.settings.cellHeight;
    let baseX = (this.state.width / 1.92) - ((gridWidth / 2) * letters.length);
    let baseY = (this.state.height / 2) - (gridHeight / 2)

    const glyphs = letters.map((g, i) => {
      if (font.grids[this.state.settings.gridID].letters[g]) {
        let currentX = baseX + gridWidth * i
        let currentY = baseY
        return (
          <Glyph key={`glyph-${i}`} settings={this.state.settings} g={g} y={currentY} x={currentX}></Glyph>
        )
      }
      return null;
    })


    return (
      <div>
        <svg className='testPreview' width={this.state.width} height={this.state.height}>{glyphs}</svg>
        <Settings updateSetting={this.updateSetting} settings={this.state.settings}></Settings>
      </div>
    );
  }
}


export default App;
