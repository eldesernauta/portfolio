import SkillBar from './SkillBar';

const Box3 = (props) => {
    return (
        <div className="group relative h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold">Experience</h2>
            {props.state &&
                <div className="grid grid-cols-1 grid-rows-3 w-4/6 mt-8">
                    <div className="p-4">
                        <h3 className="text-accent group-hover:text-neutral-900">FRONTEND DEVELOPER</h3>
                        <p className={`text-sm font-regular my-2`}>
                            Building email campaigns using HTML5 + Braze, creating animated banners using Javascript libraries such as GSAP and continuous maintenance of a code that optimizes these processes.
                            <br />
                            (Spain client) - (Medellín, Antioquia - Colombia)
                        </p>
                        <h6 className={`text-primary group-hover:text-neutral-900`}>
                            Howdy Inc.
                            <br />
                            Mar. 2022 - Jan. 2023
                        </h6>
                    </div>
                    <div className="p-4">
                        <h3 className="text-accent group-hover:text-neutral-900">WEB DEVELOPER</h3>
                        <p className={`text-sm font-regular my-2`}>
                            Developing and integrating user interfaces using programming
                            languages and new frontend technologies as HTML + CSS,
                            Javascript, ReacJS, Sass, Webpack, AWS, Git and others.
                            <br />
                            (Bilingual) - (Austin, Texas - USA)
                        </p>
                        <h6 className={`text-primary group-hover:text-neutral-900`}>
                            Howdy Inc.
                            <br />
                            Mar. 2022 - Jan. 2023
                        </h6>
                    </div>
                    <div className="p-4">
                        <h3 className="text-accent group-hover:text-neutral-900">FRONTEND DEVELOPER</h3>
                        <p className={`text-sm font-regular my-2`}>
                            Design, programming / building and managing websites for
                            company clients, edit plugins and create responsive layouts
                            using Wordpress, HTML, CSS, JS, GIT and PHP.
                            <br />
                            (Bilingual) - (Medellin, Antioquia)
                        </p>
                        <h6 className={`text-primary group-hover:text-neutral-900`}>
                            Solvo Global
                            <br />
                            Jul. 2020 - Mar. 2022
                        </h6>
                    </div>
                    <div className="p-4">
                        <h3 className="text-accent group-hover:text-neutral-900">WEB DESIGNER</h3>
                        <p className={`text-sm font-regular my-2`}>
                            Design, build and manage websites for the company clients,
                            edit plugins and create responsive layouts using Wordpress,
                            HTML and CSS.
                            <br />
                            (Bello, Antioquia)
                        </p>
                        <h6 className={`text-primary group-hover:text-neutral-900`}>
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