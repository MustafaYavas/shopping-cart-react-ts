import {  Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import Store from './pages/Store';
import Navbar from './components/UI/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const App = () => {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <Container className='mb-5'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/store' element={<Store />}/>
                    <Route path='*' element={<Store />} />
                </Routes>
            </Container>
        </ShoppingCartProvider>
    )
}

export default App;