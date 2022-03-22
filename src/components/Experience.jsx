import { useState, React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import dsc from "../media/DSC.png";
import scr from "../media/SCR.png";
import lookO from "../media/lookO.jpg";
import rfp from "../media/RFP.png";
import food from "../media/food.jpg";
import todo from "../media/todo.png";
import youtube from "../media/youtube.jpg";
import recipe from "../media/recipe.png";
import nykaa from "../media/nykaa.jpg";
import stars from "../media/stars.png";
import nordstorm from "../media/nordstorm.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Modal from "react-bootstrap/Modal";

const Experience = ({ darkMode }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <Zoom>
            <Row>
              <Col>
                <div data-theme={darkMode ? "dark" : "light"}>
                  <h2 align="center">- Work Experience -</h2>
                  <br />
                  
                  <div style={{display: "flex",justifyContent:"space-around"}}>
                    <div>
                      <h4>Junior Software Engineer</h4>
                      <h6>Scubeelate Technologies Pvt Ltd, Bangalore</h6>
                      <h6>FEB 2022 - PRESENT </h6>

                    </div>
                    <div>
                      <ul>
                        <li>Worked on realtime projects based on ReactJS.</li>
                        <li>
                          Learnt the actual process of building end to end
                          applications.
                        </li>
                        <li>
                          Gained some knowledge and learnt technologies like
                          Tailwind.
                        </li>
                        <li>
                          Learnt how to optimize the code in a better way.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Zoom>
        </Container>

<hr />
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div className="flip-card" class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={nykaa} />
                          <Card.Body>
                            <Card.Title align="center">Nykaa Clone</Card.Title>
                            <Card.Text>
                              <p align="center">
                                A popular E-Commerce website which helps users
                                to buy Cosmetics products and Beauty products
                                online in India at best prices.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="express"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://clonednykaa.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/sagar6699k/Nykaa_with_backend"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={nordstorm} />
                          <Card.Body>
                            <Card.Title align="center">
                              NordStorm Clone
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                A clone of Nordstorm website which is an
                                American store chain helps users to buy the
                                luxury items online at best prices.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />

                          {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> */}

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="express"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://project-nordstrom.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/sanketnchaware/Project_NordStorm"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={youtube} />
                          <Card.Body>
                            <Card.Title align="center">
                              Youtube Search Box
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                A small YouTube feature which fetch and gives
                                the videos from youtube API as per the input
                                given by the user.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://sanketnchaware.github.io/YoutubeApp/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/sanketnchaware/YoutubeApp"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={food} />
                          <Card.Body>
                            <Card.Title align="center">
                              A Food Delivery App
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                A web application made using ReactJs which shows
                                you the restaurant as per your sorting manner.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <br />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://restaurant-pied.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/sanketnchaware/React_restaurant_App"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={todo} />
                          <Card.Body>
                            <Card.Title align="center">
                              A Simple TODO App
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                A simple Todo Application which is made using
                                reactJs to manage your daily tasks.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <br />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://todoapp-nu-snowy.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/sanketnchaware/React_Todo"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={13}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={stars} />
                          <Card.Body>
                            <Card.Title align="center">
                              Star Wars Mini App
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                A mini web app implemented with the feature of
                                debouncing which show you the characters as per
                                the input field{" "}
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <br />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://sanketnchaware.github.io/StarWars/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/sanketnchaware/StarWars"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>

          <br></br>

          <Zoom>
            <Row>
              <Col lg={4} sm={12}></Col>
            </Row>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Experience;
