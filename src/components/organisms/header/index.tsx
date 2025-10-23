import React, { FC } from "react";

import style from "./style.module.css";

type Props = {
	title: string;
	description: string;
};

const Header: FC<Props> = ({ title, description }) => (
	<div className={style.container}>
		<h2 className={style.title}>{title}</h2>
		<p className={style.description}>{description}</p>
	</div>
);

export default Header;
