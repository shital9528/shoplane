import './Cart.css'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../../components/CartItem/CartItem'
import { Link } from 'react-router-dom'
import { cartSelector } from '../../reducers/cartSlice'
import { getTotals } from '../../reducers/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()

  const items = useSelector(cartSelector);

  useEffect(() => {
    dispatch(getTotals())
  }, [items, dispatch])

  const shippingEstimate = 5;
  const taxEstimate = 5;

  const handleClick = () => {
    alert("Your order placed successfully...")
  }
  return (
    <div className='cart-container'>
      {
        items.cartItems.length === 0 ? (<div className="cart-empty">
          <div className='cart-empty-details'>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
              <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
            </svg></span>
            <p>Your cart is currently empty</p>
          </div>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>) : (<div className='cart'>
          <div className="cart-items">
            {
              items.cartItems?.map((item) => {
                return (
                  <CartItem items={item} key={item.id} />
                )
              })
            }
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${items.totalAmount}</span>
              </div>
              <div className="subtotal">
                <span>Shipping Estimate</span>
                <span className="amount">${shippingEstimate}</span>
              </div>
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${taxEstimate}</span>
              </div>
              <div className="subtotal">
                <span>Order Total</span>
                <span className="amount">${items.totalAmount + shippingEstimate + taxEstimate}</span>
              </div>
              <button onClick={() => handleClick()}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
              </svg>Check Out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Cart