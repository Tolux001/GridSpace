import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-[#002F5B] text-white pt-10 pb-4 px-4 md:px-12">
			<div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				<div className="space-y-2 max-w-[248px]">
					<h1 className="text-[40px] font-extrabold text-[#F25417]">
						GridSpaces
					</h1>
					<p>
						Connecting professionals with flexible, verifies workspaces across
						Nigeria.
					</p>
					<div>
						<div className="flex space-x-4 mt-4">
							<Link
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook">
								<Image
									src="/face.png?height=30&width=32"
									alt="Facebook"
									width={32}
									height={30}
									className="rounded-xl object-cover w-full h-auto"
								/>
							</Link>
							<Link
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram">
								<Image
									src="/insta.png?height=30&width=32"
									alt="Instagram"
									width={32}
									height={30}
									className="rounded-xl object-cover w-full h-auto"
								/>
							</Link>
							<Link
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter">
								<Image
									src="/x.png?height=30&width=32"
									alt="Twitter"
									width={32}
									height={30}
									className="rounded-xl object-cover w-full h-auto"
								/>
							</Link>
						</div>
					</div>
				</div>
				{/* Company Section */}
				<div>
					<h2 className="text-xl font-bold text-white mb-3">Company</h2>
					<ul className="space-y-2 font-normal text-base tracking-[0%]">
						<li>
							<Link href="#" className="hover:underline">
								About Us
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								How it works
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Host your space
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Support Section */}
				<div>
					<h2 className="text-xl font-bold text-white mb-3">Support</h2>
					<ul className="space-y-2 font-normal text-base tracking-[0%]">
						<li>
							<Link href="#" className="hover:underline">
								Help Center
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Terms of Service
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Safety
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h2 className="text-xl font-bold text-white mb-3">Contact</h2>
					<ul className="space-y-2 font-normal text-base tracking-[0%]">
						<li>
							<Link
								href="mailto:hello@gridspace.com"
								className="hover:underline">
								hello@gridspace.com
							</Link>
						</li>
						<li>
							<Link href="tel:08067854321" className="hover:underline">
								08067854321
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex items-center justify-between mt-10 border-t border-[#868686] pt-2 text-sm">
				<p>Copyright © 2025 GridSpace. All rights reserved.</p>

				<div>
					<ul className="flex items-center gap-5">
						<li>
							<Link href="#" className="hover:underline">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Terms of Service
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Shipping Policy
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
