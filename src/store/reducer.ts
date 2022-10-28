import {layoutType} from "../lang/lang";

export type StateType = {
    base: string
    position: number
    mistakesPosition: Array<number>
    mistakesChar: Array<string>
    allowMistakes: boolean
    layout: layoutType
};

const initialState: StateType = {
    base: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    position: 0,
    mistakesPosition: [],
    mistakesChar: [],
    allowMistakes: true,
    layout: 'ENG'
};

export const incrPosition = () =>
    ({
        type: 'INCR-POSITION',
    } as const);
export const addMistake = (char: string, position: number) =>
    ({
        type: 'ADD-MISTAKE',
        position, char
    } as const);
export const deleteChar = () =>
    ({
        type: 'DELETE-CHAR',
    } as const);
export const toggleMistakes = () =>
    ({
        type: 'TOGGLE-ALLOW-MISTAKES'
    } as const)
export const changeLayout = (layout: layoutType) =>
    ({
        type: 'CHANGE-LAYOUT',
        layout
    } as const)
export const updateBase = (text: string) =>
    ({
        type: 'UPDATE-BASE',
        text
    } as const)


export type Actions = ReturnType<typeof incrPosition | typeof addMistake | typeof deleteChar | typeof toggleMistakes | typeof changeLayout | typeof updateBase>;

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'INCR-POSITION':
            return {
                ...state,
                position: state.position + 1,
            };
        case 'ADD-MISTAKE':
            return {
                ...state,
                mistakesPosition: [...state.mistakesPosition, action.position],
                mistakesChar: [...state.mistakesChar, action.char],
            };
        case 'DELETE-CHAR':
            const allMistakesPosition = state.mistakesPosition.filter(m => m < state.position - 1)
            return {
                ...state,
                mistakesPosition: allMistakesPosition,
                position: state.position - 1,
            };
        case 'TOGGLE-ALLOW-MISTAKES':
            return {
                ...state,
                allowMistakes: !state.allowMistakes
            };
        case 'CHANGE-LAYOUT':
            return {
                ...state,
                layout: action.layout
            };
        case 'UPDATE-BASE':
            return {
                ...state,
                base: action.text
            };
        default:
            return state;
    }
}