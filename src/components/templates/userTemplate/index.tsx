"use client";

import ArticleCard from "@/components/organisms/articleCard";
import Header from "@/components/organisms/header";
import useArticle from "@/store";
import React, { useEffect, useState } from "react";

const UserTemplate = () => {
	const [user, setUser] = useState({});
	const { articles } = useArticle();

	const getUserData = () => {
		const userData = localStorage.getItem("user");

		if (userData) {
			setUser(JSON.parse(userData));
		}
	};

	useEffect(() => {
		getUserData();
	}, []);

	console.log("---", articles);

	return (
		<div>
			<Header
				title={user.username}
				description="Kullanıcıya ait bilgiler"
			/>
			<div>
				{articles.map((item) => (
					<ArticleCard
						key={item.documentId}
						title={item.title}
						documentId={item.documentId}
					/>
				))}
			</div>
		</div>
	);
};

export default UserTemplate;
