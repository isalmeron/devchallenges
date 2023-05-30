import styles from "@/styles/Tabs.module.scss";
import classNames from "classnames";
import { useState } from "react";

export default function Tabs({
  tabs,
  onChangeTab,
  children
}) {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    onChangeTab && onChangeTab(index);
    setActiveTab(index);
  }

  return (
    <div className={styles.container}>
      <ul className={styles.tabs}>
        {tabs.map((tab, position) => 
          <li
            key={tab}
            className={classNames({ [styles.active]: position === activeTab })}
            onClick={() => changeTab(position)}
          >
            {tab}
          </li>
        )}
      </ul>
      <div className={styles.content}>
          {children}
      </div>
    </div>
  );
}
