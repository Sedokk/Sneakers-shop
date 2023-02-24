import { useState, useEffect } from "react"
import { Cart } from "./components/Cart/Cart"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Context from "./context"

const App = () => {
  const [data, setData] = useState()
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const myData = await axios.get(
        "https://6362970b66f75177ea3391a8.mockapi.io/sneakers"
      )
      setData(myData.data)
    }
    try {
      getData()
    } catch (error) {
      console.log("АШИПКА")
    }
  }, [])

  const onAddCart = (obj) => {
    if (!cart.find((e) => e.id === obj.id)) {
      setCart((prev) => [...prev, obj])
    } else {
      setCart((prev) => [...prev.filter((e) => e.id !== obj.id)])
    }
  }

  const onRemoveCart = (id) => {
    setCart((prev) => [...prev.filter((e) => e.id !== id)])
  }

  useEffect(() => {
    setTotalPrice(() => {
      return cart.reduce((acc, item) => (acc += item.price), 0)
    })
  }, [cart])

  return (
    <Context.Provider
      value={{
        setCartIsOpen,
        cart,
        onRemoveCart,
        onAddCart,
        data,
        totalPrice,
        setTotalPrice,
      }}
    >
      <Header />
      {cartIsOpen ? <Cart /> : null}
      <main>
        <Outlet />
      </main>
    </Context.Provider>
  )
}

export default App
