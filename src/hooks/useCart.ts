import { create } from 'zustand';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  artist: string;
  size: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (newItem) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === newItem.id);
    
    if (existingItem) {
      set({
        items: items.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        items: [...items, { ...newItem, quantity: 1 }]
      });
    }
  },
  
  removeItem: (id) => {
    set({
      items: get().items.filter(item => item.id !== id)
    });
  },
  
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    
    set({
      items: get().items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    });
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  setIsOpen: (isOpen) => {
    set({ isOpen });
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));