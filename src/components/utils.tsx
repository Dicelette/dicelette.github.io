export function CL({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
	return (
		<span
			style={{
				textDecoration: "underline",
				fontWeight: "bold",
				...(props.style || {}),
			}}
			{...props}
		>
			{children}
		</span>
	);
}
