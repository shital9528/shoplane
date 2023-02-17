import './ToggleButton.css'

import { addToCart, removeFromCart } from '../../reducers/cartSlice'

import { FaCartPlus } from "react-icons/fa"
import React from 'react'
import { useDispatch } from 'react-redux'

const ToggleButton = (props) => {

    let item = props.product
    let isInCart = props.isInCart
    const dispatch = useDispatch()


    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    const handleRemoveToCart = (product) => {
        dispatch(removeFromCart(product))
    }


    return (
        <button
            className={isInCart ? "remove" : "add"}
            onClickCapture={isInCart ? (e) => {
                e.preventDefault()
                e.stopPropagation()
                handleRemoveToCart(item)
            } : (e) => {
                e.preventDefault()
                e.stopPropagation()
                handleAddToCart(item)
            }}>
            <span className='btn-logo'><FaCartPlus size={15} color="#fff" />
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}</span>
        </button>
    )
}

export default ToggleButton
