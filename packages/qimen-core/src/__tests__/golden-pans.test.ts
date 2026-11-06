import {describe, expect, it} from "bun:test";
import {SolarTime} from "tyme4ts";
import {readFileSync} from "node:fs";
import {QimenUtil} from "../QimenUtil";
import type {QimenPan} from "../type";

// Golden fixture: expected structured pan output for fixed solar datetimes,
// stored in src/__fixtures__/golden-pans.json. The projection below is the
// contract the fixture records; a regression in any plate field fails here.
interface GoldenCase {
    solar: string;
    lunar: string;
    pan: ReturnType<typeof projectPan>;
}

function projectPan(pan: QimenPan) {
    return {
        八字: pan.八字,
        上中下元: pan.上中下元,
        遁: pan.遁,
        局數: pan.局數,
        旬首: pan.旬首,
        遁干: pan.遁干,
        值符星: pan.值符星,
        值符落宮: pan.值符落宮,
        值使門: pan.值使門,
        值使落宮: pan.值使落宮,
        空亡: pan.空亡,
        天乙星: pan.天乙星,
        驛馬: pan.驛馬,
        節氣: pan.節氣.getName(),
        旺相休囚死: pan.旺相休囚死,
        九宮: pan.九宮.map(cell => ({
            八神: cell.八神,
            九星: cell.九星,
            八門: cell.八門,
            天盤干: cell.天盤干,
            地盤干: cell.地盤干,
            宮位: cell.宮位,
            是否空亡: cell.是否空亡,
            是否驛馬: cell.是否驛馬,
        })),
    };
}

const fixture = JSON.parse(readFileSync(new URL("../__fixtures__/golden-pans.json", import.meta.url), "utf8")) as {cases: GoldenCase[]};

describe.each(fixture.cases)("QimenUtil.create golden $solar", c => {
    it("matches the expected pan", () => {
        const [datePart, timePart] = c.solar.split(" ");
        const [y, m, d] = datePart.split("-").map(Number);
        const [h, mi] = timePart.split(":").map(Number);
        const time = SolarTime.fromYmdHms(y, m, d, h, mi, 0);
        const pan = QimenUtil.create(time);

        expect(pan.lunar.getLunarHour().getLunarDay().toString()).toEqual(c.lunar);
        expect(projectPan(pan)).toEqual(c.pan);
    });
});
