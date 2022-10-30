import React from 'react';
import s from './KeyboardStats.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {StateType} from "../../../store/reducer";
import {getStats} from "../../../utilities/statsCalc";
import {mergeStats} from "../../../utilities/mergeStats&Layout";
import {lang, layoutType} from "../../../lang/lang";

export const KeyboardStats = ({layout}: { layout: layoutType }) => {

    const {la} = lang(layout)

    const state = useSelector<RootState, StateType>((state) => state)

    const Stats = getStats(state.missedChar)
    const max = Math.max(...Object.values(Stats))

    const mergedStats = mergeStats(la, Stats, max)
    const color = "hsla(0, 100%, 50%,"

    return (
        <div className={s.keyboard}>
            <ul className={s.row}>
                <li className={s.untracked}>ESC</li>
                <li className={s.untracked}>1</li>
                <li className={s.untracked}>2</li>
                <li className={s.untracked}>3</li>
                <li className={s.untracked}>4</li>
                <li className={s.untracked}>5</li>
                <li className={s.untracked}>6</li>
                <li className={s.untracked}>7</li>
                <li className={s.untracked}>8</li>
                <li className={s.untracked}>9</li>
                <li className={s.untracked}>0</li>
                <li className={s.untracked}>-</li>
                <li className={s.untracked}>+</li>
                <li className={s.untracked} id={s.back}>BACK</li>
            </ul>
            <ul className={s.row}>
                <li className={s.untracked} id={s.tab}>TAB</li>
                <li style={{backgroundColor: `${color} ${mergedStats[0]})`}}>{la[0]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[1]})`}}>{la[1]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[2]})`}}>{la[2]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[3]})`}}>{la[3]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[4]})`}}>{la[4]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[5]})`}}>{la[5]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[6]})`}}>{la[6]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[7]})`}}>{la[7]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[8]})`}}>{la[8]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[9]})`}}>{la[9]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[10]})`}}>{la[10]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[11]})`}}>{la[11]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[12]})`}}>{la[12]}</li>
            </ul>
            <ul className={s.row}>
                <li className={s.untracked} id={s.caps}>CAPS</li>
                <li style={{backgroundColor: `${color} ${mergedStats[13]})`}}>{la[13]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[14]})`}}>{la[14]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[15]})`}}>{la[15]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[16]})`}}>{la[16]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[17]})`}}>{la[17]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[18]})`}}>{la[18]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[19]})`}}>{la[19]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[20]})`}}>{la[20]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[21]})`}}>{la[21]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[22]})`}}>{la[22]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[23]})`}}>{la[23]}</li>
                <li className={s.untracked} id={s.enter}>ENTER</li>
            </ul>
            <ul className={s.row}>
                <li className={s.untracked} id={s.leftShift}>SHIFT</li>
                <li style={{backgroundColor: `${color} ${mergedStats[24]})`}}>{la[24]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[25]})`}}>{la[25]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[26]})`}}>{la[26]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[27]})`}}>{la[27]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[28]})`}}>{la[28]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[29]})`}}>{la[29]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[30]})`}}>{la[30]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[31]})`}}>{la[31]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[32]})`}}>{la[32]}</li>
                <li style={{backgroundColor: `${color} ${mergedStats[33]})`}}>{la[33]}</li>
                <li className={s.untracked} id={s.rightShift}>SHIFT</li>
            </ul>
        </div>
    );
}