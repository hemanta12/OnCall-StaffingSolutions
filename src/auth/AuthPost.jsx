import {Link} from "react-router-dom";
 import Button from 'react-bootstrap/Button'
 import Form from 'react-bootstrap/Form'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'
 import Container from 'react-bootstrap/Container'

function AuthPost() {
  return (
    <div className="post-background">
        <div className="home-business-search"></div>
            <Container className="">
                <Row className="home-business-header">
                    <ul>
					<li className="home-business-li"><a href="./bushome" className="home-business-a">Posted Jobs</a></li>
                    <li className="home-business-li"><a className="home-business-a1">Post A Job</a></li>
                    </ul>
				</Row>
			</Container>

            <Container  className="post-container">
                <Row>
                    <Col className="post-font-1">Restaurant: Peacock Gap Clubhouse</Col>
                </Row>

                <Form.Group controlId="Form.Recommend" className="post-form">
                    <Form.Label className="post-form-label">Position</Form.Label>
                    <select name="day" className="post-option">
                        <option value="sunday">Sever</option>
                        <option value="monday">Bartender</option>
                        <option value="tuesday">Hostess</option>
                        <option value="wednesday">Security</option>
                        <option value="thursday">Dish Cleaner</option>
                    </select>
                    
                    <Form.Label className="post-form-label">Date of Shift</Form.Label>
                    <input type="date" className="post-option" name="datemin" min="2021-01-02"></input>
            </Form.Group> 

            <Form.Group controlId="Form.Recommend" className="post-form">
                <Form.Label className="post-form-label">Start of Shift</Form.Label>
                <select name="hour" className="post-option">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                    <option value="eleven">11</option>
                    <option value="twelve">12</option>
                </select>

                <select name="minute" className="post-option">
                    <option value="zero">:00</option>
                    <option value="fifthteen">:15</option>
                    <option value="thirty">:30</option>
                    <option value="fourtyfive">:45</option>
                </select>

                <select name="ampm" className="post-option">
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                </select>

                <Form.Label className="post-form-label">End of Shift</Form.Label>
                <select name="endhour" className="post-option">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                    <option value="eleven">11</option>
                    <option value="twelve">12</option>
                </select>

                <select name="endminute" className="post-option">
                    <option value="zero">:00</option>
                    <option value="fifthteen">:15</option>
                    <option value="thirty">:30</option>
                    <option value="fourtyfive">:45</option>
                </select>

                <select name="endampm" className="post-option">
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                </select>
            </Form.Group>

            <Form.Group controlId="Form.Recommend" className="post-form">
            <Form.Label className="post-form-label">Pay $</Form.Label><br></br>
            <input type="amount" name="salary" placeholder="000.00"></input>
            </Form.Group>

            <Form className="post-form-btn">
                <Button href="./bushome" className="post-btn">Submit</Button>
            </Form>
            </Container>
        </div>
  )
}

export default AuthPost