import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaCriarRelacaoPSC() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Datainicio, setDatainicio] = useState([]);
	const [Cargo, setCargo] = useState([]);
	const [Salario, setSalario] = useState([]);
	const [IDPessoaColetiva, setIDPessoaColetiva] = useState([]);
	const [PessoaColetiva, setPessoaColetiva] = useState([]);
	const navigate = useNavigate()

	const idutilizador = localStorage.getItem("idutilizador");

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

	function adicionaRelacao() {
		if (Datainicio.length == 0 || Cargo.length == 0 || Salario.length == 0 || IDPessoaColetiva.length == 0) {
			alert("Dados incorretos")
		} else {
			return api.post('/api/v1/RelacaoPessoasSC', {
				datainicio: Datainicio,
				cargo: Cargo,
				salario: Salario,
				idpessoasingular: params.idpessoasingular,
				idpessoacoletiva: IDPessoaColetiva,
				idutilizador
			}).then(response => {
				console.log(response.data);
				alert("Cargo Adicionado!")
				navigate("/JornalistaConsultarEmpresarios")
			}).catch(error => {
				alert('Dados incorretos!')
			})
		}
	}

	function obterListaEmpresas() {
		return api.get('/api/v1/PessoaColetiva')
			.then(function (response) {
				setPessoaColetiva(response.data);
				console.log(response.data);
			});
	}

	useEffect(() => {
		obterListaEmpresas();
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
									<Nav.Link href="/JornalistaConsultarVotos">Histórico de Votos</Nav.Link>
									<Nav.Link href="/JornalistaAPessoal">Área Pessoal</Nav.Link>
								</Nav>
								<Navbar.Text className="justify-content-end">
									<button id="" type="button" className="btn btn-danger" onClick={logout}>Logout</button>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>


					<br /><br />
					<Row>
						<Col xs={12}>
							<div class="conteudoo">
								<h2>Adiciona Cargo</h2>
								<br></br>
								<Form.Label>Data Inicio: </Form.Label>
								<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} type="date" name='datanascimento' onChange={e => setDatainicio(e.target.value)} />
								<br></br>
								<Form.Label>Cargo: </Form.Label>
								<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="cargo"
									placeholder="Introduza o cargo" onChange={e => setCargo(e.target.value)} />
								<br></br>
								<Form.Label>Salário Mensal: </Form.Label>
								<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} type="number" name="salario"
									placeholder="Introduza o salário" onChange={e => setSalario(e.target.value)} />
								<br></br>
								<Form.Label>Empresa: </Form.Label>
								<Form.Select aria-label="Default select example" onChange={e => setIDPessoaColetiva(e.target.value)}>
									<option>Selecione a Empresa</option>
									{PessoaColetiva.map(item => (
										<option value={item.idpessoacoletiva} >{item.designacao}</option>
									))}
								</Form.Select>
								<br></br>
								<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaRelacao}>Adicionar Relacao</button>
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

export default JornalistaCriarRelacaoPSC;
