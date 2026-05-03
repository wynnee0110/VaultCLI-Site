

import '../App.css';
import { BinaryBackground } from '../components/BinaryBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Home() {

    const [copied, setCopied] = useState(false);

    // the command you want to copy
    const command = "curl -fsSL https://raw.githubusercontent.com/wynnee0110/VaultCLI/main/install.sh | bash";

    // function to copy text to clipboard
    const handleCopy = async () => {
        try {
            // copies text to user clipboard
            await navigator.clipboard.writeText(command);

            // show feedback
            setCopied(true);

            // reset after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <>
            <section className='justify-center items-center flex flex-col '>
                <Header />
                <BinaryBackground />
                <pre className='ascii mt-10 mb-[-50px] '>{`
██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗ ██████╗██╗     ██╗
██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝██╔════╝██║     ██║
██║   ██║███████║██║   ██║██║     ██║   ██║     ██║     ██║
╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║   ██║     ██║     ██║
 ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║   ╚██████╗███████╗██║
  ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝     ╚═════╝╚══════╝╚═╝
                                                           
                                                                
    `}</pre>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mx-auto">
                    A CLI tool for{" "}
                    <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
                        securely managing
                    </span>
                    <br />
                    accounts and secrets in a{" "}
                    <span className="text-slate-300 font-semibold">
                        self-hosted vault
                    </span>
                    .
                </h1>


                <div className='mt-10 gap-2 flex justify-center'>
                    <Link className="h-12 w-44 google-sans-flex-400 bg-white text-black rounded-full hover:opacity-80 transition-opacity flex items-center justify-center" to='/docs'>Documentation

                    </Link>

                    <a className="h-12 w-28 google-sans-flex-400 px-4 py-2 text-sm bg-zinc-900/60 backdrop-blur-xl text-white rounded-full hover:opacity-80 transition flex items-center gap-2" href="https://github.com/wynnee0110/VaultCLI">
                       

                            Github

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 640" fill="currentColor">
                                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988z" />
                            </svg>

                       
                    </a>
                </div>

                <div className='flex w-full mt-10 max-w-2xl'>



        <div className="mt-0 w-full flex justify-center">
            <div className="gap-4 bg-zinc-950 opacity-90 backdrop-blur-sm border border-slate-800 rounded-xl px-4 py-2 flex items-center justify-between">

                {/* command text */}
<code className="text-sm text-green-300">
  curl -fsSL https://vaultcli/install | bash
</code>

                {/* copy button */}
                <button
                    onClick={handleCopy}
                    className="text-xs text-slate-400 hover:text-white transition"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>

            </div>
        </div>

                </div>

                <div className="w-full max-w-6xl mt-20 px-6 flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* LEFT SIDE — TEXT */}
                    <div className="flex-1 text-left max-w-xl">

                        {/* Small label / eyebrow */}
                        <span className="text-xs uppercase tracking-widest text-indigo-400 font-medium">
                            everything you need
                        </span>

                        {/* Headline */}
                        <h2 className="mt-6 text-5xl md:text-7xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
                            Command your vault with speed, precision, and control
                        </h2>

                        {/* Description */}
                        <p className="mt-5 text-zinc-400 leading-relaxed text-base">
                            VaultCLI gives you direct access to your accounts, secrets, and sensitive data
                            from the terminal. Skip complex dashboards and manage everything through clean,
                            powerful commands that fit naturally into your workflow. Built for developers
                            who prioritize security, efficiency, and complete ownership of their data.
                        </p>

                        {/* Optional CTA buttons */}
                        <div className="mt-6 flex gap-3">
                            <button className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:opacity-80 transition">
                                Get Started
                            </button>

                        </div>

                    </div>
                    {/* RIGHT SIDE — MAC TERMINAL */}
                    <div className="flex-1 w-full max-w-md">

                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg overflow-hidden">

                            {/* Mac top bar */}
                            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            {/* Terminal content */}
                            <div className="p-4 font-mono text-sm text-green-400 space-y-2 text-start">

                                <p><span className="text-zinc-500">$</span> vault init</p>
                                <p className="text-zinc-400">Vault initialized successfully.</p>

                                <p><span className="text-zinc-500">$</span> vault add github</p>
                                <p className="text-zinc-400">✔ Stored credentials for github</p>

                                <p><span className="text-zinc-500">$</span> vault list</p>
                                <p className="text-zinc-400">github</p>

                                <p><span className="text-zinc-500">$</span> vault get github</p>
                                <p className="text-zinc-400">••••••••••••••••</p>

                            </div>

                        </div>

                    </div>

                </div>




                <div className='mt-10 w-full flex justify-center flex-row gap-6 flex-wrap px-4'>
                    <div className='mt-10 w-full flex justify-center'>
                        <h2>Everything you need to manage your accounts,<br></br>data, and workflows in one secure place</h2>
                    </div>


                    {/* Card 1 — Key / Accounts */}
                    <div className='bg-zinc-900/60 backdrop-blur-xl w-64 h-64 rounded-xl flex flex-col justify-center items-center p-6 text-center gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                        <h2 className="text-sm font-medium text-slate-300">
                            Manage all your accounts in one place.
                        </h2>
                    </div>

                    {/* Card 2 — Shield / Secure Server */}
                    <div className='bg-zinc-900/60 backdrop-blur-xl w-64 h-64 rounded-xl flex flex-col justify-center items-center p-6 text-center gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                        <h2 className="text-sm font-medium text-slate-300">
                            Secure on your own server.
                        </h2>
                    </div>

                    {/* Card 3 — Database / Own Your Data */}
                    <div className='bg-zinc-900/60 backdrop-blur-xl w-64 h-64 rounded-xl flex flex-col justify-center items-center p-6 text-center gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                        <h2 className="text-sm font-medium text-slate-300">
                            You own your database and data.
                        </h2>
                    </div>

                </div>




                <Footer />
            </section>
        </>
    );
}

export default Home;
