import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaCriarEvento() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Designacao, setDesignacao] = useState([]);
	const [Descrição, setDescricao] = useState([]);
	const [Data, setData] = useState([]);
	const navigate = useNavigate()


	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function adicionaEvento() {
		if (Designacao.length == 0 || Descrição.length == 0 || Data.length == 0) {
			alert("Dados incorretos")
		} else {
			return api.post('/api/v1/Evento', {
				designacao: Designacao,
				descricao: Descrição,
				data: Data
			}).then(response => {
				console.log(response.data);
				alert("Evento criado!")
				navigate("/JornalistaConsultarEventos")
			}).catch(error => {
				console.log(error);
			})
		}
	}

	return (
		<div id="page-container">

			<Container fluid>

				<div id="content-wrap">

					<Navbar bg="dark" variant="dark" expand="lg">
						<Container>
							<Navbar.Brand href="#home">Rede Contactos Politicos</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="me-auto">
									<Nav.Link href="/JornalistaHome">Home</Nav.Link>
									<Nav.Link href="/JornalistaConsultarPoliticos">Políticos</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEventos">Eventos</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEmpresarios">Empresários</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEmpresas">Empresas</Nav.Link>
									<Nav.Link href="/JornalistaConsultarVotos">Histórico de Votos</Nav.Link>
									<Nav.Link href="/JornalistaAPessoal">Área Pessoal</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<Row>
						<Col xs={12}>
							<div class="conteudoo">
								<h2>Criar Evento</h2>
								<br></br>
								<Form.Label>Designação: </Form.Label>
								<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="designacao"
									placeholder="Introduza a designação" onChange={e => setDesignacao(e.target.value)} />
								<br></br>
								<Form.Label>Descrição: </Form.Label>
								<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="descrição"
									placeholder="Introduza a descrição" onChange={e => setDescricao(e.target.value)} />
								<br></br>
								<Form.Label>Data: </Form.Label>
								<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="data"
									placeholder="Introduza a data" onChange={e => setData(e.target.value)} />
								<br></br>
								<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaEvento}>Criar Evento</button>
							</div>
						</Col>
					</Row>

				</div>

				<footer id="footer">
					<div class="container text-center">
						<small>© 2022 Copyright: Miguel Miranda e Pedro Castro | Engenharia Informática | ESTG-IPVC </small>
					</div>
				</footer>
			</Container>
		</div>
	);
}

export default JornalistaCriarEvento;
