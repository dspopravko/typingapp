import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {StateType} from "../../store/reducer";

export const Viewfinder = () => {

    const state = useSelector<RootState, StateType>((state) => state)
    const initialText: Array<string> = [...state.base]
    const position: number = state.position
    const mistakesPosition: Array<number> = state.mistakesPosition

    return (
        <>
            {
                initialText.map((char, index) => {
                        return (
                            index === position ?
                                <span key={index} className={"position"}>{char}</span>
                                : mistakesPosition.some(i => i === index) ?
                                    <span key={index} className={"mistake"}>{char}</span>
                                    : <span key={index} className={"regular"}>{char}</span>
                        )
                    }
                )
            }
        </>
    );
}