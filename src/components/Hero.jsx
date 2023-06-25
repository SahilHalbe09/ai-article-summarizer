import React from "react";

import { logo } from "../assets";

const Hero = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center w-full mb-10 pt-3">
				{/* <img src={logo} alt='sumz_logo' className='w-28 object-contain' /> */}
				<p className="text-xl orange_gradient font-bold">AI-Summarizer</p>

				<button type="button" onClick={() => window.open("https://github.com/TidbitsJS/Summize", "_blank")} className="black_btn">
					GitHub
				</button>
			</nav>

			<h1 className="head_text pt-[6%]">
				Summarize Articles with <br className="max-md:hidden" />
				<span className="orange_gradient">OpenAI GPT-4</span>
			</h1>
			<h2 className="desc">Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries</h2>
		</header>
	);
};

export default Hero;
