import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import image1 from "../assets/image1.webp";
import image3 from "../assets/image3.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";

export default class componentName extends Component {
	render() {
		return (
			<div className="xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}">
				<div
					className="bg-light justify-content-between"
					style={{ marginTop: "50px", marginBottom: "10px"}}
				>
					<form className="form-inline" style={{width:"500px"}}>
						<input
							className="form-control mr-2 ms-3"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success  my-sm-0" type="submit">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</div>
				<Navbar bg="light" variant={"light"} expand="lg">
					<Container>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto text-lg" style={{ fontSize: "15px" }}>
								<Nav.Link className="bg-primary" href="#home">
									Overview
								</Nav.Link>
								<Nav.Link href="#link">Marketing</Nav.Link>
								<Nav.Link href="#link">Design</Nav.Link>
								<Nav.Link href="#link">Video Making</Nav.Link>
								<Nav.Link href="#link">Time Management</Nav.Link>
								<Nav.Link href="#link">Copyright</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<div>
					<h3 className="p-5">
						<b>Featured</b>
					</h3>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent:"center",
							height: "120px",
							width: "700px",
							// margin: "0% auto",
							// padding:"10px"
						}}
					>
						<img src={image1} alt="tech" className="mx-3 " style={{borderRadius:"10px"}} />
						<img src={image8} alt="tech " className="mx-3 " style={{borderRadius:"10px"}} />
						<img src={image3} alt="tech" className="mx-3 " style={{borderRadius:"10px"}} />
					</div>
					<h3 className="p-5">
						<b>Upcoming</b>
					</h3>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent:"center",
							height: "120px",
							width: "700px",
						}}
					>
						<img src={image1} alt="tech" className="mx-3 " style={{borderRadius:"10px"}} />
						<img src={image8} alt="tech" className="mx-3 " style={{borderRadius:"10px"}} />
						<img src={image8} alt="tech" className="mx-3 " style={{borderRadius:"10px"}} />
					</div>
					<h3 className="p-5">
						<b>Top Channel</b>
					</h3>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent:"center",
							height: "120px",
							width: "700px",
						}}
					>
						<img src={image1} alt="tech" className="mx-3 " style={{borderRadius:"10px"}} />
						<img src={image8} alt="tech" className="mx-3 " style={{borderRadius:"10px"}} />
						<img src={image9} alt="tech" className="mx-3 " style={{borderRadius:"10px"}} />
					</div>
				</div>
			</div>
		);
	}
}
