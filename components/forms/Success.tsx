const Success: React.FC<{message: string, link: string, address: string, onClose: () => void}> = ({message, link, address, onClose}) => (
  <div
    style={{
      backgroundColor: '#303030',
      width: '100%',
      borderRadius: '12px',
      padding: '1em',
      fontFamily: 'arial',
    }}
  >
    <h2>
      Successfully deployed Supertoken
    </h2>

    <div
      style={{
        marginTop: '1em',
        marginBottom: '1em',
      }}
    >
      <h3>Transaction Link:</h3>
      <a
        target={"_blank"}
        href={link}
        rel={"noreferrer"}
        style={{
          color: 'lightblue',
          marginTop: '1em',
        }}
      >
        View Transaction
      </a>
    </div>

    <div
      style={{
        marginTop: '1em',
        marginBottom: '1em',
      }}
    >
      <h3>Supertoken Link:</h3>
      <a
        target={"_blank"}
        href={address} rel={"noreferrer"}
        style={{
          color: 'lightblue',
          marginTop: '1em'
        }}
      >
        View Supertoken
      </a>
    </div>

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

export default Success;