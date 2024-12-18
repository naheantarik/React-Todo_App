"use client";
import React, { useState } from "react";

const HomeComponent = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { task, description };
    setMainTask([...mainTask, newTask]);
    setHistory([...history, { action: "Added", task: newTask }]);
    setTask("");
    setDescription("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    const removedTask = copyTask.splice(i, 1)[0];
    setMainTask(copyTask);
    setHistory([...history, { action: "Deleted", task: removedTask }]);
  };

  let renderTask = (
    <h2 className="text-xl font-semibold text-center text-gray-600">
      No Tasks Found
    </h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="flex justify-between items-center bg-white shadow-md p-4 rounded-md mb-4"
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-emerald-700">{t.task}</h2>
            <p className="text-gray-600">{t.description}</p>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  const renderHistory = history.map((h, i) => (
    <li key={i} className="p-2 text-gray-700">
      <span className="font-bold">{h.action}:</span> {h.task.task} -{" "}
      {h.task.description}
    </li>
  ));

  return (
    <div className="min-h-screen bg-gray-100">
      <h2 className="text-5xl font-bold text-center bg-emerald-700 text-white py-8">
        Todo App
      </h2>
      <form
        className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 py-8"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Enter your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full md:w-1/3 border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full md:w-1/3 border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          className="bg-emerald-700 text-white py-3 px-6 text-lg rounded-md hover:bg-emerald-800 transition-all duration-300"
        >
          Add Task
        </button>
      </form>
      <div className="p-8 max-w-4xl mx-auto">
        <ul className="space-y-4">{renderTask}</ul>
      </div>
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mx-auto block hover:bg-blue-600 transition-all duration-300"
      >
        {showHistory ? "Hide History" : "Show History"}
      </button>
      {showHistory && (
        <div className="p-8 max-w-4xl mx-auto bg-gray-200 rounded-md mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Task History
          </h3>
          <ul className="space-y-2">{renderHistory}</ul>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
