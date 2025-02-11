import Header from "./Header";

function Loader() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Header />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="mr-2 h-20 w-20 animate-spin text-[#2f66f6]"
			>
				<path d="M21 12a9 9 0 1 1-6.219-8.56" />
			</svg>
		</div>
	);
}

export default Loader;
