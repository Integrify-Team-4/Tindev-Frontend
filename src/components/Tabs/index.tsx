import React from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'

const Tabs = ({ formComponent, matchComponent, chatComponent }: any) => {
  return (
    <div className="py-3">
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav className="flex-column nav-bar">
              <Nav.Item>
                <Nav.Link eventKey="first">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Match</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Chat</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className="tab-content">
            <Tab.Content>
              <Tab.Pane eventKey="first">{formComponent}</Tab.Pane>
              <Tab.Pane eventKey="second">{matchComponent}</Tab.Pane>
              <Tab.Pane eventKey="third">{chatComponent}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Tabs
