import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import './HomeAdmin.css'


class RelacoesPoliticos extends Component {

	state = {
		linguagens: []
	};

	async componentDidMount() {
		const response = await api.get('/api/v1/RelacaoPS/2')
		this.setState({ linguagens: response.data });
	}

	// componentDidMount() {
	// 	fetch('http://192.168.1.78:8080/api/v1/RelacaoPS/2')
	// 		.then(res => res.json())
	// 		.then(res => {
	// 			this.setState({
	// 				linguagens: res
	// 			});
	// 		});
	// }

	soma(){

	}

	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">Rede Contactos Politicos</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#areapessoal">Área Pessoal</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<br />
				<h1>RELACOES</h1>

				{this.state.linguagens.map(item => (
					<Card style={{ width: '23rem' }}>
						<Card.Body>
							<Card.Title>{item.idpessoasingular} e {item.idevento}</Card.Title>
							<Card.Text>
								Motivo: {item.motivo} <br></br>
								Valores: {item.valores}€ <br></br>
								Data inserção: {item.data} <br></br>
								Inserido por: {item.idutilizador} <br></br>
								<b>Credibilidade: {item.credibilidade}</b>
							</Card.Text>
							<Button variant="success">Credível</Button>{' '}
							<Button variant="danger">Não Credível</Button>
						</Card.Body>
					</Card>
				))}


			</div>
		);
	}
}

export default RelacoesPoliticos;
