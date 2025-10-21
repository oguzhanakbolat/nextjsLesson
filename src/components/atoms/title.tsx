import React, { FC, Fragment } from "react";

type PropsTypes = {
	size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	color?: "primary" | "secondary" | "tertiary";
	text: string;
	underline?: boolean;
};

const Title: FC<PropsTypes> = ({
	size = "h1",
	color = "primary",
	text,
	underline = false,
}) => {
	return (
		<>
			{size === "h1" ? (
				<h1 className="text-[24px] border-b border-b-red-500">
					{text}
				</h1>
			) : size === "h2" ? (
				<h2 className="text-[22px] border-b border-b-red-500">
					{text}
				</h2>
			) : size === "h3" ? (
				<h3 className="text-[20px] border-b border-b-red-500">
					{text}
				</h3>
			) : size === "h4" ? (
				<h4 className="text-[18px] border-b border-b-red-500">
					{text}
				</h4>
			) : size === "h5" ? (
				<h5 className="text-[16px] border-b border-b-red-500">
					{text}
				</h5>
			) : (
				<h6 className="text-[14px] border-b border-b-red-500">
					{text}
				</h6>
			)}
		</>
	);
};

export default Title;
