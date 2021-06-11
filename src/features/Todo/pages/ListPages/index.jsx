import React, { useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const listItem = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const Location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(listItem);
  const [fillterStatus, setFillterStatus] = useState(() => {
    const params = queryString.parse(Location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(Location.search);
    setFillterStatus(params.status || 'all');
  }, [Location.search]);

  const handleTodoClick = (todo, idx) => {
    // clone current todolist
    const newTodoList = [...todoList];
    console.log(todo, idx);
    // toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    newTodoList[idx] = newTodo;
    // update todo list
    setTodoList(newTodoList);
  };
  const handleShowAll = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNew = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompleted = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => fillterStatus === 'all' || fillterStatus === todo.status);
  }, [todoList, fillterStatus]);
  const handleTodoFormSubmit = (values) => {
    console.log('Form Submit: ', values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>TodoForm</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>todoList</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}>show All</button>
        <button onClick={handleShowNew}>show New</button>
        <button onClick={handleShowCompleted}>show Completed</button>
      </div>
    </div>
  );
}

export default ListPage;
