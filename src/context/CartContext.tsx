"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  type ReactNode,
  type ComponentType,
} from "react";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  quantity: number;
  icon: ComponentType<{ className?: string }>;
}

interface AddItemPayload
  extends Omit<CartItem, "quantity"> {
  quantity?: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: AddItemPayload) => void;
  removeItem: (id: string) => void;
  updateQuantity: (
    id: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

const CART_STORAGE_KEY = "cart-storage";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] =
    useState(false);
  const [isHydrated, setIsHydrated] =
    useState(false);

  /**
   * Hydrate cart from localStorage
   */
  useEffect(() => {
    try {
      const storedCart =
        localStorage.getItem(CART_STORAGE_KEY);

      if (storedCart) {
        const parsedCart: CartItem[] =
          JSON.parse(storedCart);

        setItems(parsedCart);
      }
    } catch (error) {
      console.error(
        "Error loading cart from localStorage:",
        error
      );
    } finally {
      setIsHydrated(true);
    }
  }, []);

  /**
   * Persist cart to localStorage
   */
  useEffect(() => {
    if (!isHydrated) return;

    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error(
        "Error saving cart to localStorage:",
        error
      );
    }
  }, [items, isHydrated]);

  /**
   * Sync cart between tabs/windows
   */
  useEffect(() => {
    const handleStorageChange = (
      event: StorageEvent
    ) => {
      if (
        event.key === CART_STORAGE_KEY &&
        event.newValue
      ) {
        try {
          const updatedCart: CartItem[] =
            JSON.parse(event.newValue);

          setItems(updatedCart);
        } catch (error) {
          console.error("Error syncing cart:", error);
        }
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  const addItem = useCallback(
    (newItem: AddItemPayload) => {
      const quantityToAdd =
        newItem.quantity && newItem.quantity > 0
          ? newItem.quantity
          : 1;

      setItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) => item.id === newItem.id
        );

        if (existingItem) {
          return prevItems.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + quantityToAdd,
                }
              : item
          );
        }

        return [
          ...prevItems,
          {
            ...newItem,
            quantity: quantityToAdd,
          },
        ];
      });

      setIsCartOpen(true);
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => item.id !== id
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      setItems((prevItems) => {
        if (quantity <= 0) {
          return prevItems.filter(
            (item) => item.id !== id
          );
        }

        return prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity }
            : item
        );
      });
    },
    []
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(
    () => setIsCartOpen(true),
    []
  );

  const closeCart = useCallback(
    () => setIsCartOpen(false),
    []
  );

  const toggleCart = useCallback(
    () => setIsCartOpen((prev) => !prev),
    []
  );

  const totalItems = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum +
          item.priceNumber * item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider"
    );
  }

  return context;
}