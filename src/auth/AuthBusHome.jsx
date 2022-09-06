import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function AuthBusHome() {
  return (
    <div className="home-business-background">
        <div className="home-business-search">
            <Container className="">
                <Row className="home-business-header">
                    <ul>
					<li className="home-business-li"><a className="home-business-a1">Posted Jobs</a></li>
                    <li className="home-business-li"><a href="./buspost" className="home-business-a">Post A Job</a></li>
                    </ul>
				</Row>
			</Container>

			<Container className="home-business-container">
				<h2 className="home-business-h2">Server - Peacock Gap Clubhouse</h2>
                <Row className="home-business-col">Sun. May 18 5:00pm - 10:00pm</Row>
                <Row className="home-business-row">
                    <Col className="home-business-col">Pay: $132.00</Col>
                    <Col className="home-business-col home-business-btn2">OPEN</Col>
				</Row>
			</Container>

			<Container className="home-business-container">
                <h2 className="home-business-h2">Bartender - Peacock Gap Clubhouse</h2>
                <Row className="home-business-col">Wed. Ma 14 2:00pm - 6:00pm</Row>
                <Row className="home-business-row">
                    <Col className="home-business-col">Pay: $106.00</Col>
                    <Col className="home-business-col home-business-btn2">OPEN</Col>
				</Row>
			</Container>

			<Container className="home-business-container">
                <h2 className="home-business-h2">Bartender - Peacock Gap Clubhouse</h2>
				<Row className="home-business-col">Fri. Feb 14 3:00pm - 11:00pm</Row>
                <Row className="home-business-row">
                    <Col className="home-business-col">Pay: $223.00</Col>
					<Col className="home-business-col home-business-btn1">COVERED</Col>
				</Row>
			</Container>

            <Container className="home-business-container">
                <h2 className="home-business-h2">Server - Peacock Gap Clubhouse</h2>
				<Row className="home-business-col">Fri. Feb 14 1:00pm - 9:00pm</Row>
                <Row className="home-business-row">
                    <Col className="home-business-col">Pay: $235.00</Col>
                    <Col className="home-business-col home-business-btn1">COVERED</Col>
				</Row>
			</Container>

			<Container className="home-business-container">
                <h2 className="home-business-h2">Hostess - Peacock Gap Clubhouse</h2>
				<Row className="home-business-col">Sat. Feb 02 7:00pm - 2:00am</Row>
                <Row className="home-business-row">
                    <Col className="home-business-col">Pay: $236.00</Col>
					<Col className="home-business-col home-business-btn1">COVERED</Col>
				</Row>
			</Container>

            <Container className="home-business-container">
                <h2 className="home-business-h2">Server - Peacock Gap Clubhouse</h2>
				<Row className="home-business-col">Sat. Jan. 27 3:00pm - 8:00pm</Row>
                <Row className="home-business-row">
                    <Col className="home-business-col">Pay: $138.00</Col>
					<Col className="home-business-col home-business-btn1">COVERED</Col>
				</Row>
			</Container>
		</div>
    </div>
  )
}

export default AuthBusHome
