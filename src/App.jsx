import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Stocks from './components/Stocks/Stocks';
import Knowledge from './components/Knowledge/Knowledge';
import About from './components/About/About';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ProtectedUserRoute from './components/RoutesConfigration/ProtectedUserRoute';
import NotAuthenticatedRoute from './components/RoutesConfigration/NotAuthenticatedRoute';
import BackendRedirect from './components/BackendRedirect';
import StockDetail from './components/Stocks/StockDetail';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <NotAuthenticatedRoute>
                            <LoginPage />
                        </NotAuthenticatedRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <NotAuthenticatedRoute>
                            <RegisterPage />
                        </NotAuthenticatedRoute>
                    }
                />
                <Route path="/stocks" element={<Stocks />} />
                <Route path="/stocks/detail" element={<StockDetail />} />
                <Route path="/knowledge" element={<Knowledge />} />
                <Route path="/about" element={<About />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route
                    path="/forgot-password"
                    element={
                        <NotAuthenticatedRoute>
                            <ForgotPassword />
                        </NotAuthenticatedRoute>
                    }
                />
                <Route path="/backend-redirect" element={<BackendRedirect />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
