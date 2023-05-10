"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Taskcontext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const storageTasks = localStorage.getItem("tasks");

		if (storageTasks) setTasks(JSON.parse(storageTasks));
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const createTask = (title, description) => {
		setTasks([...tasks, { id: uuid(), title, description }]);
	};

	const deleteTask = (id) => {
		setTasks([...tasks.filter((task) => task.id !== id)]);
	};

	const updateTask = (id, updatedTask) => {
		setTasks([
			...tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
		]);
	};

	return (
		<Taskcontext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
			{children}
		</Taskcontext.Provider>
	);
};

// hook
export const useTasks = () => {
	const context = useContext(Taskcontext);

	if (!context) throw new Error("useTasks deberia tener un provider");

	return context;
};
