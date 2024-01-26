'use client';

import useEditModal from "@/app/hooks/useEditModal";
import Modal from "./Modal";
import useAddModal from "@/app/hooks/useAddModal";
import { useCallback } from "react";
import ImmobileForm from "../forms/ImmobileForm";

const EditModal = () => {
  const editModal = useEditModal();
  const addModal = useAddModal();

  const onToggle = useCallback(() => {
    editModal.onClose();
    addModal.onOpen();
  }, [editModal, addModal])

  const bodyContent = (
    <div className="flex flex-col mt-4">
      <ImmobileForm />
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
      secondaryAction={() => editModal.onClose()}
      secondaryActionLabel="Cancelar"
      onClose={editModal.onClose}
      onSubmit={() => { }}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default EditModal;