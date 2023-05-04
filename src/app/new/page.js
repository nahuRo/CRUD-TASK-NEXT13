"use client";

import { useTasks } from "@/context/TaskContext";

const PageNewTask = () => {
	const { tasks } = useTasks();

	return <div>PageNewTask</div>;
};

export default PageNewTask;
