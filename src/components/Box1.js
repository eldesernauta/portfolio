const picture = require("../img/portrait.png")

const Box1 = (props) => {
    return (
        <div className="relative h-full">
            <div className="animation-wrapper">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>

            <div className={`h-full flex flex-col ${props.state ? `justify-start items-center p-5 text-neutral-900 hover:text-neutral-100` : `justify-center items-center text-neutral-100`}`}>
                <h1 className={`font-Sextape text-5xl text-center break-word`}>Oscar Rojas</h1>
                <p className={`subtitle text-center`}>Web Developer / Photographer</p>
                <hr className={props.state && `h-8`}></hr>
                <p className={`${props.state ? "block w-4/6 text-center text-sm" : "hidden"}`}>
                    Colombian-born publicist focused on development. Big sense of
                    responsibility, leadership oriented and really good communicative
                    skills that highlights my great team work. Not only that, my
                    artish background helps me to create pretty impressive layouts in
                    detail.
                </p>

                <img src={picture} className={`${props.state ? "block absolute bottom-0" : "hidden"}`} alt="Portrait" />

            </div>
        </div>
    );
}

export default Box1;