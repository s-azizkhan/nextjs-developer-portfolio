export default function Skills() {
    return (<>
        <section id="skills" className="py-12 md:py-24">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                        <ul className="space-y-2">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Backend</h3>
                        <ul className="space-y-2">
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Tools</h3>
                        <ul className="space-y-2">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Figma</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Frameworks</h3>
                        <ul className="space-y-2">
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>Prisma</li>
                            <li>Jest</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}