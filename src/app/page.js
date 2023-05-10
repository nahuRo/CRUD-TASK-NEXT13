"use client";

import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";

export default function Home() {
	const { tasks } = useTasks();

	return (
		<section className="grid grid-cols-1 sm:grid-cols-container gap-4 my-4 px-2 sm:px-0">
			{tasks.map((task) => (
				<TaskCard key={task.id} {...task} />
			))}
		</section>
	);
}
