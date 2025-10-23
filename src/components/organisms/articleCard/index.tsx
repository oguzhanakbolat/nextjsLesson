import React, { FC } from "react";
import style from "./style.module.css";
import Link from "next/link";
import useArticle from "@/store";

type Props = {
	title: string;
	documentId: string;
};

const ArticleCard: FC<Props> = (item) => {
	const { addArticle, articles } = useArticle();

	console.log(articles);

	return (
		<div className={style.container}>
			<Link href={`/articles/${item.documentId}`}>
				<div className={style.title}>{item.title}</div>
			</Link>
			<div onClick={() => addArticle(item)}>Favorilere Ekle</div>
		</div>
	);
};

export default ArticleCard;
