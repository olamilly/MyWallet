import { BarChart, CreditCard, Home, User } from "lucide-react";
import Scan from "./ScanIcon";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="w-full fixed z-3 bottom-0 bg-white">
			<div className="border-t border-gray-200">
				<div className="flex justify-around items-center pt-1 px-4">
					{[
						{ route: "/", icon: <Home /> },
						{ route: "/statistics", icon: <BarChart /> },
						{ route: "", icon: <Scan /> },
						{ route: "/cards", icon: <CreditCard /> },
						{ route: "/profile", icon: <User /> },
					].map((navItem, index) =>
						navItem.route ? (
							<NavLink
								to={navItem.route}
								key={index}
								className={({ isActive }) =>
									!isActive
										? "p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer rounded-full flex items-center justify-center"
										: "p-2 rounded hover:bg-blue-300 transition-colors cursor-pointer bg-blue-100 rounded-full flex items-center justify-center text-blue-700"
								}
							>
								{navItem.icon}
							</NavLink>
						) : (
							<NavLink key={index} to="/scan">
								<div className="p-2 rounded scale-125 cursor-pointer">
									{navItem.icon}
								</div>
							</NavLink>
						)
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
