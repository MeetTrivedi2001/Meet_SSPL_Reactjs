import React from 'react';
import { Link } from 'react-router-dom';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      password: '',
      validationError: '',
      dataSaved: false
    };
  }
  componentDidMount() {
    this.getData();
  }
   getData()
    {
    if (localStorage.getItem('userdata'))
     {
      var a = localStorage.getItem('userdata');
      var Data = JSON.parse(a);
      this.setState({
        name: Data.name,
        email: Data.email,
        mobile: Data.mobile,
        password: Data.password
      });
    } else 
    {
      this.setState({ validationError:'Data Not Present'});
    }
  }
  btnSignup(e) {
    e.preventDefault();
    const { name, email, mobile, password } = this.state;

    if (name === '' || email === '' || mobile === '' || password === '') {
      this.setState({ validationError: 'Please enter all the fields' });
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      this.setState({ validationError: 'Name should contain only alphabets' });
    } else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({ validationError: 'Invalid email format' });
    } else {
      var myobj = { name, email, mobile, password };
      localStorage.setItem('userdata', JSON.stringify(myobj));
      this.setState({
        validationError: '',
        dataSaved: true,
        name: '',
        email: '',
        mobile: '',
        password: ''
      });
    }
  }
  render() {
    return (
      <>
        <h2>SignUp</h2>
        <form onSubmit={this.btnSignup.bind(this)}>
          <label>Name:</label>
          <input  type='text'name='name' value={this.state.name}onChange={(e) => this.setState({ name: e.target.value })} />
          <br />
          <br />
          <label>Email:</label>
          <input type='text'name='email'value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          <br />
          <br />
          <label>Mobile No:</label>
          <input type='text' name='mobile' value={this.state.mobile}onChange={(e) => this.setState({ mobile: e.target.value })}/>
          <br />
          <br />
          <label>Password:</label>
          <input type='password' name='password'value={this.state.password}onChange={(e) => this.setState({ password: e.target.value })}/>
          <br />
          <br />
          <input type='submit' value='SignUp' />
          &nbsp;&nbsp;&nbsp;
          <Link to='/login'>Login</Link>
        </form>
        {this.state.validationError && (
          <p style={{ color: 'red' }}>{this.state.validationError}</p>
        )}
        {this.state.dataSaved && (
          <p style={{ color: 'green' }}>Data Saved</p>
        )}
      </>
    );
  }
}
export default SignupForm;