import { ReactNode } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="bg-[blue] p-4">
			<div>Article Layout</div>
			{children}
		</div>
	);
}
