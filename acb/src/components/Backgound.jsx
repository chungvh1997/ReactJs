import React from 'react';
import logo from '../assets/img/login-logo.png';

class Backgound extends React.Component {
    
  render(){
    var lg = {
        width: "76px",
        height: "30px",
        backgroundRepeat:"no-repeat",
        padding: "30px 0px",
        backgroundPosition: "bottom",
        backgroundImage: "url(" +  logo  + ")"
    }
    return (
        <div className="index-lg" style={lg}></div>
    );
  }
}

export default Backgound;
