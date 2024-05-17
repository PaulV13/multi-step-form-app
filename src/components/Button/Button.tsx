type ButtonProps = {
  title: string;
  styles: string;
  handleAction: () => void;
};

function Button({ title, styles, handleAction }: ButtonProps) {
  return (
    <button className={styles} onClick={handleAction}>
      {title}
    </button>
  );
}

export default Button;
