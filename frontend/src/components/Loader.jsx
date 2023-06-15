import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      size=""
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loader;

// Spinner.defaultProps = {}
