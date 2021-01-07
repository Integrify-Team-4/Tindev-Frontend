import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Col } from 'react-bootstrap'

import HalfCircle from '../../components/HalfCircle'
import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/star-lady.svg'
import CustomButton from '../../components/CustomButton'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { registerEmployerRequest } from '../../redux/actions/employer'
import { registerJobseekerRequest } from '../../redux/actions/jobseeker'
import { AppState } from '../../redux/types'
import FormContainer from '../../components/FormContainer'
import Role from '../../components/Role'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [role, setRole] = useState({})

  const employer = useSelector((state: AppState) => state.employer)
  const jobseeker = useSelector((state: AppState) => state.jobseeker)
  const jobseekerError = useSelector((state: AppState) => state.jobseeker.error)
  const jobseekerLoader = useSelector(
    (state: AppState) => state.jobseeker.loading
  )
  const employerError = useSelector((state: AppState) => state.employer.error)
  const employerLoader = useSelector(
    (state: AppState) => state.employer.loading
  )

  const dispatch = useDispatch()

  const handleRole = (event: React.FormEvent) => {
    event.preventDefault()
    if (document.getElementById('jobseeker') === event.target) {
      setRole(jobseeker)
    }
    if (document.getElementById('employer') === event.target) {
      setRole(employer)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    }

    if (role === jobseeker) {
      dispatch(registerJobseekerRequest(email, password))
      setMessage('Registered successfully')
    } else if (role === employer) {
      dispatch(registerEmployerRequest(email, password))
      setMessage('Registered successfully')
    }
  }

  return (
    <>
      <FormContainer>
        <HalfCircle inputText="Welcome" />
        <h3 className="text-center my-5 purple-text">Sign up</h3>
        {jobseekerError && <Message variant="danger">{jobseekerError}</Message>}
        {jobseekerLoader && <Loader />}
        {employerError && <Message variant="danger">{employerError}</Message>}
        {employerLoader && <Loader />}
        {!jobseekerError && !employerError && message && (
          <Message variant="success">{message}</Message>
        )}
        <Form onSubmit={handleSubmit} className="container">
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomEmail">
              <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomPassword">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomConfirmPassword">
              <Form.Control
                required
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Role handleRole={handleRole} text1="Employer" text2="Jobseeker" />

          <CustomButton text="Register" className="my-3 register-button" />

          <p>
            Already a member? <Link to="/login">Sign In</Link>
          </p>
        </Form>
      </FormContainer>
      <CustomSvgIcon img={starsLady} />
    </>
  )
}

export default Register
