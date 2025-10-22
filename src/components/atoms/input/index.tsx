"use client";

import EyeIcon from "@/constants/icons/eye";
import classNames from "classnames";
import React, { FC, useState } from "react";

type InputProps = {
	red?: boolean;
	blue?: boolean;
	green?: boolean;
	containerClass?: string;
	value: string | number | undefined;
	setValue: (newValue: string | number) => void;
	borderFull?: boolean;
	borderBottom?: boolean;
	label?: string;
	sm?: boolean;
	md?: boolean;
	lg?: boolean;
	placeholder?: string;
	security?: boolean;
};

const Input: FC<InputProps> = ({
	red,
	blue,
	green,
	containerClass,
	value,
	borderBottom,
	borderFull,
	label,
	sm,
	md,
	lg,
	placeholder,
	security,
	setValue,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const classes = classNames(
		"flex flex-col gap-2 p-4",
		{
			"bg-[red]": red,
			"bg-[blue]": blue,
			"bg-[green]": green,
		},
		containerClass
	);

	const inputClasses = classNames("border-[#ddd] py-2 outline-none w-full", {
		"border-b": borderBottom,
		"border  px-4": borderFull,
		"text-[14px] h-[36px] py-1": sm,
		"text-[16px] h-[40px] py-2": md,
		"text-[18px] h-[44px] py-3": lg,
	});

	const labelClasses = classNames("flex text-white", {
		"text-[14px]": sm,
		"text-[16px]": md,
		"text-[18px]": lg,
	});

	console.log("Input:", showPassword);

	return (
		<label className={classes}>
			{label && <div className={labelClasses}>{label}</div>}

			<div className="relative">
				<input
					className={inputClasses}
					type={security && !showPassword ? "password" : "text"}
					value={value}
					placeholder={placeholder || label || ""}
					onChange={(e) => setValue(e.target.value)}
				/>
				{security && (
					<EyeIcon
						color="white"
						size={36}
						svgClasses="absolute bottom-0 right-2 cursor-pointer"
						onClick={() => setShowPassword(!showPassword)}
					/>
				)}
			</div>
		</label>
	);
};

export default Input;
