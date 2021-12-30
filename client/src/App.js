import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import PizzaCarousel from './components/PizzaCarousel'
import SinglePizzaScreen from './screens/SinglePizzaScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ListUsersScreen from './screens/ListUsersScreen'
import ErrorScreen from './screens/ErrorScreen'
import AllPizzasScreen from './screens/AllPizzasScreen'
import UserEditScreen from './screens/UserEditScreen';


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
              <Route path='/login' element={<LoginScreen/>} />
              <Route path='/profile' element={<ProfileScreen/>} />
              <Route path='/register' element={<RegisterScreen/>} />
              <Route path='/admin/userList' element={<ListUsersScreen/>} />
              <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
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
