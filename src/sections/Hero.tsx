import Button from "@/components/Button";
import designExampleImage from "@/assets/images/design-example-1.png";
import designeExampleImage2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <>
            <section className="py-24 overflow-x-clip">
                <div className="container relative">
                    <div className="hidden lg:block absolute -left-32 top-16">
                        <Image src={designExampleImage} alt="design example 1"/>
                    </div>
                    <div className="hidden lg:block absolute -right-64 -top-16">
                        <Image src={designeExampleImage2} alt="design example 2"/>
                    </div>
                    <div className="hidden lg:block absolute left-56 top-96">
                        <Pointer name="Andrea"/>
                    </div>
                    <div className="hidden lg:block absolute right-80 -top-4">
                        <Pointer name="Bryan" color="red"/>
                    </div>
                    <div className="flex justify-center">
                        <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                            ✨ $7.5M seed round raised
                        </div>
                    </div>

                    <h1 className="text-6xl font-medium text-center mt-6 md:text-7xl lg:text-8xl">
                        Impactful design, created effortlessly
                    </h1>
                    <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                        Design tools shouldn&apos;t slow you down. Layers
                        combines powerful feature with an intuitive iterface
                        that keeps you in your creative flow.
                    </p>
                    <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-4 md:flex-1 w-full"
                        />
                        <Button type="submit" variant="primary" className="whitespace-nowrap" size="sm">Sign Up</Button>
                    </form>
                </div>
            </section>
        </>
    );
}
