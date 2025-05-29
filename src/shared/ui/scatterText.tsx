"use client";

import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";
import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export interface ScatterTextHandle {
  reset: () => void;
}

interface ScatterTextProps {
  text: string;
  className?: string;
}

const ScatterText = forwardRef<ScatterTextHandle, ScatterTextProps>(
  ({ text, className }, ref) => {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const velocityX = useMotionValue(0);
    const velocityY = useMotionValue(0);
    const prevEvent = useRef(0);
    const charsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
      if (!containerRef.current) return;

      const { chars } = splitText(containerRef.current);
      charsRef.current = chars;

      const handlePointerMove = (event: PointerEvent) => {
        const now = performance.now();
        const timeSinceLastEvent = (now - prevEvent.current) / 1000;
        prevEvent.current = now;
        velocityX.set(event.movementX / timeSinceLastEvent);
        velocityY.set(event.movementY / timeSinceLastEvent);
      };

      document.addEventListener("pointermove", handlePointerMove);

      hover(chars, (element) => {
        const speed = Math.sqrt(velocityX.get() ** 2 + velocityY.get() ** 2);
        const angle = Math.atan2(velocityY.get(), velocityX.get());
        const distance = speed * 0.1;

        animate(
          element,
          {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
          },
          { type: "spring", stiffness: 100, damping: 50 }
        );
      });

      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
      };
    }, []);

    // ✅ 외부에서 reset 함수 사용할 수 있도록 ref 노출
    useImperativeHandle(ref, () => ({
      reset: () => {
        charsRef.current.forEach((char) => {
          animate(
            char,
            { x: 0, y: 0 },
            { type: "spring", stiffness: 100, damping: 30 }
          );
        });
      },
    }));

    return (
      <>
        <h1 ref={containerRef} className={`split-text ${className ?? ""}`}>
          {text}
        </h1>
        <style>{`
          .split-char {
            will-change: transform, opacity;
            display: inline-block;
          }
        `}</style>
      </>
    );
  }
);

ScatterText.displayName = "ScatterText";
export default ScatterText;
