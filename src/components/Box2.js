import SkillBar from './SkillBar';

const Box2 = (props) => {
    return (
        <div className={`group relative h-full flex flex-col ${props.state ? `justify-start items-center p-3 overflow-y-auto ` : `justify-center items-center`}`}>
            <h2 className="text-center text-lg md:text-2xl font-semibold mb-0 2xl:mb-8">Education / Skills</h2>
            {props.state &&
                <div className="grid gap-3 lg:gap-8 grid-cols-1 lg:grid-cols-3 grid-rows-[auto_auto_auto_auto_auto_auto] lg:grid-rows-[auto_auto] w-full xl:w-5/6 2xl:w:4/6 mt-3">
                    <div>
                        <h3 className="text-secondary group-hover:text-neutral-900">PUBLICIST</h3>
                        <p className={`text-sm font-regular my-2`}>
                            Degree in Advertising
                            <br />
                            (Armenia, Quindío)
                        </p>
                        <h6 className={`text-primary group-hover:text-neutral-900`}>
                            E.A.M
                            <br />
                            2012 - 2017
                        </h6>
                    </div>
                    <div>
                        <h3 className="text-secondary group-hover:text-neutral-900">MISIONTIC 2022</h3>
                        <p className={`text-sm font-regular my-2`}>
                            Member at the 2nd Route of the fullstack web development
                            training imparted by the colombian ICT ministry
                            <br />
                            (Medellín, Antioquia)
                        </p>
                        <h6 className={`text-primary group-hover:text-neutral-900`}>
                            University of Antioquia
                            <br />
                            Mar. 2021 - Dic. 2021
                        </h6>
                    </div>
                    <div>
                        <h3 className="text-secondary group-hover:text-neutral-900">FULL STACK WEB DEVELOPMENT MASTER</h3>
                        <p className={`text-sm font-regular my-2`}>
                            Active member in Master’s degree focused on Full Stack web
                            development.
                            <br />
                            (Catalonia, Spain)
                        </p>
                        <h6 className={`text-primary group-hover:text-neutral-900`}>
                            Universitat Politècnica de Catalunya
                            <br />
                            May. 2022 - May. 2023
                        </h6>
                    </div>
                    <div className="w-auto">
                        <SkillBar skill="HTML" percentage={95} />
                        <SkillBar skill="CSS" percentage={85} />
                        <SkillBar skill="JavaScript" percentage={75} />
                        {/* Agrega más barras de progreso de habilidades aquí */}
                    </div>

                    <div className="w-auto">
                        <SkillBar skill="React" percentage={80} />
                        <SkillBar skill="Node" percentage={70} />
                        <SkillBar skill="Tailwind" percentage={90} />
                        {/* Agrega más barras de progreso de habilidades aquí */}
                    </div>

                    <div className="w-auto">
                        <SkillBar skill="AWS" percentage={70} />
                        <SkillBar skill="Git" percentage={85} />
                        <SkillBar skill="English" percentage={80} />
                        {/* Agrega más barras de progreso de habilidades aquí */}
                    </div>
                </div>
            }

        </div>
    );
}

export default Box2;