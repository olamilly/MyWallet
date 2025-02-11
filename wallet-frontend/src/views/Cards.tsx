import { ChevronLeft } from "lucide-react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AddIcon from "../components/AddIcon";
import MastercardLogo from "../components/MastercardLogo";
import VisaLogo from "../components/VisaLogo";

function Cards() {
	return (
		<div className="flex w-full flex-col items-center justify-between min-h-screen">
			<Header />
			<div className="w-full relative">
				<AddIcon />
				{/* Header */}
				<header className="flex flex-col items-center">
					<Link to="/" className="self-start">
						<button
							className="py-2 px-1 hover:bg-gray-100 rounded-full transition-colors"
							aria-label="Go back"
						>
							<ChevronLeft size={32} />
						</button>
					</Link>

					<div>
						<h1 className="text-xl text font-semibold">My Cards</h1>
					</div>
				</header>
				<p className="px-4 my-4 text-sm text-gray-500">
					Tap Card for more detailed information
				</p>
				{/* Cards Section */}
				<div className="space-y-4 p-2">
					<div className="w-full  relative overflow-hidden rounded-xl shadow-lg atm1 cursor-pointer">
						<div className="px-6 pt-6">
							<div className="space-y-6 text-start">
								<h4 className="text-2xl tracking-[0.2em] font-mono">
									2136 9596 7812 2209
								</h4>
								<div className="text-lg">Mustapha Olamide</div>
							</div>
						</div>
						<div className="w-full flex justify-between p-6">
							<p>Valid Thru: 07/25</p>
							{/* <div className="w-12 h-12 relative">
								<div className="absolute w-12 h-12 bg-[#EB001B] rounded-full opacity-80" />
								<div className="absolute w-12 h-12 bg-[#F79E1B] rounded-full -translate-x-1/2 opacity-80" />
							</div> */}
							<MastercardLogo />
						</div>
					</div>
					<div className="w-full  relative overflow-hidden rounded-xl shadow-lg atm2 cursor-pointer">
						<div className="px-6 pt-6">
							<div className="space-y-6 text-start">
								<h4 className="text-2xl tracking-[0.2em] font-mono">
									9036 8596 2312 3007
								</h4>
								<div className="text-lg">Mustapha Olamide</div>
							</div>
						</div>
						<div className="w-full flex justify-between p-6">
							<p>Valid Thru: 11/27</p>
							<VisaLogo />
						</div>
					</div>
				</div>
				{/* Activation Section */}
				<div className="p-4 mb-[7rem]">
					<div className="mb-2">
						<h2 className="font-medium">Received your card?</h2>
						<p className="text-sm text-gray-500">
							Tap the button to make sure your card is fully activated
						</p>
					</div>
					<button className="px-6 py-2 bg-[#2f66f6] text-white rounded-lg hover:bg-blue-600 transition-colors">
						Activate
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cards;
