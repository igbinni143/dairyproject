import './App.css';
import {
	Route,
	BrowserRouter,
	Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BingoPage from './pages/BingoPage';
import Meal from './pages/Meal';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/bingo' element={<BingoPage />} />
				<Route path='/meal' element={<Meal />} />
			</Routes>
		</BrowserRouter>
	);
}
