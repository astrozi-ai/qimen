import {SolarTerm, SolarTime} from "tyme4ts";
import {六十甲子} from "./type";
import type {八字} from "./type";

const 時干支 = (time: SolarTime): 六十甲子 => {
    return time.getLunarHour().getEightChar().getHour().getName() as 六十甲子;
};

const 日干支 = (time: SolarTime): 六十甲子 => {
    return time.getLunarHour().getEightChar().getDay().getName() as 六十甲子;
};

const 月干支 = (time: SolarTime): 六十甲子 => {
    return time.getLunarHour().getEightChar().getMonth().getName() as 六十甲子;
};

const 年干支 = (time: SolarTime): 六十甲子 => {
    return time.getLunarHour().getEightChar().getYear().getName() as 六十甲子;
};

const 八字 = (time: SolarTime): 八字 => {
    return [年干支(time), 月干支(time), 日干支(time), 時干支(time)];
};

// 排盘按节气「日」定局：交节日当天即用新节气（SolarDay.getTerm 为按日语义）。
const 節氣 = (time: SolarTime): SolarTerm => {
    return time.getSolarDay().getTerm();
};

export const LunarUtil = Object.freeze({
    時干支,
    日干支,
    月干支,
    年干支,
    八字,
    節氣,
});
