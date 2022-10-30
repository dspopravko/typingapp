import React, {useRef} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {StateType} from "../../store/reducer";
import s from "./Viewfinder.module.css"

export const Viewfinder = () => {
    const state = useSelector<RootState, StateType>((state) => state)

    const initialText: Array<string> = [...state.base]
    const position: number = state.position
    const mistakesPositions: Array<number> = state.mistakesPositions

    const createPositionSpan = (index: number, char: string) => {
        const ref = useRef<null | HTMLDivElement>(null)
        ref.current && ref.current.scrollIntoView({behavior: "smooth", block: "start"})
        return <span ref={ref}  key={index} className={s.position}>{char}</span>
    }

    return (
        <div className={s.textWrapper}>
            {
                initialText.map((char, index) => {
                        return (
                            index === position ?
                                createPositionSpan(index, char)
                                : mistakesPositions.some(i => i === index) ?
                                    <span key={index} className={s.mistake}>{char}</span>
                                    : <span key={index} className={s.regular}>{char}</span>
                        )
                    }
                )
            }
        </div>
    );
}