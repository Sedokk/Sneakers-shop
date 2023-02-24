import React, { useContext, useState } from "react"
import Context from "../../context"
import { SneakersItem } from "../SneakersItem/SneakersItem"
import style from "./SneakersLayout.module.scss"

function SneakersLayout() {
  const [value, setValue] = useState("")
  const { data } = useContext(Context)

  const onInput = (event) => {
    setValue(event.target.value)
  }

  return (
    <section className={style.section}>
      <div className={style.topSection}>
        <h2 className={style.name}>Все кроссовки</h2>
        <label className={style.inputWrapper}>
          <img src='./img/icons/loupe.svg' alt='loupe' />
          <input
            type='text'
            className={style.input}
            placeholder='Поиск...'
            value={value}
            onChange={onInput}
          />
        </label>
      </div>
      <div className={style.sneakersWrapper}>
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          data
            .filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase())
            )
            .map((sneakersItem) => (
              <SneakersItem data={sneakersItem} key={sneakersItem.id} />
            ))
        )}
      </div>
    </section>
  )
}

export default SneakersLayout
