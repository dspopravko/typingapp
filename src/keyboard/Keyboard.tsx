import React from 'react';
import s from './Keyboard.module.css'

type KeyboardPropsType = {
    char: string
}

export const Keyboard = ({char}: KeyboardPropsType) => {

    const la = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '/','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',`'`, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']

    const rshift = char.search(/[A-G,Q-T,V-X,Z]/) === 0
    const lshift = char.search(/[H-P,U,Y]/) === 0

    const ch = char.toUpperCase()
    return (
            <div className={s.keyboard}>
                <ul className={s.row}>
                    <li className={s.pinky} >ESC</li>
                    <li className={s.pinky} >1</li>
                    <li className={s.ring}  >2</li>
                    <li className={s.middle}>3</li>
                    <li className={s.pointL}>4</li>
                    <li className={s.pointL}>5</li>
                    <li className={s.pointR}>6</li>
                    <li className={s.pointR}>7</li>
                    <li className={s.middle}>8</li>
                    <li className={s.ring}  >9</li>
                    <li className={s.pinky} >0</li>
                    <li className={s.pinky} >-</li>
                    <li className={s.pinky} >+</li>
                    <li className={s.pinky} id={s.back}>BACK</li>
                </ul>
                <ul className={s.row}>
                    <li className={s.pinky}  id={s.tab}>TAB</li>
                    <li className={ch === la[0]  ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[0]}</li>
                    <li className={ch === la[1]  ? `${s.ring}   ${s.selected}` : s.ring}  >{la[1]}</li>
                    <li className={ch === la[2]  ? `${s.middle} ${s.selected}` : s.middle}>{la[2]}</li>
                    <li className={ch === la[3]  ? `${s.pointL} ${s.selected}` : s.pointL}>{la[3]}</li>
                    <li className={ch === la[4]  ? `${s.pointL} ${s.selected}` : s.pointL}>{la[4]}</li>
                    <li className={ch === la[5]  ? `${s.pointR} ${s.selected}` : s.pointR}>{la[5]}</li>
                    <li className={ch === la[6]  ? `${s.pointR} ${s.selected}` : s.pointR}>{la[6]}</li>
                    <li className={ch === la[7]  ? `${s.middle} ${s.selected}` : s.middle}>{la[7]}</li>
                    <li className={ch === la[8]  ? `${s.ring}   ${s.selected}` : s.ring}  >{la[8]}</li>
                    <li className={ch === la[9]  ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[9]}</li>
                    <li className={ch === la[10] ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[10]}</li>
                    <li className={ch === la[11] ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[11]}</li>
                    <li className={ch === la[12] ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[12]}</li>
                </ul>
                <ul className={s.row}>
                    <li className={s.pinky} id={s.caps}>CAPS</li>
                    <li className={ch === la[13] ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[13]}</li>
                    <li className={ch === la[14] ? `${s.ring}   ${s.selected}` : s.ring}  >{la[14]}</li>
                    <li className={ch === la[15] ? `${s.middle} ${s.selected}` : s.middle}>{la[15]}</li>
                    <li className={ch === la[16] ? `${s.pointL} ${s.selected}` : s.pointL}>{la[16]}</li>
                    <li className={ch === la[17] ? `${s.pointL} ${s.selected}` : s.pointL}>{la[17]}</li>
                    <li className={ch === la[18] ? `${s.pointR} ${s.selected}` : s.pointR}>{la[18]}</li>
                    <li className={ch === la[19] ? `${s.pointR} ${s.selected}` : s.pointR}>{la[19]}</li>
                    <li className={ch === la[20] ? `${s.middle} ${s.selected}` : s.middle}>{la[20]}</li>
                    <li className={ch === la[21] ? `${s.ring}   ${s.selected}` : s.ring}  >{la[21]}</li>
                    <li className={ch === la[22] ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[22]}</li>
                    <li className={ch === la[23] ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[23]}</li>
                    <li className={s.pinky} id={s.enter}>ENTER</li>
                </ul>
                <ul className={s.row}>
                    <li className={lshift? `${s.pinky} ${s.selected}`: s.pinky} id={s.leftShift}>SHIFT</li>
                    <li className={ch === la[24] ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[24]}</li>
                    <li className={ch === la[25] ? `${s.ring}   ${s.selected}` : s.ring}  >{la[25]}</li>
                    <li className={ch === la[26] ? `${s.middle} ${s.selected}` : s.middle}>{la[26]}</li>
                    <li className={ch === la[27] ? `${s.pointL} ${s.selected}` : s.pointL}>{la[27]}</li>
                    <li className={ch === la[28] ? `${s.pointL} ${s.selected}` : s.pointL}>{la[28]}</li>
                    <li className={ch === la[29] ? `${s.pointR} ${s.selected}` : s.pointR}>{la[29]}</li>
                    <li className={ch === la[30] ? `${s.pointR} ${s.selected}` : s.pointR}>{la[30]}</li>
                    <li className={ch === la[31] ? `${s.middle} ${s.selected}` : s.middle}>{la[31]}</li>
                    <li className={ch === la[32] ? `${s.ring}   ${s.selected}` : s.ring}  >{la[32]}</li>
                    <li className={ch === la[33] ? `${s.pinky}  ${s.selected}` : s.pinky} >{la[33]}</li>
                    <li className={rshift? `${s.pinky} ${s.selected}`: s.pinky} id={s.rightShift}>SHIFT</li>
                </ul>
            </div>
    );
}