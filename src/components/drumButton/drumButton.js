import React, {Component} from 'react';
import './drumButton.scss'
import Button from 'react-bootstrap/Button'

export default class DrumButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.id = this.props.letter+"-button";
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {
          width: 70,
          height: 70,
          margin: 3,
          active: false
        };
        this.audio = new Audio(this.props.audioSource);
    }
    playAudio = () => {
      this.audio.currentTime = 0;
      this.audio.play();
      this.props.store.display = this.props.audioSource.split("/").pop();
    }
    handleKeyPress = (event) => {
      if(event.key === this.props.letter.toLowerCase()){
        this.setState((state) => Object.assign({}, state, {active: true}));
        this.playAudio()
      }
    }
    handleKeyUp = (event) => {
      if(event.key === this.props.letter.toLowerCase()){
        this.setState((state) => Object.assign({}, state, {active: false}));
      }
    }
    componentDidMount(){
      document.addEventListener("keydown", this.handleKeyPress, false);
      document.addEventListener("keyup", this.handleKeyUp, false);
    }
    render() {
      return <div>
          <Button style={this.state} variant="secondary" size="lg" active={this.state.active} onClick={this.playAudio} className="drum-pad">
            {this.props.letter}
          </Button>
        </div>
    }
  }