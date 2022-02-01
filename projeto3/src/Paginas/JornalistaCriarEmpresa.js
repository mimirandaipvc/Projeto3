import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaCriarEmpresa() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Designacao, setDesignacao] = useState([]);
	const [Pais, setPais] = useState([]);
	const [AnoFundacao, setAnoFundacao] = useState([]);
	const [RamoAtividade, setRamoAtividade] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function adicionaEmpresa() {
		return api.post('/api/v1/PessoaColetiva', {
			designacao: Designacao,
			pais: Pais,
			anofundacao: AnoFundacao,
			ramoatividade: RamoAtividade,
		}).then(response => {
			console.log(response.data);
		}).catch(error => {
			console.log(error);
		})
	}

	return (
		<div>
			<Container fluid>

				<Navbar bg="light" expand="lg">
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
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<br />
				<h2>Criar Empresa</h2>
				<br></br>
				<Form.Label>Designação: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="designacao"
					placeholder="Introduza a designação" onChange={e => setDesignacao(e.target.value)} />
				<br></br>
				<Form.Label>Pais: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="pais"
					placeholder="Introduza o pais" onChange={e => setPais(e.target.value)} />
				<br></br>
				<Form.Label>Ano de Fundação: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="anofundacao"
					placeholder="Introduza o ano de fundação" onChange={e => setAnoFundacao(e.target.value)} />
				<br></br>
				<Form.Label>Ramo de Atividade: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="ramoatividade"
					placeholder="Introduza o ramo de atividade" onChange={e => setRamoAtividade(e.target.value)} />
				<br></br>
				<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaEmpresa}>Criar Empresa</button>
			</Container>
		</div>
	);
}

export default JornalistaCriarEmpresa;
