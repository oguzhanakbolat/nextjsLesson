import React, { FC } from "react";
import style from "./style.module.css";
import Link from "next/link";
import useArticle from "@/store";
import { articleType } from "@/constants/types/article";

const ArticleCard: FC<articleType> = (item) => {
	const { addArticle, articles } = useArticle();

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
