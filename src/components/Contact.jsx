import { useState, React } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import contactLight from '../media/pepsi.png';
// import contactDark from '../media/contact-dark.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagramSquare, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const sendEmail = (e) => {

}

const Contact = ({ darkMode }) => {

    const [templateParams, setTemplateParams] = useState({
        from_name: '',
        message: ''
    });

    const onInputChange = e => {
        setTemplateParams({ ...templateParams, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        emailjs.send('service_8sykyl8', 'template_csl75yd', templateParams, 'user_XZxbLZS7oQ5BB5Q7ty2P4')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        swal({
            title: "Sent Successfully!",
            text: "Glad to hear from you! I will get back to you as soon possible",
            icon: "success",
        });
        setTemplateParams({
            from_name: '',
            message: ''
        })
    }

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Container>
                <Row>
                    <Col lg={4}>
                        <br></br>
                        <h2 className="lead">Contact me!</h2>
                        <p className="contact-text">Drop a suggestion, feedback, opportunities or we can colaborate on a project. Please mention your contact details if you are expecting a reply.</p>

                        <h2 className="lead">Contact Details</h2>
                        <div>
                            <p className="contact-text">Sanket Chaware  <br />  Samarth Nagar, Risod, Dis.Washim, Maharashtra. <br /> 8378910529
                                <br />
                                sanketnchaware@gmail.com
                            </p>
                            <a className="social-icons" href="https://www.linkedin.com/in/sanketnchaware" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                                    <FontAwesomeIcon className="dark" size="lg" icon={faLinkedinIn} />
                                </Button>
                            </a>





                            <a className="social-icons" href="https://github.com/sanketnchaware" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                                    <FontAwesomeIcon className="dark" size="lg" icon={faGithub} />
                                </Button>
                            </a>

                            <a className="social-icons" href="https://www.instagram.com/sankyaaaaa__/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                                    <FontAwesomeIcon className="dark" size="lg" icon={faInstagramSquare} />
                                </Button>
                            </a>
                        </div>



                    </Col>
                    <Col lg={8}>
                        <br></br>

                        <Form onSubmit={e => onSubmit(e)}>
                            <Form.Group>
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name" />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.message} name="message" as="textarea" rows={8} className="ph msg" placeholder="Enter your message" />
                            </Form.Group>
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} type="submit">
                                Submit
                            </Button>
                        </Form>


                    </Col>

                    <Col>
                    <img src={contactLight} alt="contact" className="contact-img img-fluid" />

                    <h1 className="contact-text" style={{textAlign: "center"}}>Being The Unstoppable !</h1>

                    </Col>
                </Row>
               
            </Container>
        </div>
    )
}

export default Contact
