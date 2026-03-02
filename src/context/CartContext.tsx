'use client';

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CartItem } from '@/types';
import { MAX_CART_QUANTITY } from '@/lib/constants';

interface CartContextValue {
  items: CartItem[];
  isHydrated: boolean;
  isDrawerOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems, isHydrated] = useLocalStorage<CartItem[]>('wild-flower-cart', []);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addItem = useCallback(
    (newItem: CartItem) => {
      setItems((prev) => {
        const existingIndex = prev.findIndex(
          (item) => item.variantId === newItem.variantId
        );

        if (existingIndex > -1) {
          // Item already in cart -- increase quantity
          const updated = [...prev];
          const existing = updated[existingIndex];
          updated[existingIndex] = {
            ...existing,
            quantity: Math.min(
              existing.quantity + newItem.quantity,
              MAX_CART_QUANTITY
            ),
          };
          return updated;
        }

        // New item
        return [...prev, { ...newItem, quantity: Math.min(newItem.quantity, MAX_CART_QUANTITY) }];
      });
    },
    [setItems]
  );

  const removeItem = useCallback(
    (variantId: string) => {
      setItems((prev) => prev.filter((item) => item.variantId !== variantId));
    },
    [setItems]
  );

  const updateQuantity = useCallback(
    (variantId: string, quantity: number) => {
      if (quantity < 1) {
        removeItem(variantId);
        return;
      }

      setItems((prev) =>
        prev.map((item) =>
          item.variantId === variantId
            ? { ...item, quantity: Math.min(quantity, MAX_CART_QUANTITY) }
            : item
        )
      );
    },
    [setItems, removeItem]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, [setItems]);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.priceAtAdd * item.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isHydrated,
      isDrawerOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openDrawer,
      closeDrawer,
    }),
    [
      items,
      isHydrated,
      isDrawerOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openDrawer,
      closeDrawer,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
