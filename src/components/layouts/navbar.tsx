"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full px-4 md:px-12 py-4 flex items-center justify-between">
			{/* Logo */}
			<Link href="/" className="text-2xl font-bold text-[#F25417]">
				GridSpace
			</Link>

			{/* Desktop Menu */}
			<div className="hidden md:flex items-center gap-44 !justify-between font-inter font-normal text-[14px] leading-none tracking-[0%] text-[#121212]">
				<div className="flex items-center space-x-12">
					<Link href="#">How it works</Link>
					<Link href="#">Host a Space</Link>
					<Link href="#">About</Link>
				</div>
				<div className="flex items-center">
					<Link
						href="#"
						className="px-3 py-4 bg-[#F25417] text-white rounded-lg hover:bg-orange-700 transition">
						Sign Up
					</Link>
				</div>
			</div>

			{/* Mobile Menu Icon */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden text-gray-700">
				<Menu className="h-6 w-6 cursor-pointer" />
			</button>

			{/* Mobile Menu Drawer */}
			{isOpen && (
				<div className="absolute top-16 left-0 w-full bg-white shadow-md px-4 py-6 flex flex-col space-y-4 text-sm font-medium text-gray-700 md:hidden z-50">
					<Link href="#">How it works</Link>
					<Link href="#">Host a Space</Link>
					<Link href="#">About</Link>
					<Link
						href="#"
						className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
						Sign Up
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	// Lock body scroll when menu is open
// 	useEffect(() => {
// 		if (isOpen) {
// 			document.body.style.overflow = "hidden";
// 		} else {
// 			document.body.style.overflow = "";
// 		}
// 		return () => {
// 			document.body.style.overflow = "";
// 		};
// 	}, [isOpen]);

// 	// Close menu on backdrop click
// 	const handleBackdropClick = () => setIsOpen(false);

// 	return (
// 		<>
// 			<nav className="w-full border-b border-gray-200 px-4 md:px-12 py-4 flex items-center justify-between bg-white z-50 relative">
// 				{/* Logo */}
// 				<Link href="/" className="text-2xl font-bold text-orange-600">
// 					GridSpace
// 				</Link>

// 				{/* Desktop Nav */}
// 				<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
// 					<Link href="#">How it works</Link>
// 					<Link href="#">Host a Space</Link>
// 					<Link href="#">About</Link>
// 					<Link
// 						href="#"
// 						className="ml-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
// 						Sign Up
// 					</Link>
// 				</div>

// 				{/* Toggle Icon */}
// 				<button
// 					onClick={() => setIsOpen(!isOpen)}
// 					className="md:hidden text-gray-700 z-50"
// 					aria-label="Toggle menu">
// 					{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// 				</button>
// 			</nav>

// 			{/* Backdrop */}
// 			{isOpen && (
// 				<div
// 					className="fixed inset-0 bg-black/50 z-40 md:hidden"
// 					onClick={handleBackdropClick}
// 				/>
// 			)}

// 			{/* Mobile Menu */}
// 			<div
// 				className={`fixed top-0 left-0 right-0 bg-white shadow-md px-4 py-6 z-50 md:hidden transition-all duration-300 ease-in-out transform ${
// 					isOpen
// 						? "translate-y-0 opacity-100"
// 						: "-translate-y-full opacity-0 pointer-events-none"
// 				}`}>
// 				<div className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
// 					<Link href="#" onClick={handleBackdropClick}>
// 						How it works
// 					</Link>
// 					<Link href="#" onClick={handleBackdropClick}>
// 						Host a Space
// 					</Link>
// 					<Link href="#" onClick={handleBackdropClick}>
// 						About
// 					</Link>
// 					<Link
// 						href="#"
// 						onClick={handleBackdropClick}
// 						className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
// 						Sign Up
// 					</Link>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Navbar;
