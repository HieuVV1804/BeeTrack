import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';



const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            }
            else {
                setIsVisible(false)
            }
        });

    }, []);

    return (
        <div>
            {isVisible && (
                <div style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    fontSize: "40px",
                    background: "none",
                    backgroundColor: "transparent"

                }}
                    onClick={scrollToTop}
                >
                    <FontAwesomeIcon icon={faCircleUp} />
                </div>
            )
            }
        </div >
    );
};

export default ScrollToTopButton;