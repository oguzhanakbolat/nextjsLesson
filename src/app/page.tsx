"use client";

import Input from "@/components/atoms/input";
import PostCard from "@/components/molecules/postCard";
import { postType } from "@/constants/types";
import axios from "axios";
import { useState } from "react";

const title = "Merhaba, Dünya!";

const Home = () => {
	const [text, setText] = useState<string | number | undefined>("");

	return (
		<>
			<Input
				blue
				containerClass="p-[100px]"
				value={text}
				setValue={setText}
				borderFull
				label="Kullanıcı Adı"
				sm
				placeholder="Kullanıcı adınızı giriniz"
				security
			/>
		</>
	);
};

export default Home;
