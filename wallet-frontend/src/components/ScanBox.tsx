// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner, Html5QrcodeCameraScanConfig } from "html5-qrcode";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
interface Html5QrcodePluginProps {
	fps?: number;
	qrbox?: number | { width: number; height: number };
	aspectRatio?: number;
	disableFlip?: boolean;
	verbose?: boolean;
	qrCodeSuccessCallback?: (decodedText: string, decodedResult: any) => void;
	qrCodeErrorCallback?: (errorMessage: string) => void;
}

const createConfig = (
	props: Html5QrcodePluginProps
): Html5QrcodeCameraScanConfig => {
	let config: Html5QrcodeCameraScanConfig = { fps: props.fps || 10 }; // default fps to 10 if not provided
	if (props.fps) {
		config.fps = props.fps;
	}
	if (props.qrbox) {
		config.qrbox = props.qrbox;
	}
	if (props.aspectRatio) {
		config.aspectRatio = props.aspectRatio;
	}
	if (props.disableFlip !== undefined) {
		config.disableFlip = props.disableFlip;
	}
	return config;
};

const Html5QrcodePlugin = (props: Html5QrcodePluginProps) => {
	const [scanner, setScanner] = useState<Html5QrcodeScanner>();
	useEffect(() => {
		// when component mounts
		const config = createConfig(props);
		const verbose = props.verbose === true;

		const html5QrcodeScanner = new Html5QrcodeScanner(
			qrcodeRegionId,
			config,
			verbose
		);
		setScanner(html5QrcodeScanner);
		const onNewScanResult = (decodedText: string) => {
			// console.log(decodedText);
			(
				document.querySelector(
					"#html5-qrcode-button-camera-stop"
				) as HTMLElement
			)?.click();
			html5QrcodeScanner.clear();
			document.querySelector(".the-link")?.classList.toggle("hidden");
			const textElement = document.querySelector(".the-link");
			if (textElement) {
				textElement.innerHTML = decodedText;
			}
		};
		html5QrcodeScanner.render(onNewScanResult, props.qrCodeErrorCallback);

		// cleanup function when component will unmount
		return () => {
			html5QrcodeScanner.clear().catch((error) => {
				console.error("Failed to clear html5QrcodeScanner. ", error);
			});
		};
	}, []);
	const navigate = useNavigate();
	const stopScanner = () => {
		if (scanner) {
			// scanner.clear(); // Stop scanning and release the camera
			(
				document.querySelector(
					"#html5-qrcode-button-camera-stop"
				) as HTMLElement
			)?.click();
			navigate("/");
		}
	};

	return (
		<div className="flex flex-col w-full items-center justify-center w-full">
			{/* Header */}
			<header className="flex flex-col items-center w-full mt-4">
				<button
					onClick={stopScanner}
					className=" self-start py-2 px-1 hover:bg-gray-100 rounded-full transition-colors"
					aria-label="Go back"
				>
					<ChevronLeft size={42} />
				</button>

				<div>
					<h1 className="text-xl text font-semibold">Scan QR Code</h1>
				</div>
			</header>
			<div>
				<p className="the-link text-wrap text-center py-[3rem] hidden"></p>
			</div>

			<div id={qrcodeRegionId} />
		</div>
	);
};

export default Html5QrcodePlugin;
