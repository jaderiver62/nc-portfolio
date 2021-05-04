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
				<img src={paperPlane} style={{ width: "15%", padding: "40px" }} alt="paper plane" class="airplane" />

					Send me a message!

					</h1>
			</div>

			<div class="contact-panel">
				<form id="contact-me" onSubmit={handleSubmit}>
					<div class="form-element">
						<label htmlFor="name">Name:</label>
						<br />
						<br />
						<input type="text" defaultValue={name} onBlur={handleFocus}
							name="name" />
					</div>
					<div class="form-element">
						<label htmlFor="message">Message:</label>
						<br />
						<br />
						<textarea defaultValue={message} onBlur={handleFocus}
							name="message" rows="12" cols="100"/>
					</div>			

					<div class="form-element">
						<label htmlFor="email">E-mail:</label>
						<br />
						<br />
						<input type="text" defaultValue={email} onBlur={handleFocus}
							name="email" />
					</div>
					{errorMessage && (
                    <div>
                        <p className="error-msg">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" class="btn">Send</button>
				</form>
			</div>
			<img src={airplane} style={{ width: "15%", padding: "40px" }} alt="airplane" class="airplane" />
		</div>
	</section>)

}

export default Contact;