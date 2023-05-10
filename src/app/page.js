"use client";

import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";

export default function Home() {
	const { tasks } = useTasks();

	return (
		<section className="my-4 px-2 sm:px-0">
			<div className="pb-4 text-xl">
				{tasks.length > 0 ? (
					<span>Cantidad de tareas: {tasks.length} </span>
				) : (
					<span>No se han encontrado tareas</span>
				)}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-container gap-4">
				{tasks.map((task) => (
					<TaskCard key={task.id} {...task} />
				))}
			</div>
		</section>
	);
}
