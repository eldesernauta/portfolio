import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import DoorIcon from "./doorIcon"
import { data } from "autoprefixer";

const spotGif = require("../img/spot.gif")
const helpgo1 = require("../img/helpgo_login.png")
const helpgo2 = require("../img/helpgo_register.png")
const helpgo3 = require("../img/helpgo_dashboard.png")
const helpgo4 = require("../img/helpgo_profile.png")
const helpgo5 = require("../img/helpgo_chat.png")
const freelance1 = require("../img/freelance1.png")
const freelance2 = require("../img/freelance2.png")
const freelance3 = require("../img/freelance3.png")

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
        {
            Texto: "Vensure",
            PopupTitle: "VensureHR",
            paragraph1: `During my tenure at VensureHR, I spearheaded various aspects of web design and frontend development. My role primarily focused on keeping the company's website vibrant and up-to-date, leveraging WordPress and Elementor Pro to ensure a user-friendly experience.`,
            paragraph2: `I was also responsible for constructing engaging landing pages that captivated our audience. My skills in WordPress, HTML, CSS, JavaScript, Git, and PHP were pivotal in maintaining and enhancing the sites of our 33 division partners, all while providing essential frontend support for SEO efforts.`,
        },
        {
            Texto: "Getspot",
            PopupTitle: "Spot Insurance",
            paragraph1: `At Getspot, I played a pivotal role in a transformative web consolidation initiative. I collaborated closely with the team to create a unified, visually appealing website. While the existing Getspot site employed React and Tailwind, I helped develop a new consolidated site using Webflow. `,
            paragraph2: `My proficiency technologies such as React, Tailwind, Docker, MongoDB and Webpack empowered me to contribute to this project's success.`,
            image1: spotGif
        },
        {
            Texto: "Helpgo",
            PopupTitle: "Master's Project",
            paragraph1: `A highlight of my journey was my involvement as a Frontend Developer in the Helpgo project. This initiative was a centerpiece of my Master's degree in Fullstack Web Development at the Polytechnic University of Catalonia.`,
            paragraph2: `We took charge of crafting a specialized social network for NGOs, fostering resource exchange aligned with their specific causes. Employing Next.js, Tailwind, Express, MongoDB and GitHub we engineered a platform that demonstrated our adeptness in both frontend and backend technologies.`,
            image1: helpgo1,
            image2: helpgo2,
            image3: helpgo3,
            image4: helpgo4,
            image5: helpgo5
        },
        {
            Texto: "Freelance",
            PopupTitle: "Freelance Projects",
            paragraph1: `Embracing a freelance path, I've navigated diverse industries, showcasing remarkable versatility in my approach. From CMS platforms like WordPress, Webflow, and Shopify to cutting-edge technologies such as React, Next.js, and Tailwind, I've delivered exceptional results for a varied clientele. `,
            paragraph2: `My toolkit also extends to AWS, GSAP, and more, enabling me to create dynamic and engaging websites. This experience has not only honed my technical skills but also nurtured my adaptability, reinforcing my commitment to delivering innovative frontend solutions.`,
            image1: freelance1,
            image2: freelance2,
            image3: freelance3
        },
    ];
    const data2 = [
        { Texto: "Europa", URL: "https://ph.eldesernauta.com/europa" },
        { Texto: "Maremoto", URL: "https://maremoto.eldesernauta.com/" },
        { Texto: "T.Fish", URL: "https://ph.eldesernauta.com/tfish/" },
    ];


    return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">

            <div
                className={`group relative w-full h-full p-3 flex flex-col max-xxs:gap-1 gap-3 justify-start items-start  bg-neutral-900 hover:bg-primary transition-all duration-300  ${isOpen1 && `col-span-2 overflow-y-auto`} ${isOpen2 && `hidden`}`}
                onClick={handleBoxState1}
            >

                <h6 className={`text-neutral-100 text-xs md:text-lg lg:text-xl transition-all duration-300 ${isOpen1 && `underline`}`}>Sites</h6>

                {isOpen1 && (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-3 xl:gap-8">

                            <ul className="flex flex-col gap-0 lg:gap-3 max-sm:text-xs">
                                <li className="select-all">
                                    {data1.map((item, index) => (
                                        <Popup
                                            id="spot-modal"
                                            trigger={
                                                <p className="mb-0 lg:mb-3">{item.Texto}</p>
                                            }
                                            modal
                                            nested
                                            key={index}
                                        >
                                            {(close) => (
                                                <div className="modal">
                                                    <button className="close focus-visibble:ring-0 focus-visible:border-0 hover:bg-primary hover:text-neutral-100 transitiion duration-300" onClick={close}>
                                                        &times;
                                                    </button>
                                                    <h2>
                                                        {item.PopupTitle}
                                                    </h2>
                                                    <p>
                                                        {item.paragraph1}
                                                    </p>
                                                    <br />
                                                    <p>
                                                        {item.paragraph2}
                                                    </p>
                                                    <img src={item.image1} alt="" className={`${item.image2 && `mt-8`}`} />
                                                    {item.image2 && <img src={item.image2} alt="" className="mt-8" />}
                                                    {item.image3 && <img src={item.image3} alt="" className="mt-8" />}
                                                    {item.image4 && <img src={item.image4} alt="" className="mt-8" />}
                                                    {item.image5 && <img src={item.image5} alt="" className="mt-8" />}
                                                </div>
                                            )}
                                        </Popup>))}
                                </li>
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
                className={`group relative w-full h-full p-3 flex flex-col max-xxs:gap-1 gap-3 lg:gap-2 2xl:gap-5 justify-start items-center  bg-neutral-900 hover:bg-secondary transition-all duration-300 ${isOpen1 && `hidden`} ${isOpen2 && `col-start-1 col-span-2 `}`}
                onClick={handleBoxState2}
            >

                <h6 className={`text-neutral-100 group-hover:text-neutral-900 text-xs md:text-lg lg:text-xl transition-all duration-300 ${isOpen2 ? `underline` : `absolute top-3 left-3`}`}>CV</h6>

                {isOpen2 &&
                    <>
                        <p className="text-neutral-100 group-hover:text-neutral-900 text-xs text-center">Download my <br />
                            curriculum here:</p>
                        <a download href={pdfFile} className="select-all text-neutral-100  group-hover:text-neutral-900"><FontAwesomeIcon icon={faFilePdf} className=" hover:text-accent max-xxs:text-3xl text-6xl lg:text-7xl 2xl:text-7xl translate-x-2 2xl:translate-x-5 transition duration-300" /></a>
                    </>
                }
            </div>

            <div
                className={`group relative w-full h-full p-3 flex flex-col justify-end items-end  bg-neutral-900 hover:bg-accent transition-all duration-300 `}
                onMouseEnter={handleBoxState3}
                onMouseLeave={handleBoxState3}
            >
                {showPhotography ? ( // Render the full text if showPhotography is true
                    <h6 className={`text-neutral-100 group-hover:text-neutral-900 absolute top-3 left-3 text-xs md:text-lg lg:text-xl transition-all duration-300`}>
                        Photography
                    </h6>
                ) : ( // Otherwise, render the abbreviation "Ph"
                    <h6 className="text-neutral-100 group-hover:text-neutral-900 absolute top-3 left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">
                        Ph
                    </h6>
                )}
                {isOpen3 &&
                    <>
                        <a href="https://ph.eldesernauta.com" target="_blank" rel="noreferrer" className="select-all">
                            <DoorIcon color={'#171717'} />
                        </a>
                    </>
                }
            </div>
            <div className={`group relative w-full h-full p-3 flex flex-col justify-end items-end  bg-neutral-900 hover:bg-primary transition-all duration-300 `}>
                <h6 className="text-neutral-100 absolute top-3 left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">Contact</h6>
                <ul className="grid grid-cols-[20px_20px] grid-rows-2  sm:flex">
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100  transition duration-500">
                        <a href="https://github.com/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20 }} className="text-base" />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100  transition duration-500">
                        <a href="https://instagram.com/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 20 }} className="text-base" />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100  transition duration-500">
                        <a href="https://www.linkedin.com/in/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 20 }} className="text-base" />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100  transition duration-500">
                        <a href="mailto:hola@eldesernauta.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 20 }} className="text-base" />
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