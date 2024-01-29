'use client';

import useEditModal from "@/app/hooks/useEditModal";
import Modal from "./Modal";
import useAddModal from "@/app/hooks/useAddModal";
import { useCallback, useEffect } from "react";
import ImmobileForm from "../forms/ImmobileForm";
import useAddressStore from "@/app/hooks/useAddressStore";
import Adresses from "@/app/data/Addresses";
import Addresses from "@/app/data/Addresses";

const EditModal = () => {
  const editModal = useEditModal();
  const addModal = useAddModal();
  const selectedAddressId = useAddressStore((state) => state.selectedAddressId);
  const removeSelectedAddressId = useAddressStore((state) => state.removeSelectedAddressId);

  const onToggle = useCallback(() => {
    editModal.onClose();
    addModal.onOpen();
  }, [editModal, addModal])

  const bodyContent = (
    <div className="flex flex-col mt-4">
      <ImmobileForm address={Addresses.find((address) => address.id == selectedAddressId)}/>
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-2 mt-3">
      <hr />

      <div className="
      text-gray-700 text-center mt-4 font-light">
        <p>Deseja adicionar um novo imóvel?
          <span
            onClick={onToggle}
            className="
              text-gray-900
              cursor-pointer 
              hover:[#1565C0]
            "
          > Adicionar Imóvel</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={editModal.isOpen}
      title="Editar Imóvel"
      actionLabel="Editar"
      secondaryAction={() => {
        editModal.onClose();
        removeSelectedAddressId();
      }}
      secondaryActionLabel="Cancelar"
      onClose={() => {
        editModal.onClose();
        removeSelectedAddressId();
      }}
      onSubmit={() => { }}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default EditModal;