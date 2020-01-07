import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div className="container-fluid" >
					<div className="row padding">
						<div className="col-sm-12 head">
							<img onClick={() => this.props.history.push('/')} src={require('../assets/images/logo.png')} style={{ width: '10%' }} />
							<button className="btn btn-secondary btn-login float-right" onClick={() => this.props.history.push('/login')}>Login</button>
						</div>
					</div>
					<div className="row" style={{ marginTop: 100 }}>
						<div className="col-sm-3"></div>
						<div className="col-sm-6">
							<div className="" style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
								<h1><b>Overwhelmed?</b>&nbsp;We can help</h1>
								<div>OGItask offers a simpler way to stay organized. If you have a crazy job or an ambitious project, we will be your trusty sidekick.</div>
								<div>
									<br />
									<form action="" className="form-inline justify-content-center">
										<div className="form-group">
											<TextField style={{ width: '100%' }}
												id="outlined-secondary"
												label="Email"
												variant="outlined" />
										</div>
										<div className="form-group" style={{ marginLeft: 20 }}>
											<Button variant="contained" color="primary" style={{ backgroundColor: '#0093BF' }}>Sign In</Button>
										</div>
									</form>
								</div>
								<br />
								<div style={{ 'text-align': 'center' }}>
									<span>Already have an account?</span>&nbsp;&nbsp;
									<button className="btn btn-secondary btn-sm btn-login" onClick={() => this.props.history.push('/login')}>Log in</button>
								</div>
							</div>
						</div>
						<div className="col-sm-3"></div>
					</div>
					<br /><br />
					<div className="row padding">
						<div className="col-sm-1"></div>
						<div className="col-sm-3">
							<div style={{ 'text-align': 'center' }}>
								<img src={require('../assets/images/placeholder.png')} style={{ width: '100px', 'text-align': 'center' }} />
							</div>
							<span className="feature-card">Ev Williams, founder of Medium, Twitter, and Blogger, uses OGItask every day</span>
						</div>
						<div className="col-sm-3">
							<div style={{ 'text-align': 'center' }}>
								<img src={require('../assets/images/placeholder.png')} style={{ width: '100px', 'text-align': 'center' }} />
							</div>
							<span className="feature-card">Farhad Manjoo, the New York Times technology columnist, runs his writing process with OGItask</span>
						</div>
						<div className="col-sm-3">
							<div style={{ 'text-align': 'center' }}>
								<img src={require('../assets/images/placeholder.png')} style={{ width: '100px', 'text-align': 'center' }} />
							</div>
							<span className="feature-card">Slack, one of the fastest growing companies of all time, was started with OGItask</span>
						</div>
						<div className="col-sm-1"></div>
					</div>
					<div className="row padding">
						<div className="col-sm-1"></div>
						<div className="col-sm-3">
							<div style={{ 'text-align': 'center' }}>
								<img src={require('../assets/images/placeholder.png')} style={{ width: '100px', 'text-align': 'center' }} />
							</div>
							<span className="feature-card">The CEO of Atlassian, a company worth over $10 billion, stays productive with OGItask</span>
						</div>
						<div className="col-sm-3">
							<div style={{ 'text-align': 'center' }}>
								<img src={require('../assets/images/placeholder.png')} style={{ width: '100px', 'text-align': 'center' }} />
							</div>
							<span className="feature-card">The New York Times bestselling book "Hatching Twitter" was written using OGItask</span>
						</div>
						<div className="col-sm-3">
							<div style={{ 'text-align': 'center' }}>
								<img src={require('../assets/images/placeholder.png')} style={{ width: '100px', 'text-align': 'center' }} />
							</div>
							<span className="feature-card">OGItask uses OGItask to build OGItask;)</span>
						</div>
						<div className="col-sm-1"></div>
					</div>
				</div>
				<br />	<br />
				<Footer />
			</div>

		);
	}
}
export default Home;





