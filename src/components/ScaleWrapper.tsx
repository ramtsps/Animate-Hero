import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface ScaleWrapperProps {
    children: React.ReactNode;
}

export default function ScaleWrapper({ children }: ScaleWrapperProps) {
    const [scale, setScale] = useState(1);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const designWidth = 1728; // The design width you want to scale from
            const newScale = width / designWidth;
            setScale(newScale);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContentHeight(entry.contentRect.height);
            }
        });

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [location.pathname]); // Re-observe when route changes

    return (
        <div
            className="w-full bg-white overflow-x-hidden relative"
            style={{ height: contentHeight * scale }}
        >
            <div
                ref={contentRef}
                style={{
                    width: "1728px",
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            >
                {children}
            </div>
        </div>
    );
}
