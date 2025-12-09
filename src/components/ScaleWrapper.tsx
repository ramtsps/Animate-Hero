import { useState, useEffect, useRef, ReactNode } from "react";

interface ScaleWrapperProps {
    children: ReactNode;
    designWidth?: number;
}

export default function ScaleWrapper({ children, designWidth = 1728 }: ScaleWrapperProps) {
    const [scale, setScale] = useState(1);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newScale = width / designWidth;
            setScale(newScale);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContentHeight(entry.contentRect.height);
            }
        });

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, [designWidth]);

    return (
        <div
            className="w-full bg-white overflow-x-hidden relative"
            style={{ height: contentHeight * scale }}
        >
            <div
                ref={contentRef}
                style={{
                    width: `${designWidth}px`,
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
