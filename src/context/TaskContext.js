"use client";

import { createContext, useContext } from "react";

const Taskcontext = createContext();

export const TaskProvider = ({ children }) => {
	const tasks = [];

	return <Taskcontext.Provider value={{ tasks }}>{children}</Taskcontext.Provider>;
};

// hook
export const useTasks = () => {
	const context = useContext(Taskcontext);

	if (!context) throw new Error("useTasks deberia tener un provider");

	return context;
};
