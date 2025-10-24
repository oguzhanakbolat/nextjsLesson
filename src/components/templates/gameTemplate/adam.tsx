import React, { FC } from "react";

type adamType = {
	color: string;
	size: number;
};

const Adam: FC<adamType> = ({ size, color }) => {
	return (
		<div>
			<svg
				width={size}
				height={size}
				viewBox="0 0 1205 1205"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="640"
					cy="460.5"
					r="46.5"
					stroke={color}
					strokeWidth="15"
				/>
				<path d="M640 508V821.5" stroke={color} strokeWidth="15" />
				<path d="M572 780L641 536" stroke={color} strokeWidth="15" />
				<path d="M709 781L640 537" stroke={color} strokeWidth="15" />
				<path
					d="M572 1046.5L641 807.5"
					stroke={color}
					strokeWidth="15"
				/>
				<path
					d="M709 1047.5L640 808.5"
					stroke={color}
					strokeWidth="15"
				/>
				<path d="M196.5 2V1200" stroke={color} strokeWidth="25" />
				<path d="M0 1200.5H1200" stroke={color} strokeWidth="25" />
				<path d="M691 12.5H184" stroke={color} strokeWidth="25" />
				<path d="M635 3.5V409" stroke={color} strokeWidth="10" />
			</svg>
		</div>
	);
};

export default Adam;
