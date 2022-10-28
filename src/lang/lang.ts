import {engQWERTY} from "./english";
import {rusQWERTY} from "./russian";

export type layoutType = 'ENG' | 'RUS'

export const lang = (language: layoutType) => {
    return language === 'RUS' ? {...rusQWERTY} : {...engQWERTY}
}