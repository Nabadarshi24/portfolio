const Skills = () => {
    return (
        <div>
            <h2 className="text-xl lg:text-3xl text-white">Skills</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>
            <div className="mt-8 text-white px-4 lg:px-10">
                {/* Languages */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg">
                    <h2 className="lg:w-64 font-semibold">Languages: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-pink-700 px-4 py-1 rounded">HTML/CSS</p>
                        <p className="bg-sky-700 px-4 py-1 rounded">JavaScript</p>
                        <p className="bg-blue-700 px-4 py-1 rounded">TypeScript</p>
                    </div>
                </div>
                <div className="border-b-2 border-gray-700 mt-6"></div>

                {/* Technologies/Frameworks */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg mt-6">
                    <h2 className="lg:w-64 font-semibold">Technologies/Frameworks: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-green-700 px-4 py-1 rounded">React.js</p>
                        <p className="bg-yellow-700 px-4 py-1 rounded">Next.js</p>
                        <p className="bg-orange-700 px-4 py-1 rounded">Node.js</p>
                        <p className="bg-gray-700 px-4 py-1 rounded">Express.js</p>
                        <p className="bg-emerald-700 px-4 py-1 rounded">Git</p>
                        <p className="bg-purple-700 px-4 py-1 rounded">GitHub</p>
                    </div>
                </div>
                <div className="border-b-2 border-gray-700 mt-6"></div>

                {/* Database */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg mt-6">
                    <h2 className="lg:w-64 font-semibold">Database: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-cyan-700 px-4 py-1 rounded">MongoDB</p>
                        <p className="bg-indigo-700 px-4 py-1 rounded">PostgreSQL</p>
                    </div>
                </div>
                <div className="border-b-2 border-gray-700 mt-6"></div>

                {/* Developer Tools */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg mt-6">
                    <h2 className="lg:w-64 font-semibold">Developer Tools: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-blue-600 px-4 py-1 rounded">VS Code</p>
                        <p className="bg-indigo-600 px-4 py-1 rounded">Vercel</p>
                        <p className="bg-fuchsia-700 px-4 py-1 rounded">Postman</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg mt-6">
                    <h2 className="lg:w-64 font-semibold">AI Tools: </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                        <p className="bg-blue-600 px-4 py-1 rounded">ChatGPT</p>
                        <p className="bg-indigo-600 px-4 py-1 rounded">Claude</p>
                        <p className="bg-fuchsia-700 px-4 py-1 rounded">Cursor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;