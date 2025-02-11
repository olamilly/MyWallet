import {
	ArrowUpDown,
	ChevronRight,
	Eye,
	EyeClosed,
	PiggyBank,
	SquarePlus,
} from "lucide-react";
import Header from "../components/Header";
import { useState } from "react";
import CarIcon from "../components/CarIcon";
import ComputerIcon from "../components/ComputerIcon";
import HouseIcon from "../components/HouseIcon";
import MastercardLogo from "../components/MastercardLogo";
import VisaLogo from "../components/VisaLogo";
import { Link } from "react-router-dom";

function Dashboard() {
	const [show, setShow] = useState<boolean>(false);
	return (
		<div className="flex w-full flex-col items-center h-screen">
			<Header />
			<div className="flex-col w-full ">
				<header className="p-4">
					<div className="text-sm text-gray-500">Total Balance</div>
					<div className="flex items-center justify-center gap-3">
						<p className="text-5xl ">{show ? "₦2,380,000" : "******"}</p>
						{!show ? (
							<Eye
								className="cursor-pointer"
								onClick={() => {
									setShow(!show);
								}}
							/>
						) : (
							<EyeClosed
								className="cursor-pointer"
								onClick={() => {
									setShow(!show);
								}}
							/>
						)}
					</div>
				</header>
				{/* Cards */}
				<div className="p-2">
					<Link to="/cards">
						<div className="w-full  relative overflow-hidden rounded-xl shadow-lg atm1 mb-3">
							<div className="px-6 pt-6">
								<div className="space-y-6 text-start">
									<h4 className="text-2xl tracking-[0.2em] font-mono">
										{show ? "2136 9596 7812 2209" : "XXXX XXXX XXXX XXXX"}
									</h4>
									<div className="text-lg">Mustapha Olamide</div>
								</div>
							</div>

							<div className="w-full flex justify-between p-6">
								<p>Valid Thru: {show ? "07/25" : "XX/XX"}</p>
								<div className="">
									<MastercardLogo />
								</div>
							</div>
						</div>
					</Link>
					<Link to="/cards">
						<div className="w-full  relative overflow-hidden rounded-xl shadow-lg atm2">
							<div className="px-6 pt-6">
								<div className="space-y-6 text-start">
									<h4 className="text-2xl tracking-[0.2em] font-mono">
										{show ? "9036 8596 2312 3007" : "XXXX XXXX XXXX XXXX"}
									</h4>
									<div className="text-lg">Mustapha Olamide</div>
								</div>
							</div>
							<div className="w-full flex justify-between p-6">
								<p>Valid Thru: {show ? "11/27" : "XX/XX"}</p>
								<div>
									<VisaLogo />
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="flex gap-2 p-4 flex-wrap">
					{["Add money", "Transfer", "Budget"].map((text, index) => (
						<button
							key={text}
							className="flex-1 bg-[#2f66f6] hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
						>
							{index === 0 && <SquarePlus />}
							{index === 1 && <ArrowUpDown />}
							{index === 2 && <PiggyBank />}
							{text}
						</button>
					))}
				</div>

				<div className="flex-1 px-4 overflow-auto">
					<div className="flex justify-between items-center mb-4">
						<h2 className="font-medium">Recent activities</h2>
						<button className="text-sm text-[#2f66f6] hover:underline">
							View All
						</button>
					</div>

					<div className="space-y-3">
						{[
							{
								name: "Netflix Subscription",
								logo: "/netflix.svg",
								time: "05:28PM",
								type: "Payment Received",
								amount: "-NGN 6,500",
							},
							{
								name: "Amazon Subscription",
								logo: "/amazon.svg",
								time: "08:28PM",
								type: "Payment Received",
								amount: "-NGN 10,909",
							},
							{
								name: "Canva Subscription",
								logo: "/canva.svg",
								time: "11:30AM",
								type: "Payment Received",
								amount: "-NGN 5,899",
							},
						].map((activity) => (
							<div
								key={activity.name}
								className="p-4 bg-white rounded-lg bg-[#F9F9F9] shadow-md"
							>
								<div className="flex items-center gap-4">
									<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
										<img src={activity.logo} alt={activity.name} />
									</div>
									<div className="flex-1">
										<div className="font-medium">{activity.name}</div>
										<div className="text-sm text-gray-500">
											{activity.time} • {activity.type}
										</div>
									</div>
									<h2 className="text-red-500 font-bold">{activity.amount}</h2>
								</div>
							</div>
						))}
					</div>

					<div className="mt-6 mb-[10rem]">
						<div className="flex justify-between items-center mb-4">
							<h2 className="font-medium">My savings plans</h2>
							<button className="text-sm text-[#2f66f6] hover:underline">
								View All
							</button>
						</div>

						<div className="grid grid-cols-3 gap-4 mb-7">
							{[
								{
									name: "New House",
									icon: <HouseIcon />,
									amount: " ₦79,500,000",
								},
								{
									name: "New car",
									icon: <CarIcon />,
									amount: " ₦16,000,000",
								},
								{
									name: "New PC",
									icon: <ComputerIcon />,
									amount: " ₦899,000",
								},
							].map((plan) => (
								<div
									key={plan.name}
									className="p-4 rounded-lg bg-[#D3D0DB] shadow-md"
								>
									<div className="text-2xl text-start mb-2">{plan.icon}</div>
									<div className="font-medium text-start">{plan.name}</div>
									<div className="text-sm text-gray-500 text-start">
										{plan.amount}
									</div>
									<div className="flex justify-end">
										<div className="p-1 rounded-lg hover:bg-gray-400 cursor-pointer">
											<ChevronRight />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
