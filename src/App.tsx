import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import ChartDashboard from './components/ChartDashboard';
import MapDashboard from './components/MapDashboard';
import { Provider } from 'react-redux';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* Add navigation or header component here if needed */}
          <Routes>
            <Route path="/add" element={<ContactForm />} />
            <Route path="/list" element={<ContactList />} />
            <Route path="/details/:id" element={<ContactDetails />} />
            <Route path="/chart" element={<ChartDashboard />} />
            <Route path="/map" element={<MapDashboard />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
