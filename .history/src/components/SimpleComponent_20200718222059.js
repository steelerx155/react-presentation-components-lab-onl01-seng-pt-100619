// Code SimpleComponent Here
import React, {Component} from 'react';

class SimpleComponent extends Component {
    constructor(props) {
        super(props);
 this.state = {
     mood: "happy"
 }
}

 handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({mood: newMood});
 }


render(){
return <div onClick={this.state.mood}> </div>
    }
}

export default SimpleComponent