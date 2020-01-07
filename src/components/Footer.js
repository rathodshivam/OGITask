import React, { Component } from 'react';
import "../App.css";
class Footer extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
			<section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
		
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Blog</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Twitter</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>System Status</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Privacy</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>List Marker</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Online Notedpad</a></li>
					</ul>
				</div>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p className="h6">@2020 Copy All right Reversed.</p>
				</div>
			</div>	
		</div>
	</section>
      );
  }
}
export default Footer;
