import React, {useLayoutEffect, useRef} from "react";
import {MatrixCanvas, MatrixWrapper} from "./index.styles";
import {getRandomIndex} from "../../Utils/MathUtils";
import {Theme} from "../../SharedStyles/theme";
import {useWindowSize} from "../../Hooks/WindowHooks";

const alphabet: string[] = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'.split('');
const fontSize = 14;


export const Matrix = () => {
    const size = useWindowSize();
    const intervalRef = useRef<NodeJS.Timer | undefined>(undefined);
    const canvasRef = useRef<HTMLCanvasElement>()

    const setupMatrix = (canvas: HTMLCanvasElement): number[] => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        const columns = canvas.width / fontSize;
        const drops = []; // one per column

        // x below is the x coordinate
        // 1 = y co-ordinate of the drop(same for every drop initially)
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        return drops;
    }

    const draw = (canvas: HTMLCanvasElement, drops: number[]) => {
        const ctx = canvas.getContext('2d')!;
        // translucent BG to show trail
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = Theme.matrixColor;
        ctx.font = `${fontSize}px arial`;

        for (let i = 0; i < drops.length; i++) {
            const word = alphabet[getRandomIndex(alphabet.length)];
            ctx.fillText(word, i * fontSize, drops[i] * fontSize);

            // adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    const stopMatrix = () => {
        if (intervalRef) {
            clearInterval(intervalRef.current);
        }
    }

    const startMatrix = (startDrawing: () => void) => {
        stopMatrix();
        intervalRef.current = setInterval(startDrawing, 33);
    }

    useLayoutEffect(() => {
        const drops = setupMatrix(canvasRef.current!);
        const startDrawing = () => draw(canvasRef.current!, drops);
        startMatrix(startDrawing);
    }, [size]);

    return (
        // @ts-ignore
        <MatrixWrapper>
            {/* @ts-ignore */}
            <MatrixCanvas id="matrix-canvas" ref={canvasRef}/>
        </MatrixWrapper>
    );
}
