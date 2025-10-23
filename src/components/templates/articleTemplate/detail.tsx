"use client";

import Header from "@/components/organisms/header";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type ArticleType = {
	id: number;
	title: string;
	detail: string;
	hit: number;
	author: string;
};

const ArticleDetailTemplate = () => {
	const params = useParams();
	const router = useRouter();
	const [data, setData] = useState<ArticleType>({} as ArticleType);

	const getData = async () => {
		const response = await axios.get(
			`https://support.akbolat.net/api/articles/${params.slug}`
		);

		if (response.status === 200) {
			setData(response.data.data);

			const res = await axios.put(
				`https://support.akbolat.net/api/articles/${params.slug}`,
				{
					data: {
						hit: response.data.data.hit + 1,
					},
				},
				{
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("token"),
					},
				}
			);

			setData(res.data.data);
		}
	};

	const deleteArticle = async () => {
		const response = await axios.delete(
			`https://support.akbolat.net/api/articles/${params.slug}`,
			{
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			}
		);

		if (response.status === 204) {
			router.replace("/articles");
		}
	};

	useEffect(() => {
		getData();
	}, [params.slug]);

	return (
		<div>
			{data?.title ? (
				<>
					<Header
						title={data.title}
						description="Makalenin devamı aşağıdadır."
					/>
					<h1>Başlık: {data?.title}</h1>
					<div>
						Yazar: {data?.author} / Hit: {data.hit}
					</div>
					<p>Detay: {data?.detail}</p>

					<div
						className="border border-amber-300 p-4 w-20 text-center"
						onClick={deleteArticle}
					>
						Sil
					</div>
				</>
			) : null}
		</div>
	);
};

export default ArticleDetailTemplate;
