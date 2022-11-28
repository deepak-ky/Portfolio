import React from 'react'
import ii from '../ii.jpg'
export default function Home(){
    return(
        <main>
            <img src={ii} alt="Big Image" className='absolute object-cover w-full h-full'/>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className='text-6xl text-black font-bold cursive leading-none lg:leading-snug home-name'> Aloha! , I am Deepak.</h1>
            </section>
        </main>
    )
}
