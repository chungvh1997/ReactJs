import React from 'react';
import {Button} from 'reactstrap';
class Thele extends React.Component {
    view = () =>{
        // const index = this.props.index;
        console.log(this.props.handleOnBack(index+1));
    }
    render(){
        return(
            <div>
                <h1>The Le</h1>
                <Button type="button" onClick={this.view}>Button</Button>
            </div>
        )
    }
}
export default Thele;


