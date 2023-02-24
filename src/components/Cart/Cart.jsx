import React, { useContext } from "react"
import Context from "../../context"
import { CartItem } from "../CartItem/CartItem"

import style from "./Cart.module.scss"

export const Cart = () => {
  const {
    setCartIsOpen,
    cart = [],
    onRemoveCart,
    totalPrice,
  } = useContext(Context)

  return (
    <div className={style.cart}>
      <div className={style.outlay} onClick={() => setCartIsOpen(false)}></div>
      <div className={style.cartContainer}>
        <h2 className={style.cartTitle}>Корзина</h2>
        <div className={style.container}>
          {cart.map((e) => (
            <CartItem data={e} key={e.id} onRemoveCart={onRemoveCart} />
          ))}
        </div>
        <div className={style.priceBlock}>
          <div className={style.priceItem}>
            <h3 className={style.priceFont}>Итого:</h3>
            <b className={style.price}>{totalPrice} руб.</b>
          </div>
          <div className={style.priceItem}>
            <h3 className={style.priceFont}>Скидка:</h3>
            <b className={style.price}>0 руб.</b>
          </div>
          <button className={style.offerBtn}>Оформить заказ</button>
        </div>
      </div>
    </div>
  )
}
