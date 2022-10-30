import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {addMistake, deleteChar, incrPosition, setActive, StateType, updateBase} from "./store/reducer";
import {filterKey} from "./utilities/charValidation";
import {Keyboard} from "./components/keyboard/Keyboard";
import {Viewfinder} from "./components/viewfinder/Viewfinder";

function App() {

    window.onkeydown = (ev: KeyboardEvent): any => detectKeyDown(ev)

    const state = useSelector<RootState, StateType>((state) => state)
    const dispatch = useDispatch()
    const currentChar = state.base[state.position]
    const position: number = state.position

    const detectKeyDown = (e: KeyboardEvent) => {
        e.preventDefault()
        const validatedKey = filterKey(e)                                   //filter ctrl etc

        if (validatedKey) {
            if (validatedKey === 'Backspace')
                position > 0 && dispatch(deleteChar())                      //move position & delete last mistake position
            else if (validatedKey === currentChar) {                        //if correct char
                state.base.length <= (state.position + 1) ? dispatch(setActive(false)) : dispatch(incrPosition())
            } else {                                                        //if incorrect char
                dispatch(addMistake(validatedKey, state.position))
                if (state.base.length <= (state.position + 1)) {
                    dispatch(setActive(false))
                    return
                }
                state.allowMistakes && dispatch(incrPosition())             //incr position & add mistake position
            }
        }
    }

    return (
        <div className="App">
            <div className={"settingMenu"}>

            </div>
            <div className={"displayWrapper"}>
                {state.active && <Viewfinder/>}
            </div>
            <Keyboard char={currentChar} layout={state.layout}/>
            <div>
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
            <button onClick={() => {
                dispatch(updateBase(prompt("enter new text") ||''))
            }}>Add new text</button>
        </div>
    )
}

export default App
