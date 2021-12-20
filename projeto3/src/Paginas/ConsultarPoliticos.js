import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import './HomeAdmin.css'
import imagem1 from "../Imagens/1.jpg";
import imagem2 from "../Imagens/2.jpg";
import imagem3 from "../Imagens/3.jpg";
import imagem4 from "../Imagens/4.jpg";
import imagem5 from "../Imagens/5.jpg";
import imagem6 from "../Imagens/6.jpg";



class ConsultarPoliticos extends Component {

	state = {
		linguagens: []
	};

	componentDidMount() {
		fetch('http://192.168.1.78:8080/api/v1/Politico/2')
			.then(res => res.json())
			.then(res => {
				this.setState({
					linguagens: res
				});
			});
	}


	// const [data, setData] = useState([]);
	// const [filtered, setFiltered] = useState([]);
	// const [result, setResult] = useState("");

	// const [user, setUser] = useState();

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	axios.get('http://192.168.1.78:8080/api/v1/Politico/2')
	// 		.then((response) => setUser(response.data))
	// 		.catch((err) => {
	// 			console.error("ops! ocorreu um erro" + err);
	// 		});
	// 	};
	// 	fetchData();
	// }, []);




	// // function getDetalhesProduto() {
	// // 	return axios.get('http://192.168.1.78:8080/api/v1/Politico/2')
	// // 		.then(function (response) {
	// // 			setData(response.data)
	// // 		})

	// // }
	// // useEffect(() => {
	// // 	getDetalhesProduto();
	// // }, [])
	render() {
		return (
			<div>
				<h1>POLITICOS</h1>
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

				<Table striped bordered hover>
					<thead>
							<tr>
								<th>Nome</th>
								<th>Sexo</th>
								<th>Nacionalidade</th>
								<th>Data de Nascimento</th>
								<th>Profissão</th>
							</tr>
					</thead>
					<tbody>
						{this.state.linguagens.map(item => (
							<tr>
								<td>{item.nome}</td>
								<td>{item.sexo}</td>
								<td>{item.nacionalidade}</td>
								<td>{item.datanascimento}</td>
								<td>{item.datanascimento}</td>
								<td><Button variant="dark" href="http://localhost:3000/HomeAdmin">Ver relações</Button></td>
							</tr>
						))}
					</tbody>
				</Table>

			</div>
		);
	}
}

export default ConsultarPoliticos;
