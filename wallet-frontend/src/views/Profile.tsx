import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Camera, ChevronLeft, X } from "lucide-react";
import MastercardIcon from "../components/MastercardIcon";
import VisaIcon from "../components/VisaIcon";
import { useState, ReactNode } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}
function Modal({ isOpen, onClose, children }: ModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-[#d3d3d3ba] flex items-center justify-center z-50">
			<div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
				<div className="flex justify-between items-center mb-4">
					<h2>QR code</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700"
					>
						<X className="w-6 h-6" />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
}
function Profile() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className="flex w-full flex-col items-center justify-center min-h-screen">
			<Header />
			<div className="w-full">
				<header className="flex flex-col items-center mb-8">
					<Link to="/" className="self-start">
						<button
							className="py-2 px-1 hover:bg-gray-100 rounded-full transition-colors"
							aria-label="Go back"
						>
							<ChevronLeft size={32} />
						</button>
					</Link>

					<div>
						<h1 className="text-xl text font-semibold">Profile</h1>
					</div>
				</header>

				{/* Main Content */}
				<div className="flex-1 px-6">
					<div className="relative w-48 h-48 mx-auto mb-6">
						<div className="w-full h-full qr rounded-lg flex items-center justify-center border-4 border-[#2f66f6]"></div>
						{/* Profile Image Overlay */}
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2f66f6]">
								<img
									src="/smallerOlamide.jpg"
									alt="Profile Picture"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>

					{/* User Details */}
					<div className="text-center mb-8">
						<h1 className="text-2xl font-semibold mb-1">Mustapha Olamide</h1>
						<p className="text-gray-500 text-sm">UID: 8194638720</p>
					</div>

					{/* Linked Cards */}
					<p className="text-sm text-gray-500 text-center mb-4">
						All your linked Cards
					</p>
					<div className="w-full flex flex-col items-center justify-center mb-8 gap-4">
						<div className="bg-white p-4 rounded-lg shadow-sm w-[60%] min-w-[270px]">
							<div className="flex items-center justify-between flex-wrap gap-3">
								<MastercardIcon />
								<h2 className="flex-1">Mastercard</h2>
								<span>**** **** **** 3007</span>
							</div>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-sm w-[60%] min-w-[270px]">
							<div className="flex items-center justify-between flex-wrap gap-3">
								<VisaIcon />
								<h2 className="flex-1">Visa</h2>
								<span>**** **** **** 2209</span>
							</div>
						</div>
					</div>

					{/* Show QR Code Button */}
					<button
						onClick={() => setIsModalOpen(true)}
						className="bg-[#4F6EF7] hover:bg-[#4F6EF7]/90 text-white rounded-lg py-6 transition-colors duration-200 mb-[7rem]"
					>
						Show QR code
					</button>

					{/* Modal */}
					<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
						<div className="text-center">
							<div className="w-48 h-48 mx-auto bg-[#4F6EF7] rounded-lg flex items-center justify-center mb-4">
								<div className="p-2 bg-white">
									<div className="w-36 h-36 qr" />
								</div>
							</div>
							<div className="text-center mb-3">
								<h2 className="text-2xl font-semibold mb-1">
									Mustapha Olamide
								</h2>
								<p className="text-gray-500 text-sm">UID: 8194638720</p>
							</div>

							<p className="text-sm text-gray-600 mb-8">
								scan this QR code to send me money.
							</p>
							<div className="w-full flex items-center justify-center">
								<Link to="/scan">
									<button className="flex items-center justify-center gap-4 w-50 border-2 rounded-md text-[#4F6EF7] border-[#4F6EF7]">
										<Camera /> <span>Scan QR Code</span>
									</button>
								</Link>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default Profile;
