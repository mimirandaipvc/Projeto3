import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaCriarInfoPC() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Motivo, setMotivo] = useState([]);
	const [Valores, setValores] = useState([]);
	const [Data, setData] = useState([]);
	const [IDEvento, setIDEvento] = useState([]);
	const [Eventos, setEventos] = useState([]);
	const navigate = useNavigate()

	const idutilizador = localStorage.getItem("idutilizador");

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function adicionaRelacaoPC() {
		if (Motivo.length == 0 || Valores.length == 0 || Data.length == 0 || IDEvento.length == 0) {
			alert("Dados incorretos")
		} else {
			return api.post('/api/v1/RelacaoPC', {
				motivo: Motivo,
				valores: Valores,
				data: Data,
				idpessoacoletiva: params.idpessoacoletiva,
				idevento: IDEvento,
				idutilizador
			}).then(response => {
				console.log(response.data);
				alert("Informação Criada!")
				navigate("/JornalistaHome")
			}).catch(error => {
				console.log(error);
			})
		}
	}

	function obterListaEventos() {
		return api.get('/api/v1/Evento')
			.then(function (response) {
				setEventos(response.data);
				console.log(response.data);
			});
	}

	useEffect(() => {
		obterListaEventos();
	}, []);

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
									<Nav.Link href="/JornalistaAPessoal">Área Pessoal</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<div class="conteudoo">
						<h2>Adicionar Relação</h2>
						<br></br>
						<Form.Label>Data: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="data"
							placeholder="Introduza a data" onChange={e => setData(e.target.value)} />
						<br></br>
						<Form.Label>Motivo: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="motivo"
							placeholder="Introduza o motivo" onChange={e => setMotivo(e.target.value)} />
						<br></br>
						<Form.Label>Valores: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="valores"
							placeholder="Introduza os valores" onChange={e => setValores(e.target.value)} />
						<br></br>
						<Form.Label>Evento: </Form.Label>
						<Form.Select aria-label="Default select example" onChange={e => setIDEvento(e.target.value)}>
							<option>Selecione o evento</option>
							{Eventos.map(item => (
								<option value={item.idevento} >{item.designacao}</option>
							))}
						</Form.Select>
						<br></br>
						<br></br>
						<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaRelacaoPC}>Adicionar Relacao</button>
					</div>
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

export default JornalistaCriarInfoPC;
