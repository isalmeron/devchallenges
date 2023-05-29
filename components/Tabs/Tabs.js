import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import styles from "@/styles/Tabs.module.scss";
import classNames from "classnames";
import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

const TODO_STATUS = {
  completed: true,
  active: false
};

export default function Tabs({
  tabs,
  onChangeTab,
  children
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [todoValue, setTodoValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const changeTab = (index) => {
    onChangeTab && onChangeTab(index);
    setActiveTab(index);
  }

  const onInputChange = (e) => {
    setTodoValue(e.target.value);
  }

  const onAddClick = () => {
    if (!todoValue) return;
    setTodoList(todoList.concat({
      id: todoValue.toLowerCase().replace(' ','_'),
      value: todoValue,
      status: TODO_STATUS.active
    }));
    setTodoValue('');
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
          <div className={styles.inputBar}>
            <div className={styles.input}>
              <Input
                placeholder="add details"
                size="sm"
                onChange={onInputChange}
                value={todoValue}
                fullWidth
              />
            </div>
            <div>
              <Button 
                color="primary"
                size="lg"
                onClick={onAddClick}
              >
                Add
              </Button>
            </div>
          </div>
          <div>
            <ul className={styles.todoList}>
              {todoList.map((todo, todoIdx) => 
                <li key={todo.value}>
                  <Checkbox
                    checked={todo.status}
                    onChange={(e) => { 
                      const todoClone = [...todoList];
                      todoClone[todoIdx].status = e.target.checked;

                      setTodoList(todoClone);
                     }}
                    label={todo.value}
                    id={todo.id}
                  />
                </li>
              )}
            </ul>
          </div>
      </div>
    </div>
  );
}
