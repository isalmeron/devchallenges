import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import Input from "@/components/Input/Input";
import Tabs from "@/components/Tabs/Tabs";
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

  const onDeleteItem = (index) => {
    const todoListClone = [...todoList];
    todoListClone.splice(index, 1);
    setTodoList(todoListClone);
  }

  const onDeleteAll = () => {
    setTodoList([]);
  }

  return (
    <>
      <div className="container">
        <h3>#todo</h3>
        <Tabs
          tabs={Object.keys(TAB_STATES)}
          onChangeTab={onTabClick}
        >
          <div className="inputBar">
            <div className="input">
              <Input
                placeholder="add details"
                size="md"
                onChange={onInputChange}
                onKeyDown={onEnterKeyDown}
                value={todoValue}
                fullWidth
              />
            </div>
            <div>
              <Button 
                color="primary"
                size="xl"
                onClick={onAddClick}
              >
                Add
              </Button>
            </div>
          </div>
          <div>
            <ul className="todoList">
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
                    {TAB_STATES[tabState] === true && <p className="material-icons-outlined iconButton" onClick={() => { onDeleteItem(todoIdx) }}>delete</p>}
                  </li>
                )
              }
            </ul>
            {TAB_STATES[tabState] === true && <div className="deleteContainer">
              <Button color="danger" size="lg" startIcon="delete" onClick={onDeleteAll}>delete all</Button>
            </div>}
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

          .inputBar {
              display: flex;
              gap: 1.5rem;
              width: 100%;
          }

          .inputBar .input {
            flex: 1;
          }

          .todoList {
            padding: 2rem 0;
          }

          .todoList li {
            list-style-type: none;
            padding-bottom: 1.6rem;
            display: flex;
            justify-content: space-between;
          }

          .todoList li > [type="checkbox"]:checked + label {
            text-decoration: line-through;
          }

          .iconButton {
            color: #BDBDBD;
            cursor: pointer;
          }

          .deleteContainer {
            width: 100%;
            display: flex;
            justify-content: end;
          }
        `}
      </style>
    </>
  );
}
