import { create } from 'zustand';

interface AddressStore {
  selectedAddressId: number | null;
  setSelectedAddressId: (address_id: number | null) => void;
  removeSelectedAddressId: () => void,
}

const useAddressStore = create<AddressStore>((set) => ({
  selectedAddressId: null,
  setSelectedAddressId: (address_id) => set({ selectedAddressId: address_id }),
  removeSelectedAddressId: () => set({ selectedAddressId: null }),
}));

export default useAddressStore;