import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const box4 = (props) => {
    return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">

            <div className='group relative w-full h-full p-3 flex flex-col justify-end items-end cursor-default bg-neutral-900 hover:bg-primary transition-all duration-300'>
                <h6 className="text-neutral-100 absolute top-1 md:top-3 left-1 md:left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">Sites</h6>
            </div>
            <div className='group relative w-full h-full p-3 flex flex-col justify-end items-end cursor-default bg-neutral-900 hover:bg-secondary transition-all duration-300'>
                <h6 className="text-neutral-100 group-hover:text-neutral-900 absolute top-1 md:top-3 left-1 md:left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">Other sites</h6>
            </div>
            <div className='group relative w-full h-full p-3 flex flex-col justify-end items-end cursor-default bg-neutral-900 hover:bg-accent transition-all duration-300'>
                <h6 className="text-neutral-100 group-hover:text-neutral-900 absolute top-1 md:top-3 left-1 md:left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">Photography</h6>
            </div>
            <div className='group relative w-full h-full p-3 flex flex-col justify-end items-end cursor-default bg-neutral-900 hover:bg-primary transition-all duration-300'>
                <h6 className="text-neutral-100 absolute top-1 md:top-3 left-1 md:left-3 text-xs md:text-lg lg:text-xl transition-all duration-300">Contact</h6>
                <ul className="grid grid-cols-[20px_20px] grid-rows-2  sm:flex">
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100 cursor-pointer transition duration-500">
                        <a href="https://github.com/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 15 }} />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100 cursor-pointer transition duration-500">
                        <a href="https://instagram.com/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15 }} />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100 cursor-pointer transition duration-500">
                        <a href="https://www.linkedin.com/in/eldesernauta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 15 }} />
                        </a>
                    </li>
                    <li className="mx-2 text-neutral-900 hover:text-neutral-100 cursor-pointer transition duration-500">
                        <a href="mailto:hola@eldesernauta.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15 }} />
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

export default box4;