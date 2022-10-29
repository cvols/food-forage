import create from 'zustand';

import { BasicModal, CoolModal } from '../components/Modals';

const chooseModal = (modal) => {
  switch (modal) {
    case 'cool':
      return <CoolModal />;
    default:
      return <BasicModal />;
  }
};

const store = (set, get) => ({
  modalVisible: false,
  modal: null,
  setModalVisible: (visible) => set({ modalVisible: visible }),
  setModal: (modal) => {
    set({ modalVisible: true, modal: chooseModal(modal) });
  },
});

export const useModalStore = create(store);
