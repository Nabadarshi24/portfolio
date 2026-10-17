import certificate from '../assets/Portfolio/cetificate.png';
import mtcna from '../assets/Portfolio/Mikrotik MTCNA Certificates.pdf';
import mtcre from '../assets/Portfolio/Mikrotik MTCRE Certificates.pdf';

const achievements = [
    { title: "Hacker Rank Problem Solving (Basic)", img: certificate },
    { title: "Green University Inter Department Programming Contest (IDPC) 2023", position: "15th" },
    { title: "MikroTik Certified Network Associate (MTCNA)", file: mtcna },
    { title: "MikroTik Certified Routing Engineer (MTCRE)", file: mtcre },
];

const Achievement = () => {
    return (
        <div>
            <h2 className="text-xl lg:text-3xl text-white font-semibold">Achievement</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>

            {/* Achievements List */}
            <div className="mt-8 text-white flex flex-col gap-10">
                {achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 sm:gap-10">
                        <span className="w-4 h-4 shrink-0 mt-1 border bg-orange-400 rounded-full"></span>
                        <div className="flex flex-col gap-5 w-full">
                            <h2 className="text-xl">{item.title}</h2>
                            {item.img && (
                                <img
                                    src={item.img}
                                    loading="lazy"
                                    className="object-cover w-full max-w-sm sm:w-96 rounded-md"
                                    alt={item.title}
                                />
                            )}

                       
                            {item.file && (
                                <a
                                    href={item.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-300 hover:underline">
                                    View Certificate
                                </a>
                            )}

                            {item.position && (
                                <span className="text-orange-300 text-lg">
                                    Position: {item.position}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievement;
