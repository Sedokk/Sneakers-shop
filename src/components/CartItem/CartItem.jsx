import React from "react"

import style from "./CartItem.module.scss"

export const CartItem = ({ data, onRemoveCart }) => {
  const { price, title, imageUrl } = data
  return (
    <div className={style.item}>
      <div
        className={style.img}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={style.textBlock}>
        <h3 className={style.title}>{title}</h3>
        <h4 className={style.price}>
          <span>{price}</span> руб.
        </h4>
      </div>
      <div className={style.cancel} onClick={() => onRemoveCart(data.id)}>
        <img
          src='./img/icons/plus.svg'
          alt='delete'
          className={style.cancelImage}
        />
      </div>
    </div>
  )
}
