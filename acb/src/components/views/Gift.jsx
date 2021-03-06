import React from 'react';
import title from '../../assets/img/chon-qua-title.png';
import {Container, Row, Col} from 'reactstrap';
import boy1 from '../../assets/img/boys/boy1.png'
import boy1_1 from '../../assets/img/boys/boy1_1.png'
import boy2 from '../../assets/img/boys/boy2.png'
import boy2_1 from '../../assets/img/boys/boy2_1.png'
import boy3 from '../../assets/img/boys/boy3.png'
import boy3_1 from '../../assets/img/boys/boy3_1.png'
import boy4 from '../../assets/img/boys/boy4.png'
import boy4_1 from '../../assets/img/boys/boy4_1.png'
import boy5 from '../../assets/img/boys/boy5.png'
import boy5_1 from '../../assets/img/boys/boy5_1.png'

const items = [
    {
        id:0,
        name: "Boy",
        url:boy1,
        img:boy1_1
    },
    {
        id:1,
        name: "Boy 1",
        url:boy2,
        img:boy2_1
    },
    {
        id:2,
        name: "Boy 2",
        url:boy3,
        img:boy3_1
    },
    {
        id:3,
        name: "Boy 3",
        url:boy4,
        img:boy4_1
    },
    {
        id:4,
        name: "Boy 4",
        url:boy5,
        img:boy5_1
    },
]
const quas = [
    {
        id : 0,
        name:"Qua"
    },
    {
        id : 1,
        name:"Qua 1"
    },
    {
        id : 2,
        name:"Qua 2"
    },
]
class Gift extends React.Component {
    constructor(){
        super();
        this.state ={
            boyall: false
        }
    }
    
    
     
    componentDidMount() {
        this.intervalId =setInterval(() => {
            this.setState(state => ({
                boyall: !state.boyall
            }));
        }, 400);
          setTimeout(() => { clearInterval(this.intervalId) }, 3000);
    }
   
    onMouseEnter = (e) =>{
        const index = parseInt(e.target.id) ;
        switch (index) {
            case 0:
                console.log(123);
                this.intervalId =setInterval(() => {
                    this.setState(state => ({
                        boyall: !state.boyall
                    }));
                }, 400);
                break;
            case 1:
                this.intervalId =setInterval(() => {
                    this.setState(state => ({
                        boyall: !state.boyall
                    }));
                }, 400);
              break;
            case 2:
                this.intervalId =setInterval(() => {
                    this.setState(state => ({
                        boyall: !state.boyall
                    }));
                }, 400);
              break;
            case 3:
                this.intervalId =setInterval(() => {
                    this.setState(state => ({
                        boyall: !state.boyall
                    }));
                }, 400);
              break;
            case 4:
                this.intervalId =setInterval(() => {
                    this.setState(state => ({
                        boyall: !state.boyall
                    }));
                }, 400);
              break;
            default:
                // clearInterval(this.intervalId)
              break;
          }
        
        
    }
    onMouseLeave = (e) =>{
       
        
        e.target.src = clearInterval(this.intervalId)
       this.setState({
           boyall: false
       })
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
        const boy_item = this.state.boyall;
        var element = items.map((items,index) => {
            return (
                <div 
                    lg={2} 
                    key={index} 
                    className="box-item"
                    onClick={this.onStop}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    id={items.id}
                    >
                    
                    <img src={items.url} hidden={boy_item}  alt="boy"/>
                    <img src={items.img} hidden={!boy_item}  alt="boy"/>
                </div>
            )
        });
        return(
            <div className="index-gift">
                <Container>
                    <Row >
                        <Col className="title">
                            <img src={title} alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        {element}
                    </Row>
                    
                    
                </Container>
            </div>
        )
    }
}
export default Gift;