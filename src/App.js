import React from 'react';
import Settings from './Settings';
import Glyph from './Glyph';
import GlyphEditor from './GlyphEditor';
import Toggle from './Toggle';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      editModeEnabled: false,
      settings: {
        gridID: "6x8",
        gridColumns: 6,
        gridRows: 8,
        gridSkew: 1,
        gridActive: true,
        padding: 100,
        globalScaleX: 1.5,
        globalScaleY: 1.5,
        elementScaleX: .7,
        elementScaleY: .7,
        elementRotation: 20,
        elementShape: 'circle',
        smoothing: 20,
      }

    }
    this.updateSetting = this.updateSetting.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleModeSwitch = this.handleModeSwitch.bind(this);

    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentDidMount() {
    this.updateWindowDimensions()
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleModeSwitch() {
    this.setState((prevState) => {
      if (prevState.editModeEnabled) {
        prevState.editModeEnabled = false;
      } else {
        prevState.editModeEnabled = true;
      }
      return prevState
    })
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
    const word = 'A';
    let currentX = -250;
    let currentY = 100;
    const glyphs = word.split('').map((g, i) => {
      currentX += 350 * this.state.settings.globalScaleX;
      if (currentX > this.state.width - 350) {
        //   currentX = 100
        //        currentY += 400;
      }
      return (
        <Glyph key={`glyph-${i}`} settings={this.state.settings} g={g} y={currentY} x={currentX} glyphScale={40}></Glyph>
      )
    })

    let mainContent = null;
    if (this.state.editModeEnabled) {
      mainContent = <GlyphEditor width={this.state.width} height={this.state.height}></GlyphEditor>
    } else {
      mainContent = <><svg className='testPreview' width={this.state.width} height={this.state.height}>{glyphs}</svg>        <Settings updateSetting={this.updateSetting} settings={this.state.settings}></Settings>
      </>
    }

    return (
      <>
        <header className="app-header">
          <Toggle id="editModeEnabled" title='Test / Design' value={this.state.editModeEnabled} updateSetting={this.handleModeSwitch}></Toggle>
        </header>
        {mainContent}
      </>
    );
  }
}

export default App;
