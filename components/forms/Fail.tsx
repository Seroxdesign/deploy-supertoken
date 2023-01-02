import React from 'react';

const Fail: React.FC<{onClose: () => void}> = ({ onClose }) => (
  <div
    style={{
      backgroundColor: '#303030',
      width: '100%',
      borderRadius: '12px',
      padding: '1em',
      fontFamily: 'arial',
    }}
  >
    <h2>Transaction Failed</h2>

    <button
      onClick={onClose}
      style={{
        height: '5vh',
        width: '100px',
        backgroundColor: 'black',
        border: 'none',
        borderRadius: '12px',
        marginTop: '1em'
      }}
    >
      Close
    </button>
  </div>
);

export default Fail;