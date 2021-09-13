import React, { useState } from "react";

const Contact = () => {
	const [val, setVal] = useState({
		fullname: "",
		phone: "",
		email: "",
		message: "",
	});
	const InoutEvent = (e) => {
		const { name, value } = e.target;
		setVal((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};
	const formSubmit = (e) => {
		e.preventDefault();
		alert(
			`My name is ${val.fullname} My phone number is ${val.phone}  My Email is ${val.email} I want to say that ${val.message}`
		);
		setVal({
			fullname: "",
			phone: "",
			email: "",
			message: "",
		});
	};
	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Contact US</h1>
			</div>
			<div className="container contact-div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<form onSubmit={formSubmit}>
							<div className="mb-3">
								<label for="exampleFormControlInput1" className="form-label">
									FullName
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									onChange={InoutEvent}
									name="fullname"
									value={val.fullname}
									placeholder="Enter Your FullName"
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlInput1" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									onChange={InoutEvent}
									name="email"
									value={val.email}
									placeholder="name@example.com"
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlInput1" className="form-label">
									Phone
								</label>
								<input
									type="number"
									className="form-control"
									id="exampleFormControlInput1"
									onChange={InoutEvent}
									name="phone"
									value={val.phone}
									placeholder="Mobile Number"
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlTextarea1" className="form-label">
									Message
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="7"
									onChange={InoutEvent}
									name="message"
									value={val.message}
									placeholder="Enter Your Feedback"
								></textarea>
							</div>
							<div className="col-12 btndiv">
								<button className="btn-get-started" type="submit">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
