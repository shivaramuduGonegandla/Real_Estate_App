import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty';
import PropertyDetail from './components/PropertyDetail';

function App() {
	
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<PropertyList />} />
					<Route path="/add-property" element={<AddProperty />} />
					<Route path="/property/:id" element={<PropertyDetail />} />
          
				</Routes>
			</Router>
		</>
	);
}

export default App;
