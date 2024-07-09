import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { FaReact, FaNodeJs, FaTools, FaJs } from "react-icons/fa";
import { SiFramework } from "react-icons/si";

export default function Skills() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 rounded-t-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Check out some of my recent projects that showcase my skills and expertise.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

                    <Card className="bg-muted text-white">
                        <CardHeader className="flex items-center">
                            <FaReact className="text-2xl mr-2" />
                            <h3 className="text-lg font-semibold">Frontend</h3>
                        </CardHeader>
                        <CardBody>
                            <ul className="space-y-2">
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                                <li>TypeScript</li>
                            </ul>
                        </CardBody>
                    </Card>

                    <Card className="bg-muted text-white">
                        <CardHeader className="flex items-center">
                            <FaNodeJs className="text-2xl mr-2" />
                            <h3 className="text-lg font-semibold">Backend</h3>
                        </CardHeader>
                        <CardBody>
                            <ul className="space-y-2">
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </CardBody>
                    </Card>

                    <Card className="bg-muted text-white">
                        <CardHeader className="flex items-center">
                            <SiFramework className="text-2xl mr-2" />
                            <h3 className="text-lg font-semibold">Frameworks</h3>
                        </CardHeader>
                        <CardBody>
                            <ul className="space-y-2">
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>Prisma</li>
                                <li>Jest</li>
                            </ul>
                        </CardBody>
                    </Card>

                    <Card className="bg-muted text-white">
                        <CardHeader className="flex items-center">
                            <FaTools className="text-2xl mr-2" />
                            <h3 className="text-lg font-semibold">Tools</h3>
                        </CardHeader>
                        <CardBody>
                            <ul className="space-y-2">
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Figma</li>
                                <li>Postman</li>
                            </ul>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
}
