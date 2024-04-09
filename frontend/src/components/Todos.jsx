/* eslint-disable react/prop-types */

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <div key={index}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed === true ? "Completed" : "Mark as Complete"}</button>
            </div>
          );
        })
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default Todos;
