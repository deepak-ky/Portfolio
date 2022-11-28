import React  from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return(
        <header className="bg-green-200">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeclassname="text-red" className="tracking-widest inline-flex items-center py-6 px-4 mr-4 hover:text-green-900 text-4xl font-bold cursive"
                    >Deepak Kumar</NavLink>
                    <NavLink to="/post"  activeclassname="text-red-100 br-red-700" className=" inline-flex items-center py-6 px-4 mr-4 hover:text-green-900 text-2xl"
>Blog Posts</NavLink>
                    <NavLink to="/project"  activeclassname="text-red-100 br-red-700" className=" inline-flex items-center py-6 px-4 mr-4 hover:text-green-900 text-2xl"
 >Projects</NavLink>
                    <NavLink to="/about"  activeclassname="text-red-100 br-red-700" className="inline-flex items-center py-6 px-4 mr-4 hover:text-green-900 text-2xl"
 >About Me</NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://www.linkedin.com/in/deepak-kumar-7812171ab/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                <SocialIcon url="https://leetcode.com/deepak_ky/" defaultSVGclassName="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                <SocialIcon url="https://codeforces.com/profile/deepak_ky" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>

            </div>
            </div>
           
        </header>
    )
}