import React from 'react';

const Edit = ({ todo, desc, onChange, onSave}) => {

    const onClose =() => {
      document.getElementById("edit").style.display = "none"
    }
    
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50" id='edit'>
      <div className="bg-white rounded-md shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Edit your Todo</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editTodo">
            Todo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="editTodo"
            type="text"
            name="todo"
            value={todo}
            onChange={onChange}
            placeholder="Todo"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editDesc">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="editDesc"
            name="desc"
            value={desc}
            onChange={onChange}
            placeholder="Description"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onSave}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
