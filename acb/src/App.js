import React from 'react';
import './assets/scss/index.scss';
import Backgound from './components/Backgound';
import Login from './components/views/Login';
import bg from './assets/img/bg1.jpg';

import Thele from './components/views/Thele';
import Gift from './components/views/Gift';
import Rate from './components/views/Rate';
import Loichuc from './components/views/LoiChuc';
class App extends React.Component {
  constructor(){
    super();
    this.state = ({
      index:2
      
    });
  }
  handleOnEnded = () => {
    this.setState(prevState => ({
      index: prevState.index + 1
    }));
  };
  handleOnBack = (e) => {
    const index = e;
    switch (index) {
      case 0:
        this.setState({ index: 0 });
        break;
      case 1:
        this.setState({ index: 1 });
        break;
      case 2:
        this.setState({ index: 2 });
        break;
      case 3:
        this.setState({ index: 3 });
        break;
      case 4:
        this.setState({ index: 4 });
        break;
      default:
       this.setState({ index: 0 });
        break;
    }
  };

  renderView = () => {
    const index= this.state.index;
    switch (index) {
       case 0:
         return <Login handleOnEnded={this.handleOnEnded} />;
       case 1:
         return (<Thele handleOnEnded={this.handleOnEnded} handleOnBack={this.handleOnBack}/>);
       case 2:
          return (<Gift handleOnEnded={this.handleOnEnded} />);
       case 3:
          return (<Loichuc handleOnEnded={this.handleOnEnded} />);
       case 4:
          return (<Rate handleOnEnded={this.handleOnEnded} />);
       default:
         return <Login handleOnBack={this.handleOnBack} />;
     }
  }
  render(){
     var background = {
       height : "100vh",
      backgroundImage: "url(" +  bg  + ")"
    }
    return(
      <div className="wrapper" style={background}>
      <Backgound/>
          {this.renderView()}
      </div>
      
    )
  }
}

export default App;
