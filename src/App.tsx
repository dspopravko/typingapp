import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {addMistake, deleteChar, incrPosition, StateType, toggleMistakes} from "./store/reducer";
import {filterKey} from "./utilities/charValidation";
import {Keyboard} from "./keyboard/Keyboard";

function App() {
    window.onkeydown = (ev: KeyboardEvent): any => detectKeyDown(ev)

    const state = useSelector<RootState, StateType>((state) => state)
    const dispatch = useDispatch()
    const currentChar = state.base[state.position]
    const initialText: Array<string> = [...state.base]
    const position: number = state.position
    const mistakesPosition: Array<number> = state.mistakesPosition
    const detectKeyDown = (e: KeyboardEvent) => {
        e.preventDefault()
        const validatedKey = filterKey(e)                                   //filter ctrl etc

        if (validatedKey) {
            if (validatedKey === 'Backspace')
                position > 0 && dispatch(deleteChar())                      //move position & delete last mistake position
            else if (validatedKey === currentChar) {                        //if correct char
                dispatch(incrPosition())
            } else {
                dispatch(addMistake(validatedKey, state.position))                                  //if incorrect char
                state.allowMistakes && dispatch(incrPosition()) //incr position & add mistake position
            }
        }
    }

    return (
        <div className="App">
            <div>
                <div>
                    All mistakes: {state.mistakesChar.concat('')}
                </div>
                <div>
                    Mistakes allowed? {state.allowMistakes ? 'Yes' : 'No'}
                </div>
                <div>
                    Mistakes: {state.position
                    && Math.ceil(
                        (state.mistakesChar.length / state.position) * 100
                    )}%
                </div>
            </div>
            <div>
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
            </div>
            <div>
                <button onClick={() => dispatch(toggleMistakes())}>Toggle allow mistakes</button>
            </div>
            <div className={"keyboardWrapper"}>
                <Keyboard
                    char={currentChar}
                />
            </div>
        </div>
    )
}

export default App
