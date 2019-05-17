import React from 'react';
class Thele extends React.Component {
    // view = () =>{
    //     const index = this.props.index;
    //     this.props.handleOnBack(index+1);
    // }
    handleClick=()=>{
        this.props.handleOnEnded()
    }
    handleClickback=()=>{
        this.props.handleOnBack(0)
    }
    render(){
        
        return(
            <div>
                <h1>The Le</h1>
                <button onClick={this.handleClick}>click next</button>
                <button onClick={this.handleClickback}>click back</button>
            </div>
        )
    }
}
export default Thele;


