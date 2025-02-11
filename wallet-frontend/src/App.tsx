import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const HomePage = React.lazy(() => import("./views/Dashboard"));
const StatisticsPage = React.lazy(() => import("./views/Statistics"));
const CardsPage = React.lazy(() => import("./views/Cards"));
const ProfilePage = React.lazy(() => import("./views/Profile"));
const ScanPage = React.lazy(() => import("./views/Scan"));
const NotFound = React.lazy(() => import("./views/NotFound"));
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
function App() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/statistics" element={<StatisticsPage />} />
						<Route path="/cards" element={<CardsPage />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/scan" element={<ScanPage />} />
						{/* Catch-all route for 404 pages */}
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Navbar />
				</Router>
			</Suspense>
		</>
	);
}

export default App;
