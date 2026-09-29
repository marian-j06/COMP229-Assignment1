//App.jsx wraps everything in the router so that page navigation works throughout the app
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
const App = () => {
    return (
        <Router>
            <MainRouter />
        </Router>
    );
};
export default App;