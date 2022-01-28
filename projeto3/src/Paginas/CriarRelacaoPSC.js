import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CriarRelacaoPSC() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Datainicio, setDatainicio] = useState([]);
	const [Cargo, setCargo] = useState([]);
	const [Salario, setSalario] = useState([]);
	const [IDPessoaColetiva, setIDPessoaColetiva] = useState([]);


	function adicionaRelacao() {
		return api.post('/api/v1/RelacaoPessoasSC', {
			datainicio: Datainicio,
			cargo: Cargo,
			salario: Salario,
			idpessoasingular: params.idpessoasingular,
			idpessoacoletiva: IDPessoaColetiva,
			idutilizador: 1
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
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#areapessoal">Área Pessoal</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<br />
				<h2>Adiciona Cargo</h2>
				<br></br>
				<Form.Label>Data Inicio: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="datainicio"
					placeholder="Intoduza a data de inicio" onChange={e => setDatainicio(e.target.value)} />
				<br></br>
				<Form.Label>Cargo: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="cargo"
					placeholder="Intoduza o cargo" onChange={e => setCargo(e.target.value)} />
				<br></br>
				<Form.Label>Salario: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="salario"
					placeholder="Intoduza o salario" onChange={e => setSalario(e.target.value)} />
				<br></br>
				<Form.Label>ID Pessoa Coletiva: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="idpessoacoletiva"
					placeholder="Intoduza o ID da Empresa" onChange={e => setIDPessoaColetiva(e.target.value)} />
				<br></br>
				<br></br>
				<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaRelacao}>Adicionar Relacao</button>
			</Container>
		</div>
	);
}

export default CriarRelacaoPSC;
