import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Context from "../../context"
import style from "./Header.module.scss"

const Header = () => {
  const { setCartIsOpen, totalPrice } = useContext(Context)

  return (
    <header className={style.header}>
      <Link to='/'>
        <div className={style.label}>
          <img src='./img/logo.png' alt='logo' width={40} height={40} />
          <div className={style.labelText}>
            <h3 className={style.labelName}>REACT SNEAKERS</h3>
            <p className={style.labelComment}>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div className={style.headerRight}>
        <div className={style.cartWrapper} onClick={() => setCartIsOpen(true)}>
          <img src='./img/icons/cart.svg' alt='cart' />
          <span className={style.cartSum}>{totalPrice} руб.</span>
        </div>
        <Link to='/favorite' className='favoriteBtn'>
          <img src='./img/icons/heart.svg' alt='favorite' />
        </Link>
        <img src='./img/icons/profile.svg' alt='profile' />
      </div>
    </header>
  )
}

export default Header
