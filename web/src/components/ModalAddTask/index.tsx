import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface Tasks {
  title: string;
  priority: string;
  message: string;   
}

interface TasksData {
  title: string;
  message: string;  
  priority: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTask: (task: Tasks) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddTask,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: TasksData) => {
      handleAddTask(data);

      setIsOpen();
    },
    [handleAddTask, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova Tarefa</h1>

        <Input name="title" placeholder="Título da tarefa" />

        <Input name="message" style={{ height: 50 }} placeholder="Descrição" />
        <button type="submit">
          <p className="text">Adicionar Tarefa</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
