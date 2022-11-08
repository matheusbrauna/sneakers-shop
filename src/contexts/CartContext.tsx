import { ReactNode, createContext, useState, useContext } from 'react'

export interface IProduct {
  id: string
  name: string
  description: string
  imageUrl: string
  defaultPrice: string
  promotionPrice: string
  numberPrice: number
}

interface CartContextData {
  cartItems: IProduct[]
  addItemToCart: (product: IProduct) => void
  removeItemFromCart: (productId: string) => void
  checkIfItemAlreadyExists: (productId: string) => boolean
  cartTotal: number
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartTotal = cartItems.reduce(
    (total, product) => total + product.numberPrice,
    0
  )

  function addItemToCart(product: IProduct) {
    setCartItems((state) => [...state, product])
  }

  function removeItemFromCart(productId: string) {
    setCartItems((state) => state.filter((product) => product.id !== productId))
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        cartTotal,
        checkIfItemAlreadyExists,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
