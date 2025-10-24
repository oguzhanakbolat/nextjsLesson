"use client";

import ArticleCard from "@/components/organisms/articleCard";
import Header from "@/components/organisms/header";
import { userType } from "@/constants/types/user";
import useArticle from "@/store";
import { useEffect, useState } from "react";

const UserTemplate = () => {
	const [user, setUser] = useState<userType>({} as userType);
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
						detail=""
						author=""
					/>
				))}
			</div>
		</div>
	);
};

export default UserTemplate;
