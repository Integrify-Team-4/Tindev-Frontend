import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/standing-lady.svg'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
import CustomButton from '../../components/CustomButton'
import Footer from '../../components/Footer'
import { loginUserRequest } from '../../redux/actions/user'
import { AppState } from '../../redux/types'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector((state: AppState) => state.user)
  const { error, loading } = user
  const role = useSelector((state: AppState) => state.user.credential.role)

  const submitHandler = (e: React.FormEvent) => {
    console.log('role1', role)
    e.preventDefault()
    dispatch(loginUserRequest(email, password))
    if (role === 'jobseeker') {
      console.log('role', role)
      history.push('/jobseeker/profile')
    } else if (role === 'employer') {
      console.log('role', role)
      history.push('/company/profile')
    }
  }

  return (
    <>
      <FormContainer>
        <h2 className="signin text-center purple-text">Signin to TinDev</h2>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label className="label">EMAIL</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="label">PASSWORD</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <CustomButton text="Login" className="login-button" />
        </Form>
        <Row className="forgot-password py-3">
          <Col>
            <Link className="forgot-password" to="/reset-password">
              Forgot your password?
            </Link>
          </Col>
        </Row>
        <Row className="new-user">
          <Col>
            New User?{' '}
            <Link className="register" to="/register">
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
      <CustomSvgIcon img={starsLady} />
      <Footer />
    </>
  )
}

export default Login
