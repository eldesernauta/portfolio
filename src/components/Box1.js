import { useEffect } from "react"

const picture = require("../img/portrait.png")

const Box1 = (props) => {

    useEffect(() => {
        const particles = document.querySelector(".animation-wrapper")
        if (props.state) {
            particles.style.height = "90vh"
        } else {
            particles.style.height = "50vh"
        }
    }, [props.state])
    return (
        <div id="particles" className={`relative h-full group hoverable`}>
            <div className="absolute animation-wrapper w-full overflow-hidden z-0">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>
            <div className={`h-full flex flex-col ${props.state ? `justify-start items-center ` : `justify-center items-center text-neutral-100`}${props.stateBox2 ? `p-3` : `p-3`} ${props.stateBox3 ? `p-0` : `p-3`}`}>
                <h1 className={`font-Sextape text-center break-word leading-8 max-xxs:text-xl text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl ${props.state && `z-50 text-neutral-900 group-hover:text-neutral-100`} ${props.stateBox2 && `h1`} ${props.stateBox3 && `group-hover:text-neutral-900 text-2xl xl:text-4xl 2xl:text-6xl`}`}>Oscar Rojas</h1>
                <p className={`subtitle text-center text-sm md:text-base ${props.state && `text-neutral-900 group-hover:text-neutral-100`} ${props.stateBox3 || props.stateBox2 ? `hidden` : `block`}`}>Web Developer / Photographer</p>
                <p className={`${props.state ? "block w-full md:w-5/6 lg:w-4/6 text-center max-xxs:text-xs text-sm md:text-base mt-3 text-transparent group-hover:text-neutral-100" : "hidden"}`}>
                    Colombian-born publicist focused on development. Big sense of
                    responsibility, leadership oriented and really good communicative
                    skills that highlights my great team work. Not only that, my
                    artish background helps me to create pretty impressive layouts in
                    detail.
                </p>

                <img src={picture} className={`group-hover:grayscale ${props.state ? "block absolute bottom-0" : "hidden"}`} alt="Portrait" />

            </div>
        </div>
    );
}

export default Box1;