import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return createPortal(
        <div className="Modal__backdrop" onClick={handleBackdropClick}>
            <div className="Modal__content">{children}</div>
        </div>,
        modalRoot,
    );
}
