import React, { useEffect }  from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import SinglePizza from '../components/SinglePizza'
import { getAllPizzas } from '../actions/pizzaActions'

const AllPizzasScreen = () => {

    const dispatch = useDispatch()
    const allPizzas = useSelector(state=>state.allPizzas)
    const {loading, pizzas} = allPizzas

    useEffect(()=>{
        dispatch(getAllPizzas())
    },[dispatch])
    return (
        <div >
            
             {loading ? <h2>Loading...</h2> : (

                 <Row>
                     {pizzas.map( pizza=>(
                        <Col  md={6}  key={pizza._id}>
                            <SinglePizza pizza={pizza}/>
                            
                        </Col>)
        
                    ) }
                     
                 </Row>
             ) }
        </div>
       
    )
}

export default AllPizzasScreen
