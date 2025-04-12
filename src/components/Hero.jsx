// import profilePic from "../assets/raviKumarProfile.webp"
import profilePic from "../assets/avatarr.jpg"

import {HERO_CONTENT} from "../constants/index.js"
const Hero = () => { 
    return ( 
    <div className="pb-40 lg:mb-36"> 
        <div className="flex flex-wrap lg:flex-row-reverse"> 
            <div className="w-full lg:w-1/2"> 
                <div className="flex justify-center lg:p-8"> 
                    <img src={profilePic} alt="Ravi Kumar" className="border border-stone-800 rounded-3xl h-150"/> 
                </div> 
            </div> 
            <div className="w-full lg:w-1/2"> 
                <div className="flex flex-col items-center lg:items-start mt-10"> 
                    <h2 className="pb-2 text-4xl tracking-tighter lg:text-6xl pl-6 ">Avhishek Nandi</h2> 
                    <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent pl-6 ">Machine Learning Engineer / Software Engineer</span> 
                    <p className="my-2 max-w-lg py-6 pl-6 text-xl leading-relaxed tracking-tighter"> 
                    {HERO_CONTENT} 
                    </p> 
                    <div className="pl-6">
                    <a href="https://drive.google.com/file/d/14CusUfTjyZ5bc3qc9kwA3ixQlEH4aJXn/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white rounded-full p-4  text-stone-800 mb-10 text-center text-2xl">
                        View Resume 
                    </a> 
                    </div>
             </div> 
            </div>
        </div> 
    </div> 
            )
        } 

    export default Hero
