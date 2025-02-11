import { X } from "lucide-react";
import Html5QrcodePlugin from "../components/ScanBox";
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
					<h2>Send By UID</h2>
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

const QRScanner = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className="min-h-screen w-full">
			<Html5QrcodePlugin
				fps={10}
				qrbox={{ width: 500, height: 500 }}
				disableFlip={false}
			/>
			<button
				onClick={() => setIsModalOpen(true)}
				className="px-6 mt-2 py-2 bg-[#2f66f6] text-white mb-[10rem] rounded-lg hover:bg-blue-600 transition-colors"
			>
				Add Manually
			</button>
			{/* <div className="mb-[10rem]"></div> */}
			{/* Modal */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<div className="text-center">
					<div className="flex gap-2 justify-center items-center mb-3">
						<p className="text-gray-500 text-sm">UID:</p>
						<input className="px-3 py-1.5 bg-white border cursor-pointer rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
					</div>

					<button className=" p-1 border-2 rounded-md text-[#4F6EF7] border-[#4F6EF7]">
						Search
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default QRScanner;
