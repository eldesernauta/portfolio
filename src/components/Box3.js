const Box3 = (props) => {
    return (
        <div className={`group relative h-full flex flex-col ${props.state ? `justify-start items-center p-3 overflow-y-hidden lg:overflow-y-auto 2xl:overflow-y-hidden` : `justify-center items-center`}`}>

            <h2 className="text-lg md:text-2xl font-semibold">Experience</h2>
            {props.state &&
                <div className="grid grid-cols-1 grid-rows-3 gap-3 w-full xl:w-5/6 2xl:w:4/6 mt-3 md:mt-6">
                    <div>
                        <h3 className="text-accent group-hover:text-neutral-900">FRONTEND DEVELOPER</h3>
                        <p className={`text-xs md:text-sm font-regular my-1 md:my-2 text-justify`}>
                            Building email campaigns using HTML5 + Braze, creating animated banners using Javascript libraries such as GSAP and continuous maintenance of a code that optimizes these processes.
                            <br />
                            (Spain client) - (Medellín, Antioquia - Colombia)
                        </p>
                        <h6 className={`text-secondary group-hover:text-neutral-900`}>
                            DDB Colombia
                            <br />
                            Jun. 2023 - Present
                        </h6>
                    </div>
                    <div className="max-xxs:hidden block">
                        <h3 className="text-accent group-hover:text-neutral-900">WEB DEVELOPER</h3>
                        <p className={`text-xs md:text-sm font-regular my-1 md:my-2 text-justify`}>
                            Developing and integrating user interfaces using programming languages and new frontend technologies as HTML + CSS, Javascript, ReacJS, Tailwind, Webpack, AWS (S3, EC2, Cloudfront), Git and others.
                            <br />
                            (Bilingual) - (Austin, Texas - USA)
                        </p>
                        <h6 className={`text-secondary group-hover:text-neutral-900`}>
                            Howdy Inc.
                            <br />
                            Mar. 2022 - Jan. 2023
                        </h6>
                    </div>
                    <div className="hidden md:block">
                        <h3 className="text-accent group-hover:text-neutral-900">FRONTEND DEVELOPER</h3>
                        <p className={`text-xs md:text-sm font-regular my-1 md:my-2 text-justify`}>
                            Design, develop and manage companie's partnerships websites (33). Create and customize Wordpress plugins and themes. Building responsive layouts using Wordpress, HTML, CSS, Javascript, React, GIT and PHP.
                            <br />
                            (Bilingual) - (Medellin, Antioquia)
                        </p>
                        <h6 className={`text-secondary group-hover:text-neutral-900`}>
                            Solvo Global
                            <br />
                            Jul. 2020 - Mar. 2022
                        </h6>
                    </div>
                    <div className="hidden 2xl:block">
                        <h3 className="text-accent group-hover:text-neutral-900">WEB DESIGNER</h3>
                        <p className={`text-xs md:text-sm font-regular my-1 md:my-2 text-justify`}>
                            Design, build and manage websites for the company clients, edit plugins and create responsive layouts using Wordpress, HTML and CSS.
                            <br />
                            (Bello, Antioquia)
                        </p>
                        <h6 className={`text-secondary group-hover:text-neutral-900`}>
                            Script Digital
                            <br />
                            Feb. 2019 - Jun. 2020
                        </h6>
                    </div>

                </div>
            }
        </div>
    );
}

export default Box3;