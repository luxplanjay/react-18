import React from 'react';
import { useSelector } from 'react-redux';
import './Stats.scss';
import { todosSelectors } from '../../redux/todos';

export default function Stats() {
    const total = useSelector(todosSelectors.getTotalTodoCount);
    const completed = useSelector(todosSelectors.getCompletedTodoCount);

    return (
        <div className="Stats">
            <p className="Stats__item">
                <span className="Stats__value">{total}</span>
                <span className="Stats__label">Всего</span>
            </p>
            <p className="Stats__item">
                <span className="Stats__value">{completed}</span>
                <span className="Stats__label">Выполнено</span>
            </p>
        </div>
    );
}
