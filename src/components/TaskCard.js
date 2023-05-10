import { useTasks } from "@/context/TaskContext";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";

const TaskCard = ({ id, title, description }) => {
	const { deleteTask } = useTasks();

	const handleDelete = (id) => {
		deleteTask(id);
		toast.success("task deleted successfully");
	};

	return (
		<div className="bg-white p-2 flex-1 rounded-md">
			<h2 className="text-xl pb-2">{title}</h2>
			<p className="text-base my-2">{description}</p>
			<div className="grid grid-cols-2 gap-x-4">
				<button
					className="bg-red-600/80 text-center rounded-sm text-white"
					onClick={() => handleDelete(id)}
				>
					Delete
				</button>
				<Link
					className="bg-[#f3f2ef] hover:bg-yellow-400/80 text-center rounded-sm"
					href={`/edit/${id}`}
				>
					Edit
				</Link>
			</div>
		</div>
	);
};
``;

export default TaskCard;
