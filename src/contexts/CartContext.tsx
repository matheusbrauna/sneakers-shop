import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
} from 'react'

export type Sneaker = {
  id: string
  name: string
  description: string
  price: number
  slug: string
  image: {
    url: string
  }
  brand?: {
    name: string
  }
  category?: {
    name: string
  }
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

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, product) => total + product.price, 0)
  }, [cartItems])

  const addItemToCart = useCallback((product: Sneaker) => {
    setCartItems((state) => [...state, product])
  }, [])

  const removeItemFromCart = useCallback((productId: string) => {
    setCartItems((state) => state.filter((product) => product.id !== productId))
  }, [])

  const checkIfItemAlreadyExists = useCallback(
    (productId: string) => {
      return cartItems.some((product) => product.id === productId)
    },
    [cartItems]
  )

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
