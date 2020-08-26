import React from 'react';
import './App.css';

const tileSize = 32;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 0,
      col: 0,
      facing: "south"
    }
  }

  componentDidMount() {
    window.kesi = {
      advance: this.advance.bind(this),
      turnLeft: this.turnLeft.bind(this),
      turnRight: this.turnRight.bind(this)
    }
  }

  advance() {
    this.setState(state => {
      let { row, col } = state;
      switch (state.facing) {
        case "north":
          row -= 1;
          break;
        case "south":
          row += 1;
          break;
        case "east":
          col += 1;
          break;
        default:
          col -= 1;
      }
      return ({ ...state, row, col });
    });
  }

  turnLeft() {
    this.setState(state => {
      let facing;
      switch (state.facing) {
        case "north":
          facing = "west";
          break;
        case "south":
          facing = "east";
          break;
        case "east":
          facing = "north";
          break;
        default:
          facing = "south";
      }
      return ({ ...state, facing });
    });
  }

  turnRight() {
    this.setState(state => {
      let facing;
      switch (state.facing) {
        case "north":
          facing = "east";
          break;
        case "south":
          facing = "west";
          break;
        case "east":
          facing = "south";
          break;
        default:
          facing = "north";
      }
      return ({ ...state, facing });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>KesiScript</h1>
          <div id="world">
            <div id="kesi"
              className={`facing-${this.state.facing}`}
              style={{
                left: this.state.col * tileSize,
                top: this.state.row * tileSize
              }} />
          </div>
        </header>
      </div>
    );
  }

}

export default App;
