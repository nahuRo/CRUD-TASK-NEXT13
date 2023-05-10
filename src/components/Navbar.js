import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<ul className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-row gap-x-4 py-2 px-2 sm:px-0">
			<li>
				<Link href={"/"} className="font-semibold">
					Tasks
				</Link>
			</li>
			<li>
				<Link href={"/new"} className="font-semibold">
					Create Task
				</Link>
			</li>
		</ul>
	);
};

export default Navbar;
