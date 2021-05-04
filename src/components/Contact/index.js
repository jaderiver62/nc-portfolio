import React, { useState } from "react";
import { validater } from "../../utils/helpers";
//TODO: create email validator

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
		}
		if (!error.target.value.length) setErrorMessage(`Please enter your ${error.target.name}!`)
		else setErrorMessage("");
	}
	const handleSubmit = (error) => {
		error.preventDefault();
		if (!errorMessage) {
			setFormState({ [error.target.name]: error.target.value });
			console.log('Form', formState);
		}
	};


	return (<section class="page">
		<div class="contact-container">
			<div class="contact-panel">
				<h1>
					Send me a message!
					</h1>
			</div>
			<div class="contact-panel">
				<form id="contact-me">
					<div>
						<label htmlFor="Name">Name:</label>
						<br />
						<br />
						<input type="text" defaultValue={name} onBlur={handleFocus}
							name="Name" />
					</div>
				</form>
			</div>

		</div>
	</section>)

}

export default Contact;