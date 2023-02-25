import React, { useContext } from "react"
import style from "./FavoriteLayout.module.scss"
import { SneakersItem } from "../SneakersItem/SneakersItem"
import Context from "../../context"

const FavoriteLayout = () => {
  const { favorite } = useContext(Context)

  return (
    <section className={style.section}>
      <div className={style.topSection}>
        <h2 className={style.name}>Все кроссовки</h2>
      </div>
      <div className={style.sneakersWrapper}>
        {!favorite ? (
          <h1>Loading...</h1>
        ) : (
          favorite.map((sneakersItem) => (
            <SneakersItem data={sneakersItem} key={sneakersItem.id} />
          ))
        )}
      </div>
    </section>
  )
}

export default FavoriteLayout
