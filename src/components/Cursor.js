import { useEffect } from "react";
import { gsap } from "gsap";
import "../index.css"

const CustomCursor = (props) => {

    useEffect(() => {
        const bigBall = document.querySelector('.cursor__ball--big');
        const smallBall = document.querySelector('.cursor__ball--small');
        const hoverables = props.hoverable

        // Listeners
        const onMouseMove = (e) => {
            gsap.to(bigBall, 0.4, {
                x: e.pageX - 15,
                y: e.pageY - 15,
            });
            gsap.to(smallBall, 0.1, {
                x: e.pageX - 5,
                y: e.pageY - 7,
            });
        };

        const onMouseHover = () => {
            gsap.to(bigBall, 0.3, {
                scale: 4,
            });
        };

        const onMouseHoverOut = () => {
            gsap.to(bigBall, 0.3, {
                scale: 1,
            });
        };

        document.body.addEventListener('mousemove', onMouseMove);
        hoverables.forEach((hoverable) => {
            hoverable.addEventListener('mouseenter', onMouseHover);
            hoverable.addEventListener('mouseleave', onMouseHoverOut);
        });

        return () => {
            // Cleanup event listeners
            document.body.removeEventListener('mousemove', onMouseMove);
            hoverables.forEach((hoverable) => {
                hoverable.removeEventListener('mouseenter', onMouseHover);
                hoverable.removeEventListener('mouseleave', onMouseHoverOut);
            });
        };
    }, []);

    return (
        <div className="cursor absolute">
            <div className="cursor__ball cursor__ball--big ">
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
                </svg>
            </div>

            <div className="cursor__ball cursor__ball--small">
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                </svg>
            </div>
        </div>
    );
}

export default CustomCursor;