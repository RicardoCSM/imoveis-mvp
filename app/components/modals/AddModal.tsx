'use client';

import useAddModal from "@/app/hooks/useAddModal";
import Modal from "./Modal";
import ImmobileForm from "../forms/ImmobileForm";

const AddModal = () => {
  const addModal = useAddModal();

  const bodyContent = (
    <div className="flex flex-col mt-4">
      <ImmobileForm/>
    </div>
  )

  return (
    <Modal
      isOpen={addModal.isOpen}
      title="Adicionar Imóvel"
      actionLabel="Adicionar"
      secondaryAction={() => addModal.onClose()}
      secondaryActionLabel="Cancelar"
      onClose={addModal.onClose}
      onSubmit={() => { }}
      body={bodyContent}
    />
  );
}

export default AddModal;