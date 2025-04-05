import video1  from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide">CodeSnippet is your
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "} AI-powered {" "}
            </span>
            coding companion
        </h1>
                <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Built to help developers write smarter, faster, and cleaner code.
                Whether you're debugging, exploring new languages, or searching for that perfect snippet, 
                CodeSnippet streamlines your workflow using intelligent code suggestions, instant snippet generation,
                and smart search features. Say goodbye to context-switching and hello to efficient coding!
                </p>
                <div className="flex justify-center my-10">
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                        Start for free </a>
                        <a href="#" className="py-3 px-4 mx-3 rounded-md border"> Documentation </a> 
                </div>
                <div className="flex mt-10 justify-center "> 
                    <video autoPlay loop muted 
                    className="rounded-lg w-1/2 md:w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag. 
                    </video>
                    <video autoPlay loop muted 
                        className="rounded-lg w-1/2 md:w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"> 
                        <source src={video2} type="video/mp4" /> 
                        Your browser does not support the video tag. 
                    </video> 
                </div>
     </div>
  )
}

export default HeroSection
