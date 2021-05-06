import React, { useState } from "react";
import { validater } from "../../utils/helpers";
import airplane from "../../assets/contact/airplane.png";
import paperPlane from "../../assets/contact/paper-plane.png";



function Contact() {
	const [formState, setFormState] = useState({ name: "", message: "", email: "" });
	const [errorMessage, setErrorMessage] = useState("");
	const { name, message, email } = formState;

	function handleInput(error) {
		setFormState({ ...formState, [error.target.name]: error.target.value });
	}
	function handleFocus(error) {
		if (error.target.name === "email") {
			if (!validater(error.target.value)) setErrorMessage("Invalid e-mail!")
			else setErrorMessage("");
		} else if (!error.target.value.length) setErrorMessage(`Please enter your ${error.target.name}!`)
		else setErrorMessage("");
	}
	const handleSubmit = (error) => {
		error.preventDefault();
		if (!errorMessage) {
			setFormState({ [error.target.name]: error.target.value });
			console.log('Form', formState);
		}
	};


	return (<section className="page">

		<div className="contact-container">
			<div className="contact-panel">
				<h1>
					Send me a message!
				</h1>
				<img src={paperPlane} style={{ width: "10%" }} alt="paper plane" className="airplane" />

			</div>
			<div className="contact-panel">
				<form id="contact-me" onSubmit={handleSubmit}>
					<div className="form-element">
						<label htmlFor="name">name:</label>
						<br />
						<br />
						<input type="text" defaultValue={name} onChange={handleInput} onBlur={handleFocus}
							name="name" className="contact-input" />
					</div>
					<div className="form-element">
						<label htmlFor="message">message:</label>
						<br />
						<br />
						<textarea defaultValue={message} onChange={handleInput} onBlur={handleFocus}
							name="message" rows="12" cols="50" className="contact-input" />
					</div>

					<div className="form-element">
						<label htmlFor="email">e-mail:</label>
						<br />
						<br />
						<input type="text" defaultValue={email} onChange={handleInput} onBlur={handleFocus}
							name="email" className="contact-input" />
					</div>
					{errorMessage && (
						<div>
							<p className="error-msg">{errorMessage}</p>
						</div>
					)}
					<button type="submit" className="btn">Send</button>
				</form>
			</div>
			<img src={airplane} style={{ width: "15%", padding: "40px", opacity: ".7" }} alt="airplane" className="airplane" />
			<br />
			<br /><div className="contact-details">
				e-mail: <a href="mailto:jaderiver64@gmail.com">jaderiver64@gmail.com</a>
				<br/>
				<br/>
				cell: (612) 242-4871
				</div>
		</div>
	</section>)

}

export default Contact;