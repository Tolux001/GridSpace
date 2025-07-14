"use client";

import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import {
	ArrowRight,
	CalendarDays,
	CheckCircle2,
	LocationEdit,
	Search,
	ShieldCheck,
	Wallet,
	BookText,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [showCalendar, setShowCalendar] = useState(false);
	const LightningIcon = () => (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-zap text-white">
			<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
		</svg>
	);

	return (
		<>
			<Navbar />
			<main>
				<section className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-4 px-4 md:px-12 py-8">
					<div>
						<div>
							<h1 className="text-3xl md:text-6xl font-bold text-[#002F5B]">
								Find a flexible{" "}
								<span className="text-[#F25417]">workspace</span> near you
							</h1>
							<p className="text-[#121212] text-[16px] leading-[20px] md:text-[20px] md:leading-[30px] mt-5">
								Discover verified, flexible workspaces with reliable power,
								high-speed internet, and everything you need to stay productive
								on the go.
							</p>
						</div>
						<div className="flex justify-between items-center gap-2 mt-6 md:mt-12 bg-white shadow py-6 px-2 md:px-4 rounded-lg">
							<span className="min-w-28 md:w-50 flex items-center border border-[rgb(0,47,91)] rounded-lg gap-2 px-3 py-2">
								<LocationEdit className="text-gray-500" />

								<input
									type="text"
									placeholder="Enter location or city..."
									className="w-full p-2 border-none hover:border-none focus:outline-none text-[#A3A3A3] text-[14px] leading-[100%]"
								/>
							</span>
							<span className="min-w-28 md:w-50 flex items-center border border-[rgb(0,47,91)] rounded-lg gap-2 px-3 py-2">
								<CalendarDays
									className="text-gray-500 cursor-pointer"
									onClick={() => setShowCalendar(!showCalendar)}
								/>
								{showCalendar && (
									<div className="relative">
										<DatePicker
											selected={startDate}
											onChange={(date: Date | null) => setStartDate(date)}
											readOnly
											onClickOutside={() => setShowCalendar(false)}
											inline
											className="absolute z-10"
										/>
									</div>
								)}
								<input
									type="text"
									placeholder="dd/mm/yy"
									value={startDate ? startDate.toLocaleDateString() : ""}
									className="w-full p-2 border-none hover:border-none focus:outline-none text-[#A3A3A3] text-[14px] leading-[100%]"
								/>
							</span>
							<button className="bg-[#F25417] font-bold text-white p-2 md:px-3 md:py-4 rounded-lg hover:bg-orange-700 transition md:ml-8 cursor-pointer">
								Find a Space
								<ArrowRight className="inline-block ml-2" />
							</button>
						</div>
						<div className="flex items-center justify-between gap-4 sm:gap-8 mt-6 md:mt-18">
							<span className="flex items-center gap-2">
								<Image
									src="/User.svg?height=70&width=70"
									alt="User Icon"
									width={70}
									height={70}
									className="object-cover max-w-[35px] max-h-[35px] md:max-w-[70px] md:max-h-[70px]"
								/>
								<span>
									<h2 className="text-[#002F5B] font-bold text-xl md:text-3xl">
										50K+
									</h2>
									<p className="text-[#9B9B9B] text-xs md:text-base">
										Active Users
									</p>
								</span>
							</span>
							<span className="flex items-center gap-2">
								<Image
									src="/location.svg?height=70&width=70"
									alt="Location Icon"
									width={70}
									height={70}
									className="object-cover max-w-[35px] max-h-[35px] md:max-w-[70px] md:max-h-[70px]"
								/>
								<span>
									<h2 className="text-[#002F5B] font-bold text-xl md:text-3xl">
										1200+
									</h2>
									<p className="text-[#9B9B9B] text-xs md:text-base">
										Locations
									</p>
								</span>
							</span>
							<span className="flex items-center gap-2">
								<Image
									src="/rating.svg?height=70&width=70"
									alt="Rating Icon"
									width={70}
									height={70}
									className="object-cover max-w-[35px] max-h-[35px] md:max-w-[70px] md:max-h-[70px]"
								/>
								<span>
									<h2 className="text-[#002F5B] font-bold text-xl md:text-3xl">
										4.9/5
									</h2>
									<p className="text-[#9B9B9B] text-xs md:text-base">Rating</p>
								</span>
							</span>
						</div>
					</div>
					<div className="relative">
						<div className="bg-[#D6EBFF] w-30 h-30 z-0 absolute bottom-[-20px] left-[-10px]"></div>
						<Image
							src="/hero-section.png"
							alt="Hero Image"
							width={593}
							height={611}
							className="object-cover max-w-[320px] max-h-[386px] md:max-w-[593px] md:max-h-[611px] rounded-lg relative z-2"
						/>
					</div>
				</section>
				<section className="min-h-screen px-4 md:px-12 py-16">
					<div className="flex flex-col items-center text-center">
						<h1 className="text-[#002F5B] font-bold text-[20px] md:text-3xl">
							How GridSpace Works
						</h1>
						<p className="text-[#121212] text-base md:text-xl my-4 mb-10">
							Get access to productive workspaces in just three simple steps
						</p>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="bg-white px-4 md:px-8 pt-20 pb-12 flex flex-col items-center text-center relative">
							<div className="bg-[#002F5B] p-2 md:p-4 rounded-full absolute top-[-20px]">
								<Search className="text-white" />
							</div>
							<div className="text-[#121212]">
								<h2 className="font-bold text-base md:text-2xl">
									Search & Discover
								</h2>
								<p className="text-sm md:text-lg mt-4 max-w-[350px]">
									Browse verified workspaces in your area with detailed photos,
									amenities and real time availability
								</p>
							</div>
						</div>
						<div className="bg-white px-4 pt-20 pb-12 flex flex-col items-center text-center relative">
							<div className="bg-[#F25417] p-2 md:p-4 rounded-full absolute top-[-20px]">
								<CheckCircle2 className="text-white" />
							</div>
							<div className="text-[#121212]">
								<h2 className="font-bold text-base md:text-2xl">
									Book Instantly
								</h2>
								<p className="text-sm md:text-lg mt-4 max-w-[350px]">
									Reserve your perfect workspace instantly with secure payment
									and flexible booking options
								</p>
							</div>
						</div>
						<div className="bg-white px-4 pt-20 pb-12 flex flex-col items-center text-center relative">
							<div className="bg-[#002F5B] p-2 md:p-4 rounded-full absolute top-[-20px]">
								{LightningIcon()}
							</div>
							<div className="text-[#121212]">
								<h2 className="font-bold text-base md:text-2xl">
									Work Productively
								</h2>
								<p className="text-sm md:text-lg mt-4 max-w-[350px]">
									Arrive and get productive immediately with reliable power,
									fast WiFi and all essential amenities
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="min-h-[80vh] px-4 md:px-12 py-16">
					<WhyChooseGridSpace />
				</section>
				<section className="bg-[#FFC3AC] px-4 md:px-12 py-16">
					<Testimonials />
				</section>
				<section className="bg-[#FFF3EE] px-4 md:px-12 pt-16 pb-8">
					<CallToAction />
				</section>
				<section className="px-4 md:px-12 py-8 relative z-2">
					<Subscribe />
				</section>
			</main>
			<Footer />
		</>
	);
}

