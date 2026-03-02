'use client';

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { ShippingAddress, ShippingMethod } from '@/types';
import { SHIPPING_METHODS } from '@/lib/constants';

interface CheckoutState {
  email: string;
  shippingAddress: ShippingAddress;
  shippingMethod: ShippingMethod;
  step: 'information' | 'shipping' | 'payment' | 'confirmation';
  orderNumber: string | null;
}

interface CheckoutContextValue extends CheckoutState {
  setEmail: (email: string) => void;
  setShippingAddress: (address: ShippingAddress) => void;
  setShippingMethod: (method: ShippingMethod) => void;
  setStep: (step: CheckoutState['step']) => void;
  setOrderNumber: (orderNumber: string) => void;
  reset: () => void;
}

const emptyAddress: ShippingAddress = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'US',
  phone: '',
};

const initialState: CheckoutState = {
  email: '',
  shippingAddress: emptyAddress,
  shippingMethod: SHIPPING_METHODS[0],
  step: 'information',
  orderNumber: null,
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CheckoutState>(initialState);

  const setEmail = useCallback((email: string) => {
    setState((prev) => ({ ...prev, email }));
  }, []);

  const setShippingAddress = useCallback((shippingAddress: ShippingAddress) => {
    setState((prev) => ({ ...prev, shippingAddress }));
  }, []);

  const setShippingMethod = useCallback((shippingMethod: ShippingMethod) => {
    setState((prev) => ({ ...prev, shippingMethod }));
  }, []);

  const setStep = useCallback((step: CheckoutState['step']) => {
    setState((prev) => ({ ...prev, step }));
  }, []);

  const setOrderNumber = useCallback((orderNumber: string) => {
    setState((prev) => ({ ...prev, orderNumber }));
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  const value = useMemo<CheckoutContextValue>(
    () => ({
      ...state,
      setEmail,
      setShippingAddress,
      setShippingMethod,
      setStep,
      setOrderNumber,
      reset,
    }),
    [state, setEmail, setShippingAddress, setShippingMethod, setStep, setOrderNumber, reset],
  );

  return (
    <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
  );
}

export function useCheckout(): CheckoutContextValue {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}
