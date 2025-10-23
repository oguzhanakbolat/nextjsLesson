"use client";

import ArticleCard from "@/components/organisms/articleCard";
import Header from "@/components/organisms/header";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import style from "./style.module.css";

const ArticleTemplate = () => {
	const [list, setList] = useState([]);
	const [page, setPage] = useState(1);
	const [animated, setAnimated] = useState([]);

	const getData = async () => {
		const response = await axios.get(
			"https://support.akbolat.net/api/articles?pagination[page]=" +
				page +
				"&pagination[pageSize]=10&sort=createdAt:desc"
		);

		if (response.status === 200) {
			setList(response.data.data);
			setAnimated(response.data.data.map((x: any) => x.id));

			setTimeout(() => {
				setAnimated(response.data.data.map(() => 0));
			}, 1500);
		}
	};

	const handleNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	useEffect(() => {
		getData();
	}, [page]);

	return (
		<div className="flex flex-col gap-1">
			<Header
				title="Makale Listesi"
				description="Tüm makaleleri buradan inceleyebilirsiniz."
			/>
			<div className="flex justify-between mb-4 w-[200px] border border-gray-300 p-2">
				<div className="cursor-pointer" onClick={handlePrevPage}>
					Geri
				</div>
				<div className="cursor-pointer" onClick={handleNextPage}>
					İleri
				</div>
			</div>
			<div className={style.container}>
				{list.length > 0
					? list.map((item: any, i: number) => (
							<ArticleCard
								key={item.documentId}
								title={item.title}
								documentId={item.documentId}
							/>
					  ))
					: null}
			</div>
		</div>
	);
};

export default ArticleTemplate;
