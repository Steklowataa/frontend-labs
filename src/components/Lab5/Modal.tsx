import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    border: 'none',
    background: 'transparent',
    fontSize: '1.8rem',
    cursor: 'pointer',
  };


  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;