import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


function AdminCriarCidadaoRegistado() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Username, setUsername] = useState([]);
	const [Password, setPassword] = useState([]);
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

	function adicionaCidadao() {
		return api.post('/api/v1/CidadaoRegistado', {
			username: Username,
			password: Password
		}).then(response => {
			console.log(response.data);
			alert("Cidadao adicionado!");
			navigate('/Login')
		}).catch(error => {
			alert('Dados incorretos!')
		})
	}

	return (
		<div id="page-container">

			<Container fluid>

				<div id="content-wrap">
					<Row>
						<Col xs={12}>
							<div class="conteudoo">
								<h2>Registar-se</h2>
								<br></br>
								<Form.Label>Username: </Form.Label>
								<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="username"
									placeholder="Introduza o username" onChange={e => setUsername(e.target.value)} />
								<br></br>
								<Form.Label>Password: </Form.Label>
								<input type="password" class="form-control" placeholder="Introduza a password" onChange={e => setPassword(e.target.value)} ></input>
								<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaCidadao}>Registar-se</button>
								<br></br><br></br>
								<Button variant="dark" href={"http://localhost:3000/Login/"}>Voltar para Login</Button>
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

export default AdminCriarCidadaoRegistado;
