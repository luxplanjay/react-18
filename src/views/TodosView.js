import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { todosOperations, todosSelectors } from '../redux/todos';

const barStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 20,
};

export default function TodosView() {
    const dispatch = useDispatch();
    const isLoadingTodos = useSelector(todosSelectors.getLoading);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(todosOperations.fetchTodos());
    }, [dispatch]);

    const toggleModal = useCallback(() => {
        setShowModal(prevShowModal => !prevShowModal);
    }, []);

    return (
        <Container>
            <div style={barStyles}>
                <Filter />
                <Stats />
                <IconButton onClick={toggleModal} aria-label="Добавить todo">
                    <AddIcon width="40" height="40" fill="#fff" />
                </IconButton>

                {isLoadingTodos && <h1>Загружаем...</h1>}
            </div>

            <TodoList />

            {showModal && (
                <Modal onClose={toggleModal}>
                    <TodoEditor onSave={toggleModal} />
                </Modal>
            )}
        </Container>
    );
}
