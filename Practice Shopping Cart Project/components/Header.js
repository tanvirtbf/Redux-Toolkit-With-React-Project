import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductError, fetchProductLoading, updateAllProducts } from '../store/slices/productsSlice'
import { fetchCartError, fetchCartItem, fetchCartLoading } from '../store/slices/cartSlice'

export default function Header() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProductLoading())
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateAllProducts(data))
      }).catch(() => {
        dispatch(fetchProductError('Something went wrong!'))
      })

    dispatch(fetchCartLoading())
    fetch('https://fakestoreapi.com/carts/5')
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchCartItem(data.products))
      }).catch(() => {
        dispatch(fetchCartError('Something Wrong!!!'))
      })
  },[])

  const cartItems = useSelector((state) => state.cartItems.list)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  )
}
