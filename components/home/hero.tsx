import { Image } from "@nextui-org/react";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
    const words = ["innovative", "scalable", "user-friendly", "efficient", "secure", "reliable", "seamless", "interactive", "robust", "versatile", "intuitive", "performant"];
    return (
        <>
            <section id="hero" className="py-12 md:py-24 mx-4 w-full rounded-t-lg">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_600px] items-center">
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl ">S.Aziz Khan</h1>
                                <h2 className="text-lg italic font-bold tracking-tight">Software Developer</h2>
                                <div className="text-4xl font-normal text-neutral-600 mt-2">
                                    Build <FlipWords words={words} />
                                </div>
                                <p className="max-w-[600px] text-gray-400 md:text-xl">
                                    {`I'm a passionate software developer with expertise in building web applications and mobile apps. I love creating innovative solutions that solve real-world problems.`}
                                </p>
                            </div>
                        </div>
                        <Image
                            isBlurred
                            width={550}
                            src="/aziz-avatar.jpeg"
                            alt="Hero Image"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
