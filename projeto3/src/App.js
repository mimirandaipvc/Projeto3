import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeAdmin from './Paginas/HomeAdmin'
import ConsultarPoliticos from './Paginas/ConsultarPoliticos'
import RelacoesPoliticos from './Paginas/RelacoesPoliticos'
import RelacoesPoliticosSemVoto from './Paginas/RelacoesPoliticosSemVoto'
import RelacoesPoliticosSoVoto from './Paginas/RelacoesPoliticosSoVoto'
import ConsultarEmpresarios from './Paginas/ConsultarEmpresarios'
import ConsultarEmpresas from './Paginas/ConsultarEmpresas'
import ConsultarEventos from './Paginas/ConsultarEventos'
import RelacoesEmpresas from './Paginas/RelacoesEmpresas'
import RelacoesEventos from './Paginas/RelacoesEventos'
import RelacoesEmpresarios from './Paginas/RelacoesEmpresarios'
import RelacoesEmpresasSemVoto from './Paginas/RelacoesEmpresasSemVoto'
import RelacoesEventosSemVoto from './Paginas/RelacoesEventosSemVoto'
import RelacoesEmpresariosSemVoto from './Paginas/RelacoesEmpresariosSemVoto'
import RelacoesEmpresasSoVoto from './Paginas/RelacoesEmpresasSemVoto'
import RelacoesEmpresariosSoVoto from './Paginas/RelacoesEmpresariosSemVoto'
import CargosEmEmpresas from './Paginas/CargosEmEmpresas'
import ConsultarUtilizadores from './Paginas/ConsultarUtilizadores'
import CriarRelacaoPSC from './Paginas/CriarRelacaoPSC'
import CriarInfoPC from './Paginas/CriarInfoPC'
import CriarInfoPS from './Paginas/CriarInfoPS'
import CriarJornalista from './Paginas/CriarJornalista'
import CriarAdmin from './Paginas/CriarAdmin'
import CriarCidadaoRegistado from './Paginas/CriarCidadaoRegistado'
import Login from './Paginas/Login'
import CriarPolitico from './Paginas/CriarPolitico'
import CriarEmpresario from './Paginas/CriarEmpresario'
import CriarEmpresa from './Paginas/CriarEmpresa'
import CriarEvento from './Paginas/CriarEvento'
import EditarAdmin from './Paginas/EditarAdmin'
import EditarCidadaoRegistado from './Paginas/EditarCidadaoRegistado'
import EditarJornalista from './Paginas/EditarJornalista'
import HomeJornalista from './Paginas/HomeJornalista'
import HomeCidadaoRegistado from './Paginas/HomeCidadaoRegistado'
import HomeCidadao from './Paginas/HomeCidadao'



function App() {
  return (
	  <div>
		  <BrowserRouter>
			<Routes>
				<Route path="/HomeAdmin" element={<HomeAdmin />} />
			</Routes>
			<Routes>
				<Route path="/HomeJornalista" element={<HomeJornalista />} />
			</Routes>
			<Routes>
				<Route path="/HomeCidadaoRegistado" element={<HomeCidadaoRegistado />} />
			</Routes>
			<Routes>
				<Route path="/HomeCidadao" element={<HomeCidadao />} />
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
				<Route path="/RelacoesPoliticosSemVoto/:idpessoasingular" element={<RelacoesPoliticosSemVoto />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEmpresariosSemVoto/:idpessoasingular" element={<RelacoesEmpresariosSemVoto />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEmpresasSemVoto/:idpessoacoletiva" element={<RelacoesEmpresasSemVoto />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEventosSemVoto/:idevento" element={<RelacoesEventosSemVoto />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesPoliticosSoVoto/:idpessoasingular" element={<RelacoesPoliticosSoVoto />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEmpresariosSoVoto/:idpessoasingular" element={<RelacoesEmpresariosSoVoto />} />
			</Routes>
			<Routes>
				<Route path="/RelacoesEmpresasSoVoto/:idpessoacoletiva" element={<RelacoesEmpresasSoVoto />} />
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
				<Route path="/CriarInfoPS/:idpessoasingular" element={<CriarInfoPS />} />
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
			<Routes>
				<Route path="/Login" element={<Login />} />
			</Routes>
			<Routes>
				<Route path="/CriarPolitico" element={<CriarPolitico />} />
			</Routes>
			<Routes>
				<Route path="/CriarEmpresario" element={<CriarEmpresario />} />
			</Routes>
			<Routes>
				  <Route path="/CriarEmpresa" element={<CriarEmpresa />} />
			</Routes>
			<Routes>
				<Route path="/CriarEvento" element={<CriarEvento />} />
			</Routes>
			<Routes>
				<Route path="/EditarAdmin/:idutilizador" element={<EditarAdmin />} />
			</Routes>
			<Routes>
				<Route path="/EditarCidadaoRegistado/:idutilizador" element={<EditarCidadaoRegistado />} />
			</Routes>
			<Routes>
				<Route path="/EditarJornalista/:idutilizador" element={<EditarJornalista />} />
			</Routes>
		  </BrowserRouter>
	  </div>
  );
}

export default App;
