import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import Input from "@/components/Input/Input";
import Tabs from "@/components/Tabs/Tabs";
import styles from '@/styles/Tabs.module.scss';
import { useState } from "react";

const TAB_STATES = {
  'All': null,
  'Active': false,
  'Completed': true
};

export default function Todo() {
  const [todoValue, setTodoValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [tabState, setTabState] = useState(null);

  const onTabClick = (tabIndex) => {
    setTabState(Object.keys(TAB_STATES)[tabIndex]);
  }

  const onAddClick = () => {
    if (!todoValue) return;
    setTodoList(todoList.concat({
      id: todoValue.toLowerCase().replace(' ','_'),
      value: todoValue,
      status: TAB_STATES['Active']
    }));
    setTodoValue('');
  }

  const onInputChange = (e) => {
    setTodoValue(e.target.value);
  }

  const onEnterKeyDown = (e) => {
    if (e.code === 'Enter') {
      onAddClick();
    }
  }

  const onCheckboxClick = (e, todoIdx) => { 
    const todoClone = [...todoList];
    todoClone[todoIdx].status = e.target.checked;

    setTodoList(todoClone);
  }

  return (
    <>
      <div className="container">
        <h3>#todo</h3>
        <Tabs
          tabs={Object.keys(TAB_STATES)}
          onChangeTab={onTabClick}
        >
          <div className={styles.inputBar}>
            <div className={styles.input}>
              <Input
                placeholder="add details"
                size="sm"
                onChange={onInputChange}
                onKeyDown={onEnterKeyDown}
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
              {todoList
                .filter(todo => {
                  if (tabState === 'All') return true;
                  return todo.status === TAB_STATES[tabState];
                })
                .map((todo, todoIdx) => 
                  <li key={todo.value}>
                    <Checkbox
                      checked={todo.status}
                      onChange={(e) => { onCheckboxClick(e, todoIdx) }}
                      label={todo.value}
                      id={todo.id}
                    />
                  </li>
                )
              }
            </ul>
          </div>
        </Tabs>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1rem 2rem;
            gap: 2rem;
          }
        `}
      </style>
    </>
  );
}
