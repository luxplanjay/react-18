import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    const onLogOut = useCallback(() => {
        dispatch(authOperations.logOut());
    }, [dispatch]);

    return (
        <div style={styles.container}>
            <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Welcome, {name}</span>
            <button type="button" onClick={onLogOut}>
                Logout
            </button>
        </div>
    );
}
