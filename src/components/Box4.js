import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import CameraIcon from "./cameraIcon";

const pdfFile = require("../assets/CV_2023.pdf")

const Box4 = (props) => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [showPhotography, setShowPhotography] = useState(true);

    const handleBoxState1 = () => {
        setIsOpen1(!isOpen1)
        setIsOpen3(false)
        setIsOpen2(false)
    }

    const handleBoxState2 = () => {
        setIsOpen2(!isOpen2)
        setIsOpen1(false)
        setIsOpen3(false)
    }
    const handleBoxState3 = () => {
        setIsOpen3(!isOpen3)
    }
    useEffect(() => {
        const handleResize = () => {
            setShowPhotography(window.innerWidth >= 480);
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Call it once to initialize the state
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const data1 = [
        { Texto: "Europa", URL: "https://ph.eldesernauta.com/europa" },
        { Texto: "Maremoto", URL: "https://maremoto.eldesernauta.com/" },
        { Texto: "T.Fish", URL: "https://ph.eldesernauta.com/tfish/" },
    ];

    const data2 = [
        { Texto: "Beutilofts", URL: "https://beutilofts.com" },
        { Texto: "Getspot", URL: "https://getspot.com" },
        { Texto: "Vensure", URL: "https://vensure.com" },
    ];

    return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">

            <div
                className={`group relative w-full h-full p-3 flex flex-col max-xxs:gap-1 gap-3 justify-start items-start  bg-neutral-900 hover:bg-primary transition-all duration-300  ${isOpen1 && `col-span-2`} ${isOpen2 && `hidden`}`}
                onClick={handleBoxState1}
            >

                <h6 className="text-neutral-100 text-xs md:text-lg lg:text-xl transition-all duration-300">Sites</h6>

                {isOpen1 && (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-3 xl:gap-5">
                            <ul className="flex flex-col gap-0 lg:gap-3 max-sm:text-xs">
                                {data1.map((item, index) => (
                                    <a href={item.URL} target="_blank"><li key={index} className="select-all">{item.Texto}</li></a>
                                ))}
                            </ul>
                            <ul className="flex flex-col gap-0 lg:gap-3 max-sm:text-xs">
                                {data2.map((item, index) => (
                                    <a href={item.URL} target="_blank"><li key={index} className="select-all">{item.Texto}</li></a>
                                ))}
                            </ul>
                        </div>

                        <p className="text-neutral-100 text-xs text-right absolute bottom-3 right-3 hidden md:block">
                            Just some websites and<br /> projects I´ve worked on
                        </p>
                    </>
                )}
            </div>

            <div
                className={`group relative w-full h-full p-3 flex flex-col gap-3 justify-start items-center  bg-neutral-900 hover:bg-secondary transition-all duration-300 ${isOpen1 && `hidden`} ${isOpen2 && `col-start-1 col-span-2 `}`}
                onClick={handleBoxState2}
            >

                <h6 className={`text-neutral-100 group-hover:text-neutral-900 text-xs md:text-lg lg:text-xl transition-all duration-300 ${!isOpen2 && `absolute top-3 left-3`}`}>CV</h6>

                {isOpen2 &&
                    <>
                        <p className="text-neutral-100 group-hover:text-neutral-900 text-xs text-center">Download my <br />
                            curriculum here:</p>
                        <a download href={pdfFile} className="select-all text-neutral-100  group-hover:text-neutral-900"><FontAwesomeIcon icon={faFilePdf} className=" hover:text-accent text-8xl transition duration-300" /></a>
                    </>
                }
            </div>

            <div
                className={`group relative w-full h-full p-3 flex flex-col justify-end items-end  bg-neutral-900 hover:bg-accent transition-all duration-300 `}
                onMouseEnter={handleBoxState3}
                onMouseLeave={handleBoxState3}
            >
                {showPhotography ? ( // Render the full text if showPhotography is true
                    <h6 className="text-neutral-100 group-hover:text-neutral-900 absolute top-1 md:top-3 left-1 md:left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">
                        Photography
                    </h6>
                ) : ( // Otherwise, render the abbreviation "Ph"
                    <h6 className="text-neutral-100 group-hover:text-neutral-900 absolute top-1 md:top-3 left-1 md:left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">
                        Ph
                    </h6>
                )}
                {isOpen3 &&
                    <>
                        <CameraIcon />
                    </>
                }
            </div>
            <div className={`group relative w-full h-full p-3 flex flex-col justify-end items-end  bg-neutral-900 hover:bg-primary transition-all duration-300 `}>
                <h6 className="text-neutral-100 absolute top-1 md:top-3 left-1 md:left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">Contact</h6>
                <ul className="grid grid-cols-[20px_20px] grid-rows-2  sm:flex">
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100  transition duration-500">
                        <a href="https://github.com/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="text-base" />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100  transition duration-500">
                        <a href="https://instagram.com/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-base" />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100  transition duration-500">
                        <a href="https://www.linkedin.com/in/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-base" />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100  transition duration-500">
                        <a href="mailto:hola@eldesernauta.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} className="text-base" />
                        </a>
                    </li>
                </ul>
                <p className="text-[8px] sm:text-sm text-right text-neutral-900">
                    {" "}
                    2023 <span>©</span> eldesernauta
                </p>
            </div>
        </div>);
}

export default Box4;