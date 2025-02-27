// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cars from './pages/Cars';
import CarsLayout from './CarsLayout';
import CarDetail from './pages/CarDetail';
import SecondCar from './pages/SecondCar';

const CarsRoute = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<CarsLayout />}>
				<Route
					index
					element={<Cars />}
				/>
				<Route
					path=':id'
					element={<CarDetail />}
				/>
				<Route
					path='second'
					element={<SecondCar />}
				/>
			</Route>
		</Routes>
	);
};

export default CarsRoute;
