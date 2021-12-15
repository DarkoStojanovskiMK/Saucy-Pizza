import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import SinglePizzaScreen from './screens/SinglePizzaScreen'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ErrorScreen from './screens/ErrorScreen'
import AllPizzasScreen from './screens/AllPizzasScreen'
import PizzaCarousel from './components/PizzaCarousel';


function App() {
  return (
    <Router >
      <PizzaCarousel/>
      <Header/>
      <main >
        <Container>
          
            <Routes>
              <Route path='/pizzas' element={<AllPizzasScreen/>} />
              <Route path='/pizza/:id' element={<SinglePizzaScreen/>} />
              <Route path='/cart' element={<CartScreen/>} />
              <Route path='/' element={<HomeScreen/>} />
              <Route path='*' element={<ErrorScreen/>} />
            </Routes>
         
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
