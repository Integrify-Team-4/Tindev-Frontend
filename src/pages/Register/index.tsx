import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';

import HalfCircle from '../../components/HalfCircle';
import CustomSvgIcon from '../../components/CustomSvgIcon';
import starsLady from '../../media/star-lady.svg';
import CustomButton from '../../components/CustomButton';

const Register = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<>
			<HalfCircle inputText='Welcome' />
			<h3 className='text-center my-5'>Sign up</h3>
			<Form
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
				className='container'>
				<Form.Row>
					<Form.Group as={Col} sm='8' controlId='validationCustomUsername'>
						<Form.Control required type='text' placeholder='Username' />
						<Form.Control.Feedback type='invalid'>
							Username is required
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} sm='8' controlId='validationCustomEmail'>
						<Form.Control required type='email' placeholder='eMail' />
						<Form.Control.Feedback type='invalid'>
							eMail is required
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} sm='8' controlId='validationCustomPassword'>
						<Form.Control required type='password' placeholder='Password' />
						<Form.Control.Feedback type='invalid'>
							Password is required
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group
						as={Col}
						sm='8'
						controlId='validationCustomConfirmPassword'>
						<Form.Control
							required
							type='password'
							placeholder='Confirm password'
						/>
						<Form.Control.Feedback type='invalid'>
							Passwords does not match!
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>

				<CustomButton text='Submit' className='my-3' />

				<p>
					Already a member? <Link to='/login'>Sign In</Link>
				</p>
			</Form>
			<CustomSvgIcon img={starsLady} />
		</>
	);
};

export default Register;
