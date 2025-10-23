"use client";

import { useEffect, useState } from "react";
import Register from "@/components/organisms/register";

const Home = () => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	const getUserData = () => {
		const userData = localStorage.getItem("user");
		if (userData) {
			setUser(JSON.parse(userData));
		}
		setLoading(true);
	};

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<>
			{!loading ? (
				<div>Yükleniyor...</div>
			) : user ? (
				<div>{user.username}</div>
			) : (
				<Register setUser={setUser} />
			)}
		</>
	);
};

export default Home;
