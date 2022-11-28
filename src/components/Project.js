import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import sanityClient from "../client.js";

export default function Project() {
    const [projects, setProject] = useState(null)
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "project"]{
                title,
                date,
                description,
                link,
                projectType,
                tags
            }`
        )
            .then((data) => setProject(data))
            .catch(console.error)
    }, []);

    return (
        <main className='bg-green-100 min-h-screen p-10'>
            <section className='container mx-auto'>
                <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-20'>Welcome to my Project page!</h2>
                <section className='grid grid-cols-2 gap-8'>
                {projects && projects.map((projectData,index)=>(
                    <article className='relative rounded-lg shadow-xl bg-white p-16'>
                        <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                            <a href={projectData.link} alt={projectData.title} target="_blank" rel="noopener noreferrer">{projectData.title}</a>
                        </h3>
                        <div className='text-gray-500 text-xs space-x-4'>
                            <span>
                                <strong className='font-bold'>Finished On</strong>:{" "}
                                {new Date(projectData.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className='font-bold'>Type</strong>:{" "}
                                {projectData.projectType}
                            </span>
                            <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                                {projectData.description}
                            </p>
                            <a 
                                href={projectData.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                            >
                                View the Project{" "}
                                <span role="img" aria_label="right-pointer">
                                    ➡
                                </span>
                            </a>
                        </div>
                    </article>
                 
                ))} 
                </section>
            </section>
        </main>
    )
}
