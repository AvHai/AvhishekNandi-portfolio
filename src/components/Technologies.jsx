import {DiRedis} from "react-icons/di"
import {RiReactjsLine} from "react-icons/ri"
import {SiMysql} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"
import {FaNodeJs} from "react-icons/fa"
import { SiTensorflow, SiPytorch, SiScikitlearn,  SiNumpy, SiPandas } from "react-icons/si"; 
import { FaPython, FaJs } from "react-icons/fa";
import { SiLangchain, SiFastapi, SiFlask, SiStreamlit } from "react-icons/si"; // RAG & Deployment Tools


// import {BiLogoPostgressql} from "react-icons/bi"
const Technologies=()=>{
    return (
        <div className="pb-24">
           <h2 className="my-20 text-center text-5xl font-bold">Tech Stack</h2>
           <div className="flex flex-wrap items-center justify-center gap-4">
           <div className="p-4"><FaPython className="text-7xl text-blue-500" /></div>
            <div className="p-4"><FaJs className="text-7xl text-yellow-400" /></div>
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            <div className="p-4">
                <SiMysql className="text-7xl text-blue-800"/>
            </div>
            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-700"/>
            </div>
            <div className="p-4"><SiTensorflow className="text-7xl text-orange-500" /></div>
            <div className="p-4"><SiPytorch className="text-7xl text-red-500" /></div>
            <div className="p-4"><SiScikitlearn className="text-7xl text-yellow-500" /></div>
            <div className="p-4"><SiNumpy className="text-7xl text-blue-500" /></div>
            <div className="p-4"><SiPandas className="text-7xl text-purple-400" /></div>
            <div className="p-4"><SiLangchain className="text-7xl text-green-500" /></div>
            <div className="p-4"><SiStreamlit className="text-7xl text-amber-600" /></div>
            
         </div> 
        </div>
    )
}

export default Technologies