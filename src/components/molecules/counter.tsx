"use client";

import useArticle from "@/store";
import { useEffect, useState } from "react";

const Counter = () => {
	const { articles } = useArticle();
	const [count, setCount] = useState(0);

	const say = () => {
		setTimeout(() => {
			setCount((x) => x + 1);
			say();
		}, 1000);
	};

	useEffect(() => {
		say();
	}, []);

	return (
		<>
			<div>{count}</div>
			<div>Makale Sayısı: {articles.length}</div>
		</>
	);
};

export default Counter;
