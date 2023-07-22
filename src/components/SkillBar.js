import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SkillBar = ({ skill, percentage }) => {
    const barRef = useRef(null);

    useEffect(() => {
        const barElement = barRef.current;

        gsap.fromTo(
            barElement,
            { width: '0%' },
            { width: `${percentage}%`, duration: 1, ease: 'power2.out' }
        );
    }, [percentage]);

    return (
        <div className="relative mb-4 w-full h-4 bg-neutral-200 rounded-lg overflow-hidden">
            <div
                ref={barRef}
                className="h-full bg-primary"
                style={{ width: '0%' }}
            ></div>
            <div className="absolute font-Roboto text-xs inset-0 flex items-center justify-center text-neutral-900 font-semibold">
                {skill}
            </div>
        </div>
    );
};

export default SkillBar;
