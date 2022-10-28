import React, {useState} from 'react';
import {changeLayout, toggleMistakes} from "../../store/reducer";
import {KeyboardStats} from "./keyboardStatistics/KeyboardStats";
import {useDispatch} from "react-redux";
import {KeyboardStrokes} from "./keyboardStrokes/KeyboardStrokes";
import {layoutType} from "../../lang/lang";

type KeyboardPropsType = {
    layout: layoutType
    char: string
}

export const Keyboard = ({char, layout}: KeyboardPropsType) => {

    const [showVariant, setShowVariant] = useState(1)
    const dispatch = useDispatch()
    return (
        <>
            <div className={"menuWrapper"}>
                <div className={"keyboardMenu"}>
                    <div
                        onClick={()=>setShowVariant(1)}
                        className={showVariant === 1 ? 'active' : ''}
                    >Show keyboard</div>
                    <div
                        onClick={()=>setShowVariant(2)}
                        className={showVariant === 2 ? 'active' : ''}
                    >Show mistakes heatmap</div>
                    <div>
                        <label className="container">RUS
                            <input type="radio" checked={layout === 'RUS'} name="radio" onChange={()=> dispatch(changeLayout('RUS'))}/>
                        </label>
                        <label className="container">ENG
                            <input type="radio" checked={layout === 'ENG'} name="radio" onChange={()=> dispatch(changeLayout('ENG'))}/>
                        </label>
                    </div>
                </div>
                <button onClick={() => dispatch(toggleMistakes())}>Toggle allow mistakes</button>
            </div>
            <div className={"keyboardWrapper"}>
                {
                    showVariant === 1 ?
                        <KeyboardStrokes
                            layout={layout}
                        char={char}/>
                        : <KeyboardStats
                            layout={layout}/>

                }

            </div>
        </>
    );
}