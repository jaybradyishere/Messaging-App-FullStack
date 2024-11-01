import styles from "./layout.module.css";
export default function MessageBoardLayout({ children }) {
  return (
    <div className={styles.messageContainer}>
      <h1 className={styles.messageLayoutHeader}>The big ol message board</h1>
      {children}
    </div>
  );
}
