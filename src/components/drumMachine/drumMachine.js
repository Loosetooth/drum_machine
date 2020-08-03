import React, {Component} from 'react';
import './drumMachine.scss'
import DrumButton from "../drumButton/drumButton";
import { observer } from "mobx-react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Badge from "react-bootstrap/Badge";

class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        this.audio_sources = [
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
          "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
          "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
          "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
          "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        ];
        this.buttons = this.letters.map((letter, i) => <DrumButton letter={letter} audioSource={this.audio_sources[i]} keyBind={this.onPress} store={this.props.store}/>);
        this.global_style = {
          display: "grid",
          gridTemplateAreas: '"buttons buttons buttons display"\
                              "buttons buttons buttons ."\
                              "buttons buttons buttons ."',

        };
        this.buttons_style = {
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          width: "190px"
        };
        this.output_style = {
          marginLeft: "50px",
          marginTop: "20px",
          height: "30px",
          textAlign: "center",
          fontSize: "19px",
          width: "180px"
        };
        this.div_style ={
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
        }
    }
    render() {
      return <div style={this.div_style}>
      <Jumbotron id="drum-machine" className="component-drum-machine" style={this.global_style}>
        <div style={this.buttons_style} className="buttons">
          {this.buttons}
        </div>
        <Badge variant="primary" id="display" className="display" style={this.output_style}>{this.props.store.display}</Badge>
      </Jumbotron>
      <p>Made by <a href="https://github.com/Loosetooth">Loosetooth</a>.</p>
      </div>;
    }
  }

export default observer(DrumMachine);