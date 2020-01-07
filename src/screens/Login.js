import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
class Login extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
		<div className="container-fluid">
		  <div className="row padding">
			<div className="col-sm-12 head">
			<img onClick={()=> this.props.history.push('/')} src={require('../assets/images/logo.png')} style={{width:'10%'}}/>
		    <button className="btn btn-secondary btn-login float-right" 
			onClick={()=> this.props.history.push('/signup')}>Sign Up</button>
			</div>
		  </div>
		   <div className="row">
				<div className="col-sm-12">
					<div className="form">
						<div className="row justify-content-center align-items-center h-100">
							<h4><b>Log in to OGItask</b></h4>
						</div>
					    <div className="row justify-content-center align-items-center h-100">
							<div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
								<form action="">
									<div className="form-group">
										<TextField id="outlined-secondary"label="Email"variant="outlined" 
										style={{
									width:"100%"}}/>
									</div>

									<div className="form-group">
									<Button variant="contained" color="primary" style={{backgroundColor:'#0093BF',
									width:"100%"}}>
										Sign In
									</Button>
										
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
		  </div>	
		</div>
      );
  }
}
export default Login;
