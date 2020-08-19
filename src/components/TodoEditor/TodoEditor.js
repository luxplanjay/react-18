import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import './TodoEditor.scss';

export default function TodoEditor({ onSave }) {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleChange = useCallback(e => {
        setMessage(e.currentTarget.value);
    }, []);

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            if (message === '') {
                return alert('Заполни текст заметки.');
            }

            dispatch(todosOperations.addTodo(message));
            onSave();
            setMessage('');
        },
        [dispatch, message, onSave],
    );

    return (
        <form className="TodoEditor" onSubmit={handleSubmit}>
            <textarea
                className="TodoEditor__textarea"
                value={message}
                onChange={handleChange}
            ></textarea>
            <button type="submit" className="TodoEditor__button">
                Сохранить
            </button>
        </form>
    );
}
