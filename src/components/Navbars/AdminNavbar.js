/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import {Logout} from '../../redux/actions/authAction'
import {connect} from 'react-redux'
// reactstrap components
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	FormGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	InputGroup,
	Navbar,
	Nav,
	Container,
	Media,
} from "reactstrap";

class AdminNavbar extends React.Component {
	render() {
		return (
			<>
				<Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
					<Container fluid>
						<Link
							className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
							to="/"
						>
							{this.props.brandText}
						</Link>
						<Nav className="align-items-center d-none d-md-flex" navbar>
							<UncontrolledDropdown nav>
								<DropdownToggle className="pr-0" nav>
									<Media className="align-items-center">
										<Media className="ml-2 d-none d-lg-block">Admin</Media>
									</Media>
								</DropdownToggle>
								<DropdownMenu className="dropdown-menu-arrow" right>
									<DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
										<i className="ni ni-user-run" />
										<Link to="/auth/login">
										<span
										onClick={() =>{
											this.props.Logout()
						  
										}} 
										>Logout</span>
										</Link>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Container>
				</Navbar>
			</>
		);
	}
}

export function mapStateToProps(state) {
	return {
	
		user: state.auth.user,
		notification: state.auth.notification,
		msg: state.auth.msg,
		loggedIn:state.auth.loggedIn
		
	};
}

export default connect(mapStateToProps,{Logout})(AdminNavbar)
