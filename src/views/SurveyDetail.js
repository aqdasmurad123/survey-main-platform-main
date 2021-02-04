import Header from "components/Headers/Header";
import React, { Component } from "react";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	CustomInput,
	Form,
	FormGroup,
	Input,
	Label,
	Progress,
	Row,
} from "reactstrap";

export class Survey extends Component {
	state = {
		currentQues: 0,
		questions: [
			{
				question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
				answer: "",
				answered: false,
			},
			{
				question: "placerat nibh. Lorem ipsum dolor sit amet, consectetur",
				answer: "",
				answered: false,
			},
			{
				question: "tincidunt nunc. Class aptent taciti sociosqu ad litora",
				answer: "",
				answered: false,
			},
		],
	};

	render() {
		return (
			<>
				<Header />
				{/* Page content */}
				<Container className="mt--7" fluid>
					{/* Table */}
					<Row>
						<div className="col">
							<Card className="shadow">
								<CardHeader className="border-0">
									<div style={{ display: "flex" }}>
										<Button
											color="link"
											className="p-0 m-0 text-dark"
											onClick={() => this.props.history.goBack()}
										>
											<i
												className="fas fa-long-arrow-alt-left "
												style={{ fontSize: "25px" }}
											/>
										</Button>
										<h3 className="ml-3 mb-0 ">Assessment</h3>
									</div>
								</CardHeader>
								<CardBody>
									<Row>
										<Col md="12">
											<h5 className="text-center">
												Progress (
												{Math.ceil(
													(this.state.questions.filter(
														it => it.answered == true
													).length /
														this.state.questions.length) *
														100
												)}
												%)
											</h5>
											<Progress
												style={{ width: "100%" }}
												animated
												color="success"
												value={
													(this.state.questions.filter(
														it => it.answered == true
													).length /
														this.state.questions.length) *
													100
												}
											/>
										</Col>
										<Col md="12">
											<Row className="text-center">
												<Col>
													Current Question: <b>{this.state.currentQues + 1}</b>
												</Col>
												<Col>
													Answered Questions:{" "}
													<b>
														{
															this.state.questions.filter(
																it => it.answered == true
															).length
														}
													</b>
												</Col>

												<Col>
													Total Questions: <b>{this.state.questions.length}</b>
												</Col>
											</Row>
										</Col>
										<Col md="12">
											<div className="question_wrapper mt-3">
												<h5>
													<b>Question no.{this.state.currentQues + 1}: </b>
													{
														this.state.questions[this.state.currentQues]
															.question
													}
												</h5>
											</div>
											<Form className="mt-4">
												<FormGroup>
													<Label>Answer:</Label>
													<Input
														type="textarea"
														name="answer"
														style={{ minHeight: "200px" }}
														value={
															this.state.questions[this.state.currentQues]
																.answer
														}
														onChange={e => {
															let ans = e.target.value;
															this.setState(prevState => {
																let copiedPrevState = JSON.parse(
																	JSON.stringify(prevState)
																);
																copiedPrevState.questions[
																	prevState.currentQues
																]["answer"] = ans;
																return {
																	...prevState,
																	questions: [...copiedPrevState.questions],
																};
															});
														}}
													></Input>
												</FormGroup>
												<FormGroup className="mt-2">
													<Label>File</Label>
													<CustomInput
														type="file"
														name="customFile"
														onChange={e => {
															let file = e.target.files[0];
															this.setState(prevState => {
																let copiedPrevState = JSON.parse(
																	JSON.stringify(prevState)
																);
																copiedPrevState.questions[
																	prevState.currentQues
																]["file"] = file;
																return {
																	...prevState,
																	questions: [...copiedPrevState.questions],
																};
															});
														}}
													/>
												</FormGroup>
											</Form>
											<div className="d-flex mt-3">
												<div className="left">
													<Button
														color="primary"
														disabled={this.state.currentQues == 0}
														onClick={() => {
															this.setState(prevState => {
																return {
																	currentQues: prevState.currentQues - 1,
																};
															});
														}}
													>
														Previous
													</Button>
												</div>
												<div className="right ml-auto">
													{!this.state.finished && (
														<Button
															color="primary"
															onClick={() => {
																if (
																	this.state.questions[this.state.currentQues]
																		.answer != ""
																) {
																	if (
																		this.state.currentQues !=
																		this.state.questions.length - 1
																	) {
																		this.setState(prevState => {
																			let copiedPrevState = JSON.parse(
																				JSON.stringify(prevState)
																			);
																			copiedPrevState.questions[
																				prevState.currentQues
																			]["answered"] = true;
																			return {
																				...prevState,
																				questions: [
																					...copiedPrevState.questions,
																				],
																				currentQues: prevState.currentQues + 1,
																			};
																		});
																	} else {
																		this.setState(prevState => {
																			let copiedPrevState = JSON.parse(
																				JSON.stringify(prevState)
																			);
																			copiedPrevState.questions[
																				prevState.currentQues
																			]["answered"] = true;
																			return {
																				...prevState,
																				questions: [
																					...copiedPrevState.questions,
																				],
																				currentQues: prevState.currentQues,
																				finished: true,
																			};
																		});
																		setTimeout(() => {
																			this.props.history.push("/admin/survey");
																		}, 5000);
																	}
																} else {
																	alert("Please Write Answer to Proceed");
																}
															}}
														>
															{this.state.questions.length - 1 ==
															this.state.currentQues
																? "Finish"
																: "Next"}
														</Button>
													)}
												</div>
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</div>
					</Row>
				</Container>
			</>
		);
	}
}

export default Survey;
