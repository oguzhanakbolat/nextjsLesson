"use client";

import PostCard from "@/components/molecules/postCard";
import { postType } from "@/constants/types";
import axios from "axios";
import { useState } from "react";

const title = "Merhaba, Dünya!";

const Home = () => {
	// ts alanı
	const [count, setCount] = useState(1);
	const [data, setData] = useState<postType[]>({} as postType[]);
	const [size, setSize] = useState<number>(0);

	const handleClick = async () => {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts/" + count
		);

		if (response.status === 200) {
			if (count === 1) {
				setData([response.data]);
			} else {
				setData([response.data, ...data]);
			}
		}

		setCount((x) => x + 1);
	};
	// html alanı
	return (
		<div className="p-8">
			{title}
			<div className="flex flex-row gap-x-[4px] my-4">
				<div
					className="cursor-pointer bg-[#f00] p-4 rounded-[4px]"
					onClick={handleClick}
				>
					Data +
				</div>
				<div
					className="cursor-pointer bg-[#f0f] p-4 rounded-[4px]"
					onClick={() => setSize((x) => x + 1)}
				>
					Size -
				</div>
				<div
					className="cursor-pointer bg-[#ff0] p-4 rounded-[4px]"
					onClick={() => setSize((x) => x - 1)}
				>
					Size -
				</div>
			</div>
			<div>
				{data.length > 0 &&
					data.map((item) => (
						<PostCard
							key={item.id}
							id={item.id}
							title={item.title}
							body={item.body}
							size={size}
						/>
					))}
			</div>
		</div>
	);
};

export default Home;
