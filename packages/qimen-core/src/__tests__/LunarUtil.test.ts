import {describe, expect, it} from "bun:test";
import {SolarTime} from "tyme4ts";
import {LunarUtil} from "../LunarUtil";

describe("LunarUtil", () => {
    it("should work as expected", () => {
        const time1 = SolarTime.fromYmdHms(2023, 6, 27, 11, 0, 0);
        expect(LunarUtil.日干支(time1)).toEqual("丙辰");
        expect(LunarUtil.時干支(time1)).toEqual("甲午");
        expect(LunarUtil.節氣(time1).getName()).toEqual("夏至");

        const time2 = SolarTime.fromYmdHms(1994, 4, 24, 17, 0, 0);
        expect(LunarUtil.日干支(time2)).toEqual("庚辰");
        expect(LunarUtil.時干支(time2)).toEqual("乙酉");
        expect(LunarUtil.節氣(time2).getName()).toEqual("谷雨");
    });
});
