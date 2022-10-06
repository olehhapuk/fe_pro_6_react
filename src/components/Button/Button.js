import styles from './Button.module.css';

export default function Button({ type, children, variant = 'default' }) {
  return (
    <button type={type} className={styles[variant]}>
      {children}
    </button>
  );
}
