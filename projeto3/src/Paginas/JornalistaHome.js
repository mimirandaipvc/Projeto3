import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams, useNavigate  } from 'react-router-dom';
import React, { useState, useEffect, Component } from 'react';
import api from './api'
import 'bootstrap/dist/css/bootstrap.min.css'
import './AdminHome.css'
import imagem1 from "../Imagens/1.jpg";
import imagem2 from "../Imagens/2.jpg";
import imagem3 from "../Imagens/3.jpg";
import imagem4 from "../Imagens/4.jpg";
import imagem5 from "../Imagens/5.jpg";
import imagem6 from "../Imagens/6.jpg";



function JornalistaHome() {

	const navigate = useNavigate()

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function logout() {
		localStorage.removeItem("iud");
		localStorage.removeItem("token");
		localStorage.removeItem("idtipoutilizador");
		navigate("/Login");
	}

	return (
		<div id="page-container">

			<Container fluid>

				<div id="content-wrap">
			<h1>Bem-vindo Jornalista! <button id="logout" type="button" className="btn btn-danger btn-block mt-4" onClick={logout}>Logout</button></h1>

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
						<p>Visualizar Eventos e respetivas relações</p>
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
						<p>Visualizar Empresários e respetivas relações</p>
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
						<p>Visualizar Empresas e respetivas relações</p>
						<Link class="text-info" style={{ textDecoration: 'none' }} to={`/JornalistaConsultarEmpresas/`}>Clique aqui</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={imagem4}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Histórico de Votos</h3>
						<p>Visualizar os votos em todas as relações</p>
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
						<p>Alterar dados pessoais.</p>
						<Link class="text-info" style={{ textDecoration: 'none' }} to={`/JornalistaAPessoal/`}>Clique aqui</Link>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

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