// WhyChooseGridSpace

const features = [
	{
		title: "Reliable Power & Internet",
		description:
			"Never worry about connectivity with guaranteed backup power and high-speed internet at every location.",
		icon: (
			<Image
				src="/bulb.svg?height=30&width=30"
				alt="Location Icon"
				width={30}
				height={30}
				className="object-cover"
			/>
		),
		color: "bg-[#D4FCE0]",
	},
	{
		title: "Verified & Secure",
		description:
			"Every workspace is thoroughly vetted and verified to ensure quality, safety, and professionalism.",
		icon: <ShieldCheck className="h-6 w-6 text-white" />,
		active: true,
		color: "bg-[#F25417]",
	},
	{
		title: "Affordable Rates",
		description:
			"Get access to quality workspaces that suit your budget, whether you’re booking for a day or a month.",
		icon: <Wallet className="h-6 w-6 text-[#A855F7]" />,
		color: "bg-[#FAF5FF]",
	},
	{
		title: "Flexible Booking",
		description:
			"Book by the hour, day, or month with easy cancellation and modification options.",
		icon: <BookText className="h-6 w-6 text-sky-500" />,
		color: "bg-[#D7F7FB]",
	},
];

function WhyChooseGridSpace() {
	return (
		<div>
			<h2 className="text-xl md:text-3xl text-[#002F5B] font-bold text-center mb-2">
				Why Choose <span className="text-orange-600">GridSpace</span>
			</h2>
			<p className="text-center text-base md:text-xl text-[#121212] mb-8">
				Experience the difference with our commitment to quality and reliability
			</p>

			<div className="grid md:grid-cols-2 gap-4">
				{features.map((feature, idx) => (
					<div
						key={idx}
						className={`flex flex-col items-center text-center gap-3 p-5 md:p-10 rounded-lg shadow ${
							feature.active
								? "bg-[#002F5B] text-white"
								: "bg-white text-[#121212]"
						}`}>
						<div className={`${feature.color} p-2 md:p-4 rounded-full`}>
							{feature.icon}
						</div>
						<div>
							<h3 className={`font-bold text-base md:text-2xl`}>
								{feature.title}
							</h3>
							<p className="text-sm md:text-xl">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

// Testimonials
type Testimonial = {
	img: React.ReactNode;
	name: string;
	role: string;
	message: string;
};

const testimonials: Testimonial[] = [
	{
		img: (
			<Image
				src="/person1.png?height=60&width=60"
				alt="Location Icon"
				width={60}
				height={60}
				className="object-cover rounded-full"
			/>
		),
		name: "John Morgan",
		role: "Marketing Consultant",
		message:
			"Gridspace saved my business trip! Found a perfect workspace with reliable internet in minutes. The booking process was seamless.",
	},
	{
		img: (
			<Image
				src="/person2.png?height=60&width=60"
				alt="Location Icon"
				width={60}
				height={60}
				className="object-cover rounded-full"
			/>
		),
		name: "Jessica Wright",
		role: "Freelance Designer",
		message:
			"As a freelancer, I need flexible workspaces. Gridspace’s variety and quality are unmatched. Plus, the rates are very reasonable",
	},
	{
		img: (
			<Image
				src="/person3.png?height=60&width=60"
				alt="Location Icon"
				width={60}
				height={60}
				className="object-cover rounded-full"
			/>
		),
		name: "Derek Woods",
		role: "Product Manager",
		message:
			"The verification process gives me confidence. Every space I’ve booked has been exactly as described. Excellent platform",
	},
];

function Testimonials() {
	return (
		<div>
			<h2 className="text-xl md:text-3xl font-bold text-center text-[#002F5B] mb-2">
				What Our Users Say
			</h2>
			<p className="text-center text-[#121212] mb-4">
				Join thousands of professionals who trust Gridspace for their workspace
				needs
			</p>

			<div className="grid md:grid-cols-3 gap-6">
				{testimonials.map((t, i) => (
					<div
						key={i}
						className="bg-white p-6 rounded-lg shadow text-sm flex flex-col gap-2">
						<div className="flex items-center gap-3">
							<div>{t.img}</div>
							<div>
								<p className="font-semibold text-black">{t.name}</p>
								<p className="text-[#848383] text-xs">{t.role}</p>
							</div>
						</div>
						<p className="text-[#2E2E2E]">“{t.message}”</p>
						<div className="text-orange-500 text-xs mt-auto">★★★★★</div>
					</div>
				))}
			</div>
		</div>
	);
}

// CallToAction
function CallToAction() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
			<div>
				<h2 className="text-xl md:text-3xl font-bold mb-2 text-[#002F5B]">
					Ready to Find Your Perfect Workspace?
				</h2>
				<p className="text-gray-700 mb-5">
					Join thousands of professionals who trust Gridspace for their
					workspace needs
				</p>
				<button className="bg-[#F25417] text-white px-6 py-4 rounded-lg hover:bg-orange-700">
					Start Searching
				</button>
			</div>
			<div className="relative z-1">
				<Image
					src="/workspace.png"
					alt="Workspace"
					width={540}
					height={400}
					className="object-cover rounded-md max-w-[320px] max-h-[320px] lg:max-w-[540px] lg:max-h-[400px]"
				/>
			</div>
			<div className="bg-[#002F5B] rounded-full w-70 h-70 absolute bottom-[-60px] right-[-40px] z-0"></div>
		</div>
	);
}

// Subscribe
function Subscribe() {
	return (
		<section className="text-center">
			<h2 className="text-xl md:text-3xl font-bold text-[#002F5B] mb-2">
				Join the Grid
			</h2>
			<p className="text-gray-600 mb-6">
				Get workspace tips, updates, and exclusive offers <br /> straight to
				your inbox.
			</p>
			<form className="relative w-full max-w-2xl mx-auto">
				<input
					type="email"
					placeholder="Enter your email"
					className="px-2 py-4 border-2 border-[#F25417] rounded-lg w-full md:w-2xl relative text-neutral-950 focus:outline-none focus:border-orange-500"
				/>
				<button
					type="submit"
					className="bg-[#F25417] text-white px-4 py-2 rounded hover:bg-orange-700 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
					Subscribe Now
				</button>
			</form>
		</section>
	);
}
