import React from 'react';
import './assets/scss/index.scss';
// import Backgound from './components/Backgound';
import Login from './components/views/Login';

import Thele from './components/views/Thele';
import Gift from './components/views/Gift';
// import Rate from './components/views/Rate';
class App extends React.Component {
  constructor(){
    super();
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
  handleOnEnded = () => {
    this.setState(prevState => ({
      index: prevState.index + 1
    }));
  };
  handleOnBack = (e) => {
    const index = e;
    // if(index === 0){
    //   this.setState({ index: 1 });
    // }else if(index === 1){
    //   this.setState({ index: 2 });
    // }else{
    //   this.setState(prevState => ({
    //     index: prevState.index + 1
    //   }));
    // }
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
      default:
       this.setState({ index: 0 });
        break;
    }
  };

  renderView = () => {
    const index= this.state.index;
    // const props = this.state;
    switch (index) {
       case 0:
         return <Login handleOnEnded={this.handleOnEnded} />;
       case 1:
         return (<Thele handleOnEnded={this.handleOnEnded} handleOnBack={this.handleOnBack}/>);
       case 2:
          return (<Gift handleOnEnded={this.handleOnEnded} />);
       default:
         return <Login handleOnBack={this.handleOnBack} />;
     }
  }
  render(){
    return(
      <div>
          {this.renderView()}
      </div>
      
    )
  }
}

export default App;
