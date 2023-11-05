import { useRef} from 'react';



import { Cell } from './cell';



import { boardCells } from './board-cells';
import {BoardWrapper} from "./board-styled.ts";


export const Board = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    return (
        <BoardWrapper>
            <div className="mainSquare" ref={boardRef}>

                <div className="row top cells-top">
                    {boardCells
                        .filter((cell) => cell.position === 'top')
                        .map((cell) => (
                            <Cell key={cell.id} {...cell} />
                        ))}
                </div>

                <div className="row center">
                    <div className="square2 cells-left">
                        {boardCells
                            .filter((cell) => cell.position === 'left')
                            .reverse()
                            .map((cell) => (
                                <Cell key={cell.id} {...cell} />
                            ))}
                    </div>

                    <div className="square9" style={{ position: 'relative' }}>

                    </div>

                    <div className="square2 cells-right">
                        {boardCells
                            .filter((cell) => cell.position === 'right')
                            .map((cell) => (
                                <Cell key={cell.id} {...cell} />
                            ))}
                    </div>
                </div>

                <div className="row top cells-bottom">
                    {boardCells
                        .filter((cell) => cell.position === 'bottom')
                        .reverse()
                        .map((cell) => (
                            <Cell key={cell.id} {...cell} />
                        ))}
                </div>
            </div>
        </BoardWrapper>
    );
};
