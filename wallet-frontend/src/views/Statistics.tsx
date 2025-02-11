import { ChevronLeft } from "lucide-react";
import Header from "../components/Header";

import { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Legend,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import DownloadIcon from "../components/DownloadIcon";
import { Link } from "react-router-dom";
import DownBgIcon from "../components/DownBgIcon";
import UploadIcon from "../components/UploadIcon";
import UpBgIcon from "../components/UpBgIcon";

// import { ArrowLeft, ArrowUpRight, ArrowDownRight, Home, CreditCard, User } from "lucide-react"

function Statistics() {
	const [selectedPeriod, setSelectedPeriod] = useState("month");
	const data =
		selectedPeriod == "week"
			? [
					{ month: "Week 1", income: 3000, expenses: 6000 },
					{ month: "Week 2", income: 3500, expenses: 6200 },
					{ month: "Week 3", income: 2500, expenses: 8500 },
					{ month: "Week 4", income: 6300, expenses: 7000 },
					{ month: "Week 5", income: 9000, expenses: 2500 },
					{ month: "Week 6", income: 7500, expenses: 8100 },
					{ month: "Week 7", income: 9000, expenses: 2500 },
					{ month: "Week 8", income: 6500, expenses: 7650 },
			  ]
			: [
					{ month: "Jan", income: 300000, expenses: 2500000 },
					{ month: "Feb", income: 3500000, expenses: 2769000 },
					{ month: "Mar", income: 200000, expenses: 1789000 },
					{ month: "Apr", income: 1630000, expenses: 2007000 },
					{ month: "May", income: 1297838, expenses: 283943 },
					{ month: "Jun", income: 2890983, expenses: 1908766 },
					{ month: "Jul", income: 1928393, expenses: 2102300 },
					{ month: "Aug", income: 1903301, expenses: 3201011 },
					{ month: "Sep", income: 312900, expenses: 1372100 },
					{ month: "Oct", income: 3500000, expenses: 2769000 },
					{ month: "Nov", income: 2890983, expenses: 1908766 },
					{ month: "Dec", income: 3400000, expenses: 4098300 },
			  ];
	return (
		<div className="flex w-full flex-col items-center justify-between min-h-screen">
			<Header />
			<div className="w-full">
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
						<h1 className="text-xl text font-semibold">Statistics</h1>
					</div>
				</header>
				<p className="px-4 my-4 text-sm text-gray-500">
					Breakdown of transactions across all linked accounts
				</p>
				{/* Main Content */}
				<main className="flex-1 p-4 gap-5">
					{/* Total Balance */}
					<div className="space-y-1">
						<p className="text-sm text-gray-500">Total Balance</p>
						<h2 className="text-2xl font-bold">₦2,380,000</h2>
					</div>

					{/* Overview Section */}
					<div className="flex items-center justify-between">
						<h3 className="font-semibold">Overview</h3>
						<select
							value={selectedPeriod}
							onChange={(e) => setSelectedPeriod(e.target.value)}
							className="px-3 py-1.5 bg-white border cursor-pointer rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="month">Month</option>
							<option value="week">Week</option>
						</select>
					</div>

					{/* Chart */}
					<div className="h-[200px] w-full">
						<ResponsiveContainer width="100%" height="100%">
							<BarChart
								data={data}
								margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
							>
								<CartesianGrid strokeDasharray="3 3" vertical={false} />
								<XAxis
									dataKey="month"
									axisLine={false}
									tickLine={false}
									fontSize={12}
									tickMargin={8}
								/>
								<YAxis
									axisLine={false}
									tickLine={false}
									fontSize={12}
									tickMargin={8}
								/>
								<Tooltip />
								<Legend />
								<Bar
									dataKey="income"
									fill="#6366f1"
									radius={[4, 4, 0, 0]}
									barSize={20}
								/>
								<Bar
									dataKey="expenses"
									fill="#fb923c"
									radius={[4, 4, 0, 0]}
									barSize={20}
								/>
							</BarChart>
						</ResponsiveContainer>
						{/* <Legend /> */}
					</div>

					{/* Stats Cards */}
					<h2 className="mt-7 mb-3">January Expenditure</h2>
					<div className="grid grid-cols-2 gap-4 mb-[7rem]">
						<div className="p-4 rounded-2xl inbox shadow-md overflow-hidden relative">
							<div>
								<DownloadIcon />
							</div>
							<div className="text-start mt-8 z-2 relative">
								<span className="text-sm opacity-80">Income</span>
								<h3 className="text-xl font-semibold">₦2,500,000</h3>
							</div>
							<DownBgIcon />
						</div>
						<div className="p-4 rounded-2xl outbox shadow-md overflow-hidden relative">
							<div>
								<UploadIcon />
							</div>
							<div className="text-start mt-8 z-2 relative">
								<span className="text-sm opacity-80">Expenses</span>
								<h3 className="text-xl font-semibold">₦1,987,350</h3>
							</div>
							<UpBgIcon />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Statistics;
