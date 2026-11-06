# qimen

**Qi Men Dun Jia (奇门遁甲) chart calculation for TypeScript — by [AstroZi](https://astrozi.ai)**

Deterministic Qimen Dun Jia charts: yin/yang dun (阴阳遁), ju number (局数), the earth and heaven plates (地盘/天盘), nine stars (九星), eight doors (八门), eight gods (八神), zhi fu / zhi shi (值符/值使), void (空亡), horse (驿马) and the wang-xiang-xiu-qiu-si cycle (旺相休囚死).

> **Status: pre-release.** The package below is reserved and the API is not published yet. Watch the repository for the first release.

想在线排奇门盘？在 [AstroZi](https://astrozi.ai) 即可看到完整分析。
Want a full chart reading? Try it on [AstroZi](https://astrozi.ai).

## Packages

| Package | What it does | Status |
| --- | --- | --- |
| [`@iching/qimen-core`](packages/qimen-core) | Full chart casting (排盘) from a `tyme4ts` solar time: dun, ju, plates, stars, doors, gods, zhi fu/zhi shi, void, horse | planned |

## Scope

This repository calculates charts. It does not interpret them: 格局 (pattern) tables, scoring, 神煞 and UI rendering are not part of this package.

Calendar and ganzhi conversion use [`tyme4ts`](https://github.com/6tail/tyme4ts). Pan fields are calendar-numeric and timezone-independent; the four pillars (八字) follow tyme4ts's exact-moment term boundaries, while the dun/ju switch follows the solar-term day (交节日当天即用新节气).

## Development

```sh
bun install
bun run check
```

## License

[MIT](LICENSE) © AstroZi
