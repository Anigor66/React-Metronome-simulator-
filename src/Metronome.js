import React, { Component } from 'react'
import './Metronome.css'
import click1 from './click1.wav';
import click2 from './click2.wav';

class Metronome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 70,
            beatsPerMeasure: 4
        }

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
      }
    
    slider = (e) => {
        const bpm = e.target.value;
        if(this.state.playing){
            clearInterval(this.timer);
            this.timer = setInterval(this.play,(60 / bpm) * 1000);
            this.setState({count: 0, bpm}); 
        }
        else{
            this.setState({bpm});
        }
    }
    playToggle = () => {
        const status = this.state.playing;
        if(status){
            clearInterval(this.timer);
            this.setState({playing: false});
        }
        else{
            this.timer = setInterval(this.play,(60 / this.state.bpm) * 1000);
            this.setState({playing: true, count: 0}, this.play);
        }
    }
    play = () => {
        if(this.state.count % this.state.beatsPerMeasure === 0){
            this.click2.play();
        }
        else{
            this.click1.play();
        }
        
        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
          }));
       }

    
    render() {
        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{this.state.bpm} BPM</div>
                    <input type="range" min="60" max="240" value={this.state.bpm}  onChange={this.slider}/>
                </div>
                <button onClick={this.playToggle}>{this.state.playing ? 'Stop' : 'Start'}</button>
            </div>
        )
    }
}

export default Metronome
