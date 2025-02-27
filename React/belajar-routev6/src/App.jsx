import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route, } from 'react-router-dom';
import CarsRoute from './CarsRoute';
import NotFound from './pages/NotFound';

function App() {
	// let element = useRoutes([
	// 	{ path: '/', element: <Home /> },
	// 	{ path: '/about', element: <About /> },
	// 	{ path: '/contact', element: <Contact /> },
	// 	{
	// 		path: '/cars',
	// 		element: <CarsLayout />,
	// 		children: [
	// 			{ index: true, element: <Cars /> },
	// 			{ path: ':id', element: <CarDetail /> },
	// 			{ path: 'second', element: <SecondCar /> },
	// 		],
	// 	},
	// ]);

	return (
		<>
			<Navigation />
			{/* {element} */}
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/cars/*'
					element={<CarsRoute />}
				/>
				<Route
					path='/*'
					element={<NotFound />}
				/>
			</Routes>
			<Routes>
				<Route
					path='/about'
					element={<div>test</div>}
				/>
			</Routes>
		</>
	);
}

export default App;
