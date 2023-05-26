import styles from "@/styles/Tabs.module.scss";

export default function Tabs() {
  return (
    <div className={styles.container}>
      <ul className={styles.tabs}>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </div>
  );
}
