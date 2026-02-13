import Image from "next/image";

export default function TemporaryHome() {
    return (
        <main className={`min-h-screen bg-black flex items-center justify-center lg:justify-start font-mono`}>
            {/* .content translation:
                - Mobile: flex-col, items-center, padding-4
                - Desktop (lg): flex-row, items-start, width-80%
            */}
            <div className="w-[90%] lg:w-[80%] p-4 lg:p-6 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[30px]">

                {/* Logo Container */}
                <div className="w-[220px] lg:w-[290px] flex justify-center lg:justify-start shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="LES GRIOTSxSTUDIO logo"
                        width={500}
                        height={500}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Content Sections Container */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30px] w-full text-center lg:text-left">

                    {/* Main Text Section */}
                    <div className="flex flex-col gap-4 font-mono text-[13px] lg:text-[16px] leading-[1.4] lg:leading-[1.6] uppercase tracking-wide text-white max-w-prose">
                        <p>
                            LESGRIOTSxSTUDIO is a transdisciplinary creative studio.
                        </p>
                        <p>
                            We combine artistic direction, movement, and audiovisual production
                            to design narratives that resonate across image, story, and
                            performance.
                        </p>
                        <p>
                            Our practice is rooted in Afro-diasporic perspectives and dedicated
                            to building cultural legacies through powerful visual storytelling.
                        </p>
                        <p>
                            We are driven by collaboration and thrive in creative environments
                            where meaning and impact are at the core.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div className="flex flex-col gap-2 lg:gap-0 font-mono text-[13px] lg:text-[16px] leading-[1.4] lg:leading-[1.6] uppercase tracking-wide text-white whitespace-nowrap shrink-0">
                        <p className="underline decoration-1 underline-offset-4 mb-2 lg:mb-0">Services</p>
                        <p>Brand Strategy</p>
                        <p>Creative Direction</p>
                        <p>Production</p>
                    </div>

                    {/* Contacts Section */}
                    <div className="flex flex-col gap-2 lg:gap-0 font-mono text-[13px] lg:text-[16px] leading-[1.4] lg:leading-[1.6] uppercase tracking-wide text-white whitespace-nowrap shrink-0">
                        <p className="underline decoration-1 underline-offset-4 mb-2 lg:mb-0">Contacts</p>
                        <a
                            href="mailto:studio@Lesgriots.com"
                            className="hover:opacity-70 transition-opacity"
                        >
                            studio@Lesgriots.com
                        </a>
                    </div>

                </div>
            </div>
        </main>
    )
}