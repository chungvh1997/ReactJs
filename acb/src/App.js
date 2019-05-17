import React from 'react';
import './assets/scss/index.scss';
// import Backgound from './components/Backgound';
import Login from './components/views/Login';

import Thele from './components/views/Thele';
import Gift from './components/views/Gift';
// import Rate from './components/views/Rate';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      index:0
      
    });
  }
  // changeIndex = (prop) => {
  //   this.setState({
  //     index:prop
  //   })
  // };
  // renderComponent = (index) =>{

  //   switch (index) {
  //     case 0:
  //       console.log("so 0");
  //       return  <Login changeIndex={this.renderComponent} />;
  //     case 1:
  //     console.log(index);
  //     console.log("so 1");
  //       return  <Thele changeIndex={this.renderComponent}/> ;
        
  //     case 2:
  //       return <Gift changeIndex={this.renderComponent}/>;
  //     case 3:
  //       return <Rate changeIndex={this.renderComponent}/>;
  //     default:
  //       return <Login />
  //   }
  // }
  handleOnBack = (e) => {
    switch (e) {
      case 0:
        this.setState({ index: 0 });
        break;
      case 1:
        this.setState({ index: 1 });
        break;
      case 2:
        this.setState({ index: 2 });
        break;
      default:
       this.setState({ index: 0 });
        break;
    }
  };

  render(){
    const {index}= this.state;
    console.log(index);
    switch (index) {
       case 0:
         return <Login handleOnBack={this.handleOnBack} index ={this.state.index} />;
       case 1:
         return (
           <Thele handleOnBack={this.handleOnBack}  index ={this.state.index}/>
         );
       case 2:
       return (
        <Gift handleOnBack={this.handleOnBack} />
      );
       default:
       return <Login handleOnBack={this.handleOnBack} />;
     }


  }
}

export default App;
