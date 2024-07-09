import { Input, Textarea, Button } from "@nextui-org/react";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted rounded-t-lg">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                            <p className="max-w-[900px] md:text-xl lg:text-base xl:text-xl ">
                                {`Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.`}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto py-12">
                            <form className="max-w-md mx-auto space-y-6 bg-gray-300 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Name"
                                    isClearable
                                    color="primary"
                                    size="lg"
                                    startContent={<FaUser className="text-gray-500" />}
                                />
                            </div>
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    isClearable
                                    color="primary"
                                    size="lg"
                                    startContent={<FaEnvelope className="text-gray-500" />}
                                />
                            </div>
                            <div className="relative">
                                <Textarea
                                    isMultiline
                                    placeholder="Message"
                                    color="primary"
                                    size="lg"
                                />
                            </div>
                            <Button color="primary" variant="shadow" className="w-full text-lg font-semibold flex items-center justify-center">
                                Send Message
                                <FaPaperPlane className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
