// import Logo from "./assets/logo.png";

function App() {
	return (
		<div className="container">
			<header>
				<ul className="-mt-2 py-2 flex items-center gap-x-6 overflow-x-scroll">
					{/* <li>
						<a href="#">
							<img src={Logo} alt="logo" className="w-12" />
						</a>
					</li> */}
					<li>
						<a href="#" className="text-gray-600 font-medium">
							Home
						</a>
					</li>
					<li>
						<a href="mailto:lenoteddy@gmail.com" className="text-gray-600 font-medium">
							Contact
						</a>
					</li>
				</ul>
			</header>
			<main className="py-6">
				<h1 className="text-4xl font-semibold">Hi, I'm Teddy Leno!</h1>
				<p className="mt-1 text-sm">🔗 Blockchain Developer | 📊 Crypto Trader | 🏆 2x Hackathon Winner</p>
				<div className="mt-6">
					<h2 className="mb-1 text-2xl font-semibold">About Me</h2>
					<p className="text-justify">
						With years of experience in blockchain development, full-stack engineering, and tech entrepreneurship, I specialize in building scalable, secure, and innovative decentralized
						applications. From leading tech teams to auditing smart contracts and optimizing Web3 solutions, I've worked on everything from launchpads and staking platforms to custom
						enterprise blockchain tools. My mission is to help businesses navigate the blockchain space, turning ideas into reality with cutting-edge technology. Let's build the future
						together! 🚀
					</p>
				</div>
				<div className="mt-6">
					<h2 className="mb-1 text-2xl font-semibold">Recent Activities</h2>
					<ul className="text-sm">
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/2033733857212829870" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">March 5 - 16, 2026</div>
								<div className="ml-2 w-full">🐥 HackQuest Indonesia: Co-Learning Camp 8 - Ethereum</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/2021963789839761670" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">February 10 - 12, 2026</div>
								<div className="ml-2 w-full">🇭🇰 Coindesk - Consensus Hong Kong 2026</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/2021960904267673979" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">February 10, 2026</div>
								<div className="ml-2 w-full">🍽️ Paradex Private Dinner 🇭🇰</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/2012141329627910439" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">January 16, 2026</div>
								<div className="ml-2 w-full">🚩 BuidlGuidl CTF Challenges - S2</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/2031730807505870969" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">January 8, 2026 - March 11, 2026</div>
								<div className="ml-2 w-full">📊 Start trading on Paradex - generating total $1,169.58 in PnL</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/1985244931305480369" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">October 10, 2025 - December 31, 2025</div>
								<div className="ml-2 w-full">📊 Start trading on Lighter.xyz - generating total $12,465.36 in PnL</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/1946973457859915892" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">July 20, 2025</div>
								<div className="ml-2 w-full">🖥️ BuidlGuidl ETH Tech Tree Challenges</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/1939744361669173399" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">July 1, 2025</div>
								<div className="ml-2 w-full">🚩 BuidlGuidl CTF Challenges - S1</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/1894638382166544721" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">February 26, 2025</div>
								<div className="ml-2 w-full">🎓 BuidlGuidl Batch 13 Graduate</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/1892961128608669878" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">February 18 - 20, 2025</div>
								<div className="ml-2 w-full">🥈 "Consensus X EasyA" Hackathon Winner 2nd place</div>
							</a>
						</li>
						<li className="mb-2">
							<a href="https://x.com/lenoteddy/status/1891513569931382958" className="flex items-center" target="_blank" rel="noreferrer noopener">
								<div className="w-48 text-gray-500">Januray 31 - February 14, 2025</div>
								<div className="ml-2 w-full"> 🏆 "Coinbase Developer Platform - AgentKit Pool Prize" Hackathon Winner</div>
							</a>
						</li>
					</ul>
				</div>
			</main>
			<footer className="mt-8">
				<div className="flex items-center gap-x-4">
					<a href="https://github.com/lenoteddy" className="underline" target="_blank" rel="noreferrer noopener">
						↗ Github
					</a>
					<a href="https://x.com/lenoteddy" className="underline" target="_blank" rel="noreferrer noopener">
						↗ X
					</a>
					<a href="https://www.linkedin.com/in/teddy-leno" className="underline" target="_blank" rel="noreferrer noopener">
						↗ Linkedin
					</a>
				</div>
				<p className="mt-6 text-center">©2025 Build with ❤️ by me</p>
			</footer>
		</div>
	);
}

export default App;
