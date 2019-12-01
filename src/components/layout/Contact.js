import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
toast.configure();

function Contact() {
	const [ fireRedirect, setFireRedirect ] = useState(false);
	const [ formInfo, setFormInfo ] = useState({
		name: '',
		email: '',
		comment: ''
	});
	const { name, email, comment } = formInfo;

	const onSubmit = (e) => {
		e.preventDefault();

		toast.success('Thank you for submitting your feedback!', {
			bodyClassName: 'toast-background',
			position: 'top-left',
			autoClose: 4000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true
		});
		setFireRedirect(true);
		const content = {
			name,
			email,
			comment
		};
		axios.post('https://www.enformed.io/awrr3hsj', content);
	};

	const onChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
	return (
		<div id="form-main">
			<h2 className="contact-header">Send Us Feedback!</h2>
			<div id="form-div" className=" card shadow-lg">
				<form class="form " id="form1" onSubmit={(e) => onSubmit(e)}>
					<p class="name">
						<input
							name="name"
							type="text"
							value={name}
							required
							class="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
							placeholder="Name"
							id="name"
							onChange={(e) => onChange(e)}
						/>
					</p>

					<p class="email">
						<input
							name="email"
							value={email}
							type="text"
							required
							class="validate[required,custom[email]] feedback-input"
							id="email"
							placeholder="Email"
							onChange={(e) => onChange(e)}
						/>
					</p>

					<p class="text">
						<textarea
							name="comment"
							value={comment}
							class=" feedback-input"
							id="comment"
							placeholder="Message"
							required
							onChange={(e) => onChange(e)}
						/>
					</p>

					<div class="submit">
						<input type="submit" value="SEND" id="button-blue" />
					</div>
				</form>
			</div>
			{fireRedirect && <Redirect to="/" />}
		</div>
	);
}

export default Contact;
