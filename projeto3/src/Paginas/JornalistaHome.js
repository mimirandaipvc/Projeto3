import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, Component } from 'react';
import api from './api'
import 'bootstrap/dist/css/bootstrap.min.css'
import './AdminHome.css'
import imagem1 from "../Imagens/1.jpg";
import imagem2 from "../Imagens/2.jpg";
import imagem3 from "../Imagens/3.jpg";
import imagem4 from "../Imagens/4.jpg";
import imagem6 from "../Imagens/6.jpg";
import imagem7 from "../Imagens/7.jpg";



function JornalistaHome() {

	const navigate = useNavigate()

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function logout() {
		localStorage.removeItem("iud");
		localStorage.removeItem("token");
		localStorage.removeItem("idtipoutilizador");
		alert("Até breve!")
		navigate("/Login");
	}


	return (
		<div id="page-container">

			<Container fluid>

				<div id="content-wrap">
					<Row>
						<Col xs={2}></Col>
						<Col xs={8}><h1>Bem-vindo Jornalista!</h1></Col>
						<Col xs={2}><button id="logout" type="button" className="btn btn-danger" onClick={logout}>Logout</button></Col>
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
										<p class="home">Visualizar políticos e respetivas relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/JornalistaConsultarPoliticos/`}>Clique aqui</Link>
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
										<p class="home">Visualizar Eventos e respetivas relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/JornalistaConsultarEventos/`}>Clique aqui</Link>
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
										<p class="home">Visualizar Empresários e respetivas relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/JornalistaConsultarEmpresarios/`}>Clique aqui</Link>
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
										<p class="home">Visualizar Empresas e respetivas relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/JornalistaConsultarEmpresas/`}>Clique aqui</Link>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={imagem7}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>Histórico de Votos</h3>
										<p class="home">Visualizar os votos em todas as relações</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/JornalistaConsultarVotos/`}>Clique aqui</Link>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={imagem6}
										alt="Third slide"
									/>
									<Carousel.Caption>
										<h3>Minha área pessoal</h3>
										<p class="home">Alterar dados pessoais.</p>
										<Link class="text-info" style={{ textDecoration: 'none' }} to={`/JornalistaAPessoal/`}>Clique aqui</Link>
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

export default JornalistaHome;
