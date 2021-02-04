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

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Row,
	Col,
} from "reactstrap";

class Register extends React.Component {
	render() {
		return (
			<>
				<Col lg="6" md="8">
					<Card className="bg-secondary shadow border-0">
						<CardBody className="px-lg-5 py-lg-5">
							<div className="text-center mt-2 mb-4">
								<small>Sign up </small>
							</div>
							<Form role="form" onSubmit={e => e.preventDefault()}>
								<FormGroup className="mb-3">
								<FormGroup className="mb-3">
									<InputGroup className="input-group-alternative">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ni ni-lock-circle-open" />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											placeholder="Name"
											type="text"
											autoComplete="new-text"
										/>
									</InputGroup>
								</FormGroup>
								{/* <InputGroup className="input-group-alternative">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ni ni-email-83" />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											placeholder="Name"
											type="text"
											
										/>
									</InputGroup> */}
									<InputGroup className="input-group-alternative">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>		
												<i className="ni ni-email-83" />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											placeholder="Email"
											type="email"
											autoComplete="new-email"
										/>
									</InputGroup>
								</FormGroup>
								<FormGroup className="mb-3">
									<InputGroup className="input-group-alternative">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ni ni-lock-circle-open" />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											placeholder="Password"
											type="password"
											autoComplete="new-password"
										/>
									</InputGroup>
								</FormGroup>
								<FormGroup>
									<InputGroup className="input-group-alternative">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ni ni-lock-circle-open" />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											placeholder="Confirm Password"
											type="password"
											autoComplete="new-password"
										/>
									</InputGroup>
								</FormGroup>
								<div className="text-center">
									<span className="d-block">
										Already have account? <Link to="/auth/login">Login</Link>
									</span>
									<Button className="mt-4" color="primary" type="submit">
										Create account
									</Button>
								</div>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</>
		);
	}
}

export default Register;
