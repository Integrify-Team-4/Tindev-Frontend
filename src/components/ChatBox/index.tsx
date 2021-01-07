import React from 'react'

import { Image } from 'react-bootstrap'

const ChatBox = () => {
  return (
    <>
      <div className="container">
        <div className="content-wrapper">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card m-0">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                    <div className="users-container">
                      <div className="chat-search-box">
                        <div className="input-group">
                          <input
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-info">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <ul className="users">
                        <li className="person" data-chat="person1">
                          <div className="user">
                            <Image
                              src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
                              alt="avatar"
                            />
                            <div className="chat-name">Duy</div>
                            <span className="status busy"></span>
                          </div>
                          <p className="name-time">
                            <span className="name"></span>
                            <span className="time">4/01/2021</span>
                          </p>
                        </li>
                        <li className="person" data-chat="person1">
                          <div className="user">
                            <Image
                              src="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                              alt="avatar"
                            />
                            <div className="chat-name">Dlip</div>
                            <span className="status online"></span>
                          </div>
                          <div className="chat-text">
                            Hi Kirsi. <br />
                            How are you today?
                          </div>
                          <p className="name-time">
                            <span className="name"></span>
                            <span className="time">4/01/2021</span>
                          </p>
                        </li>

                        <li className="person active-user" data-chat="person2">
                          <div className="user">
                            <Image
                              src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                              alt="avatar"
                            />
                            <div className="chat-name">BigMan</div>
                            <span className="status away"></span>
                          </div>
                          <p className="name-time">
                            <span className="name">I'm Mr.Big, yeah</span>
                            <span className="time">4/01/2021</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                    <div className="selected-user">
                      <span>
                        To: <span className="name">Dlip</span>
                      </span>
                    </div>
                    <div className="chat-container chat-messages">
                      <ul className="chat-box chatContainerScroll">
                        <li className="chat-left">
                          <div className="chat-avatar">
                            <Image
                              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                              alt="avatar"
                            />
                            <div className="chat-name">Kirsi</div>
                          </div>
                          <div className="chat-text">
                            Hello, I'm Kirsi. <br />
                            How can I help you today?
                          </div>
                          <div className="chat-hour">
                            08:55 <span className="fa fa-check-circle"></span>
                          </div>
                        </li>

                        <li className="chat-right">
                          <div className="chat-hour">
                            08:56 <span className="fa fa-check-circle"></span>
                          </div>
                          <div className="chat-text">
                            Hi, Dlip <br />
                            I'm good, thanks. Let's code!
                          </div>
                          <div className="chat-avatar">
                            <Image
                              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                              alt="avatar"
                            />
                            <div className="chat-name">Kirsi</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-grow-0 py-3 px-4 border-top">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your message"
                        />
                        <button className="btn btn-primary">Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChatBox
