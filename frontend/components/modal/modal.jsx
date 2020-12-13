import React from 'react';

const Modal = ({ component, modalVis, func }) => {
    if (!modalVis) {
        return null;
    }

    const closeModal = () => func(false);

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

export default Modal;