import React from 'react';
import logo from '../../assets/img/login-kv.png';
import logo1 from '../../assets/img/chuc-mung.png';
import { Button, Form, Input, Alert } from 'reactstrap';
import User from '../../units/User';
class Login extends React.Component {
    constructor() {
        super();
        this.state = ({
            txt_user: "wejelly",
            txt_password: "wejelly"
          
        });
    }
    onHandInput = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });

    }
    onhandleOnSubmit = (event) => {
        event.preventDefault();
        const user = this.state.txt_user;
       const password =  this.state.txt_password;
       User.Login({
            user,
            password
          }).then(res => {
            if (res.status ==="OK") {
                this.setState({
                    message: res.message
                    
                })
                var testObject  = {name: user, password: password};
                localStorage.setItem('testObject', JSON.stringify(testObject));
                // var retrievedObject = localStorage.getItem('testObject');
                // console.log('retrievedObject: ', JSON.parse(retrievedObject));
               this.props.handleOnEnded();
            }else{
                this.setState({
                    message: res.message
                })
            }
          });
      
    }
    render() {
        const {txt_user,txt_password} = this.state;
        return (
          
            <div className="index-login">
             
                 <div className="bg-left">
                     <img src={logo} alt="" />
                 </div>
                <div className="bg-right">
                    <div className="bao">
                        <img src={logo1} alt="" />
                        <Form >
                            <Input
                                type="user"
                                name="txt_user"
                                className="edit-input"
                                placeholder="Username"
                                value={txt_user}
                                onChange={this.onHandInput}
                            >
                            </Input>
                            <Input
                                type="password"
                                name="txt_password"
                                className="edit-input"
                                value={txt_password}
                                placeholder="Password"
                                onChange={this.onHandInput}
                            >
                            </Input>
                            <Button
                                type="button"
                                onClick={this.onhandleOnSubmit}
                                className="success"
                            >
                                Login
                        </Button>
                          
                        </Form>
                        <Alert color="warning">
                        {this.state.message}
      </Alert>
                                
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>

        );
    }
}

export default Login;
