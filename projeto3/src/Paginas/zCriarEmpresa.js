import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CriarEmpresa() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Nome, setNome] = useState([]);
	const [Ramo, setRamo] = useState([]);
	const [Data, setData] = useState([]);
    const [Pais, setPais] = useState([]);



	function adicionaEmpresa() {
		return api.post('/api/v1/Empresa', {
			nome: Nome,
			ramo: Ramo,
			data: Data,
            pais: Pais
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
				<h2>Criar Empresa</h2>
				<br></br>
				<Form.Label>Nome: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="nome"
					placeholder="Introduza o Nome:" onChange={e => setNome(e.target.value)} />
				<br></br><Form.Label>Data: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="data"
					placeholder="Introduza o Ano de Fundação:" onChange={e => setData(e.target.value)} />
				<br></br>
				<Form.Label>Ramo de Atividade: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '10px 2px' }} name="ramo"
					placeholder="Introduza o Ramo de Atividade:" onChange={e => setRamo(e.target.value)} />
				<br></br>
                <Form.Label>Nacionalidade: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '10px 2px' }} name="pais"
					placeholder="Introduza o País onde se encontra sediada:" onChange={e => setPais(e.target.value)} />
				<br></br>
				<br></br>
				<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaEmpresa}>Criar Empresa</button>
			</Container>
		</div>
	);
}

export default CriarEmpresa;