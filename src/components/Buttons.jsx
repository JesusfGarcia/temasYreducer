import './styles.scss'

const Button = ({ type, text, onClick, isLoading = false }) => {
  return (
    <button onClick={onClick} className={type}>
      {!isLoading ? text : "Cargando..."}
    </button>
  );
};

export { Button };
