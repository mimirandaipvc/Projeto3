import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import api from './api'
import React, { useState, useEffect, Component } from 'react';
import './AdminHome.css'
import imagem1 from "../Imagens/1.jpg";
import imagem2 from "../Imagens/2.jpg";
import imagem3 from "../Imagens/3.jpg";
import imagem4 from "../Imagens/4.jpg";
import imagem6 from "../Imagens/6.jpg";

function CHome() {

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	return (
		<div id="page-container">

			<Container fluid>

				<div id="content-wrap">

					<Row>
						<Col xs={2}></Col>
						<Col xs={8}><h1>Bem-vindo Cidadão!</h1></Col>
						<Col xs={2}><Button style={{ float: 'right' }} variant="dark" href="http://localhost:3000/Login/">Efetuar Login</Button></Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Carousel>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={imagem1}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>Consultar Politicos</h3>
										<p>Visualizar políticos e respetivas relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/CConsultarPoliticos/`}>Clique aqui</Link>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={imagem3}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>Consultar Eventos</h3>
										<p>Visualizar Eventos e respetivas relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/CConsultarEventos/`}>Clique aqui</Link>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={imagem2}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>Consultar Empresários</h3>
										<p>Visualizar Empresários e respetivas relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/CConsultarEmpresarios/`}>Clique aqui</Link>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={imagem4}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>Consultar Empresas</h3>
										<p>Visualizar Empresas e respetivas relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/CConsultarEmpresas/`}>Clique aqui</Link>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>

				</div>
				<footer id="footer">
					<div class="container text-center">
						<small>© 2022 Copyright: Miguel Miranda e Pedro Castro | Engenharia Informática | ESTG-IPVC </small>
					</div>
				</footer>
			</Container >
		</div >


	);
}

export default CHome;
