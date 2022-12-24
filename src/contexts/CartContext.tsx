import { ReactNode, createContext, useState, useContext } from 'react'

type Sneaker = {
  id: string
  name: string
  description: string
  price: number
  isFeatured: boolean
  slug: string
  image: {
    url: string
  } | null
}

interface CartContextData {
  cartItems: Sneaker[]
  addItemToCart: (product: Sneaker) => void
  removeItemFromCart: (productId: string) => void
  checkIfItemAlreadyExists: (productId: string) => boolean
  cartTotal: number
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Sneaker[]>([])

  const cartTotal = cartItems?.reduce(
    (total, product) => total + product.price,
    0
  )

  function addItemToCart(product: Sneaker) {
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
