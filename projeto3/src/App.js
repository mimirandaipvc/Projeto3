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
import RelacoesEmpresarios from './Paginas/RelacoesEmpresarios'
import CargosEmEmpresas from './Paginas/CargosEmEmpresas'
import ConsultarUtilizadores from './Paginas/ConsultarUtilizadores'
import CriarRelacaoPSC from './Paginas/CriarRelacaoPSC'
import CriarInfoPC from './Paginas/CriarInfoPC'
import CriarJornalista from './Paginas/CriarJornalista'
import CriarAdmin from './Paginas/CriarAdmin'
import CriarCidadaoRegistado from './Paginas/CriarCidadaoRegistado'


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
				<Route path="/RelacoesEmpresarios/:idpessoasingular" element={<RelacoesEmpresarios />} />
			</Routes>
			<Routes>
				  <Route path="/CargosEmEmpresas/:idpessoasingular" element={<CargosEmEmpresas />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEmpresas/:idpessoacoletiva" element={<RelacoesEmpresas />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEventos/:idevento" element={<RelacoesEventos />} />
			</Routes>
			<Routes>
				<Route path="/ConsultarUtilizadores" element={<ConsultarUtilizadores />} />
			</Routes>
			<Routes>
				<Route path="/CriarRelacaoPSC/:idpessoasingular" element={<CriarRelacaoPSC />} />
			</Routes>
			<Routes>
				<Route path="/CriarInfoPC/:idpessoacoletiva" element={<CriarInfoPC />} />
			</Routes>
			<Routes>
				<Route path="/CriarJornalista" element={<CriarJornalista />} />
			</Routes>
			<Routes>
				<Route path="/CriarAdmin" element={<CriarAdmin />} />
			</Routes>
			<Routes>
				<Route path="/CriarCidadaoRegistado" element={<CriarCidadaoRegistado />} />
			</Routes>
		  </BrowserRouter>
	  </div>
  );
}

export default App;
