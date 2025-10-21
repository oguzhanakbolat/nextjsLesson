import { postType } from "@/constants/types";
import { FC, useEffect, useState } from "react";
import Title from "@/components/atoms/title";

const PostCard: FC<postType> = ({ id, title, body, size = 1 }) => {
	const [h, setH] = useState<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">(
		null as any
	);

	useEffect(() => {
		const newNumber = size || 1;
		const newSize = ("h" + ((newNumber % 6) + 1)) as
			| "h1"
			| "h2"
			| "h3"
			| "h4"
			| "h5"
			| "h6";
		setH(newSize);
	}, [size]);

	return (
		<div className="p-4 bg-amber-500 my-2">
			<Title size={h} text={`${id} - ${title}`} />
			<p>{body}</p>
		</div>
	);
};

export default PostCard;
