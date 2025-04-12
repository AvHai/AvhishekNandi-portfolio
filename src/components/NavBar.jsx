import logo from "../assets/1.png"
import {FaGithub, FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
const Navbar=()=>{
    return (
        <nav className="flex items-center justify-between py-0">
         <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo } className="mx-2" width={130} height={110}/>
            </a>
         </div>
         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/avhishek-nandi-462423261/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin/>
            </a>

            <a href="https://github.com/AvHai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
                <FaGithub/>
            </a>

            <a href="https://leetcode.com/u/avhisheknandi03/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leetcode">
                <SiLeetcode/>
            </a>


         </div>
        </nav>

    )
}

export default Navbar