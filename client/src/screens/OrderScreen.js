import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import { getOrderById } from "../actions/orderActions";

const OrderScreen = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const orderById = useSelector((state) => state.orderById);
  const { loading, error, order } = orderById;

  useEffect(() => {
    dispatch(getOrderById(params.id));
    console.log(order);
  }, [dispatch, params]);

  return (
    <Container>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          <Col md={6} className='mx-auto'>
            <ListGroup className='mb-3'>
              <ListGroup.Item>
                <strong>User:</strong> {order.user.name}
                <strong> E-mail: </strong>
                {order.user.email}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className='mb-3'>
              <ListGroup.Item>
                <p>
                  <strong>Order nr.</strong> {order._id}
                </p>
              </ListGroup.Item>
              {order.orderItems.map((pizza, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col>
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Col>
                    <Col>
                      <p>
                        <strong>Pizza:</strong> {pizza.name}
                      </p>
                    </Col>
                    <Col>
                      <strong>Price:</strong> ${pizza.price}
                    </Col>
                    <Col>
                      <strong>Qty: </strong>
                      {pizza.num}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <ListGroup className='mb-3'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Total Price:</strong> ${order.totalPrice}
                  </Col>
                  <Col>
                    <strong>Shipping Address:</strong> {order.shippingAddress}
                  </Col>
                  <Col>
                    <strong>Order is:</strong>
                    {order.isPaid ? " Paid" : " Not paid"}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default OrderScreen;
