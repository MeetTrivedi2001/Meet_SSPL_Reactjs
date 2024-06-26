import React, { Component } from 'react';
import { Link,Navigate} from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            LoggedIn: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleLogin(event){
        event.preventDefault();

        const { email, password } = this.state;

        const storeduser = JSON.parse(localStorage.getItem('userdata'));
        if (email === '' || password === '') {
            alert('Please enter email and password');
        } else if (storeduser && email === storeduser.email && password === storeduser.password) {
            this.setState({ error: '' });
            this.setState({ LoggedIn: true });
        } else {
            this.setState({ error: 'Invalid username or password' });
        }

    }
    render() {
        const { LoggedIn } = this.state;
        if (LoggedIn) 
        {
          return <Navigate to="/homepage" />;
        }
        return (
            <>  
            <h2>Login Page</h2>
            <form  onSubmit={this.handleLogin}>
                Email:<input type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange}/><br/><br/>
                Password:<input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange}/><br/><br/>
                <button type="submit">Login</button>    
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                <div>Don't have account?<Link to = "/SignupForm">Signup</Link></div>
                <div><Link to ="/resetpassword">Forgot Password</Link><br/></div>
            </form>
            </>
        );
    }
}
export default Login;