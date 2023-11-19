import React, { useState, useEffect } from 'react';
function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">API</h1>
      <ul className="list-group">
        {todos.map(todo => (
          <li className="list-group-item" key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <div className="text-center my-4">
        <button className='btn btn-danger mx-2' onClick={handlePreviousPage}>Précédent</button>
        <button className='btn btn-danger mx-2' onClick={handleNextPage}>Suivant</button>
      </div>
    </div>
  );
}
export default Api;
