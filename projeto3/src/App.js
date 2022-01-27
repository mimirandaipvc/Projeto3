import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeAdmin from './Paginas/HomeAdmin'
import ConsultarPoliticos from './Paginas/ConsultarPoliticos'
import RelacoesPoliticos from './Paginas/RelacoesPoliticos'
import ConsultarEmpresarios from './Paginas/ConsultarEmpresarios'
import ConsultarEmpresas from './Paginas/ConsultarEmpresas'
import ConsultarEventos from './Paginas/ConsultarEventos'
import RelacoesEmpresas from './Paginas/RelacoesEmpresas'
import RelacoesEventos from './Paginas/RelacoesEventos'


function App() {
  return (
	  <div>
		  <BrowserRouter>
			<Routes>
				<Route path="/HomeAdmin" element={<HomeAdmin />} />
			</Routes>
			<Routes>
				<Route path="/ConsultarPoliticos" element={<ConsultarPoliticos />} />
			</Routes>
			<Routes>
				<Route path="/ConsultarEmpresarios" element={<ConsultarEmpresarios />} />
			</Routes>
			<Routes>
				  <Route path="/ConsultarEmpresas" element={<ConsultarEmpresas />} />
			</Routes>
			<Routes>
				  <Route path="/ConsultarEventos" element={<ConsultarEventos />} />
			</Routes>
			<Routes>
				  <Route path="/RelacoesPoliticos/:idpessoasingular" element={<RelacoesPoliticos />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEmpresarios/:idpessoasingular" element={<RelacoesPoliticos />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEmpresas/:idpessoacoletiva" element={<RelacoesEmpresas />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEventos/:idevento" element={<RelacoesEventos />} />
			</Routes>
		  </BrowserRouter>
	  </div>
  );
}

export default App;
