# @iching/qimen-core

Qi Men Dun Jia (奇门遁甲) chart calculation.

`QimenUtil.create(lunar)` returns one `QimenPan`: 八字, 上中下元, 阴阳遁, 局数, 旬首, 遁干, 值符星/落宫, 值使门/落宫, 空亡, 驿马, 天乙星, 旺相休囚死 and the nine palaces (九宫) with 八神, 九星, 八门, 天盘干, 地盘干, 空亡 and 驿马 markers per palace. Helper modules: `LunarUtil` (pillars and solar term), `AstrologicalTimeUtil` (天显时格 / 五不遇时 / 时干入墓), `QimenFormatUtil`, and the lookup tables in `dictionary.ts`.

```ts
import {SolarTime} from "tyme4ts";
import {QimenUtil} from "@iching/qimen-core";

const pan = QimenUtil.create(SolarTime.fromYmdHms(2024, 5, 10, 14, 30, 0));
QimenUtil.prettyLog(pan);
```

> Pre-release: not published yet. See the [repository README](../../README.md).

By [AstroZi](https://astrozi.ai) · MIT
