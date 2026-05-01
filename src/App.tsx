import './App.css';
import { BinaryBackground } from './components/BinaryBackground';
import { Header } from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <section className='justify-center items-center flex flex-col'>
    <Header />
    <BinaryBackground />
      <pre className='ascii mt-2'>{`██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗ ██████╗██╗     ██╗
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
      <button className="h-12 w-28 google-sans-flex-400 bg-white text-black rounded-full hover:opacity-80 transition-opacity" >Docs</button>
  <button className="px-4 py-2 text-sm bg-zinc-900/60 backdrop-blur-xl text-white rounded-full hover:opacity-80 transition flex items-center gap-2">

    Github

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 640" fill="currentColor">
  <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988z"/>
</svg>

  </button>
    </div>

    <div className='flex w-full mt-10 max-w-2xl'>



    <div className='mt-2 w-full flex justify-center'>
    <div className="gap-4 bg-zinc-950 opacity-70 border border-slate-800 rounded-xl px-4 py-3 flex items-center justify-between">

      <code className="text-sm text-green-300">
        curl -sSL https://yourdomain.com/install | bash
      </code>

      <button className="text-xs text-slate-400 hover:text-white">
        Copy
        
      </button>

    </div>
    </div>

</div>

<div className='mt-10 w-full flex justify-center'>


  

</div>



<Footer />
</section>
    </>
  );
}

export default App;
