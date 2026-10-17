const Experience = () => {
    return (
        <div>
            <h2 className="text-xl lg:text-3xl text-white font-semibold">Experience</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>

            <div className="mt-8 text-white space-y-6">
                <div>
                    <h3 className="text-lg mb-1 font-semibold">FAQ Private Limited, Dhaka (August 2022 – January 2023)</h3>
                    <p className="text-orange-300 mb-2">Position: Intern Web Developer</p>

                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Developed responsive web applications.</li>
                        <li>Delivered code with proper handover and documentation to senior dev.</li>
                        <li>Gathered feedback and resolve issues efficiently.</li>
                        <li>Assisted senior developers in client discussions to gather project scope, clarify technical requirements, and outline feature specs.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg mb-1 font-semibold">FAQ Private Limited, Dhaka (February 2023 – May 2026)</h3>
                    <p className="text-orange-300 mb-2">Position: Jr. Software Developer</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Works in multiple saas projects.</li>
                        <li>Collaborated with teams in an agile workflow.</li>
                        <li>Ensured code quality through reviews and refactoring.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg mb-1 font-semibold">FAQ Private Limited, Dhaka (Jun 2026 – Present)</h3>
                    <p className="text-orange-300 mb-2">Position: Software Developer</p>

                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>R&D on LLM, AI Models.</li>
                        <li>Have a course from Udemy about Claude.</li>
                        <li>Using Claude in our existing projects to increase productivity.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
