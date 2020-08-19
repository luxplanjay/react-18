import React from 'react';
import './TodoFilter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelectors, changeFilter } from '../../redux/todos';

export default function TodoFilter() {
    const dispatch = useDispatch();
    const value = useSelector(todosSelectors.getFilter);

    const onChange = e => dispatch(changeFilter(e.target.value));

    return (
        <div className="TodoFilter">
            <p className="TodoFilter__label">Фильтр по содержимому</p>
            <input
                type="text"
                className="TodoFilter__input"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
