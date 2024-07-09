import { Image } from "@nextui-org/react";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
    const words = ["better", "cute", "beautiful", "modern", "dynamic", "fast", "optimized"];
    return (
        <>
            <section id="hero" className="py-12 md:py-24 mx-4 w-full">

                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">S.Aziz Khan</h1>
                                    <h2 className="text-lg italic font-bold tracking-tighter">Software Developer</h2>
                                    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mt-2">
                                        Build
                                        <FlipWords words={words} /> <br />
                                    </div>
                                </div>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    {` I'm a passionate software developer with expertise in building web applications and mobile apps. I love creating innovative solutions that solve real-world problems.`}
                                </p>
                            </div>
                        </div>

                        <Image
                            isBlurred
                            width={550}
                            src="/aziz-avatar.jpeg"
                            alt="NextUI Album Cover"
                            className=" m-5 mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}