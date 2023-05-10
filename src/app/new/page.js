"use client";

import { useEffect } from "react";
import { useTasks } from "../../context/TaskContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const PageNewTask = ({ params }) => {
	const { tasks, createTask, updateTask } = useTasks();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (params.id) {
			const taskFound = tasks.find((task) => task.id === params.id);
			if (taskFound) {
				setValue("title", taskFound.title);
				setValue("description", taskFound.description);
			}
		}
	}, []);

	const onSubmit = handleSubmit((data) => {
		if (params.id) {
			updateTask(params.id, data);
			toast.success("task updated");
		} else {
			createTask(data.title, data.description);
			toast.success("task created");
		}
		router.push("/");
	});
	return (
		<form onSubmit={onSubmit} className="space-y-4 py-4">
			<div>
				<label htmlFor="title_task">Task Title:</label>
				<input
					className="w-full p-2 mt-2 rounded-sm"
					placeholder="Write a title"
					type="text"
					id="title_task"
					{...register("title", { required: true })}
				/>
				{errors.title && (
					<spanc className="text-red-600">Este campo es requerido</spanc>
				)}
			</div>
			<div>
				<label htmlFor="description_task">Task Description:</label>
				<textarea
					className="w-full p-2 mt-2 rounded-sm"
					rows="10"
					placeholder="Write a description"
					id="description_task"
					{...register("description", { required: true })}
				/>
				{errors.description && (
					<span className="text-red-600">Este campo es requerido</span>
				)}
			</div>

			<button className="bg-white hover:bg-gray-400 hover:text-white w-full p-2 rounded-sm">
				Save
			</button>
		</form>
	);
};

export default PageNewTask;
