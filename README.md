# Emberward
[![make.fun · best-game-01](https://make.fun/badge/best-game-01.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![rank](https://make.fun/badge/best-game-01/cffilham-jpg/makefun-best-game-01/rank.svg)](https://make.fun/bounty/best-game-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![reward](https://make.fun/badge/best-game-01/cffilham-jpg/makefun-best-game-01/reward.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)

Built for the [make.fun best-game-01 competition](https://make.fun/bounty/best-game-01).

An original arena defense shooter. Guard the last Heartflame through ten waves, choose a boon between waves, and defeat the two-phase Gloom Herald.

Run `node serve.ts` and open http://localhost:8080. No installation or build needed.

WASD / arrows move, mouse aims, hold left click or Space to shoot. Shift or right-click dashes toward movement (or aim while still), with brief invulnerability and a 2.5-second recharge. Enter starts / restarts. P / Escape pauses, M mutes. Choose boons with 1–3 or the mouse. Stay near the flame to slowly restore your hull; collect enemy drops for repairs, shields, rapid fire and ember bombs.

All graphics are canvas art and all audio is synthesized locally.

Wraiths phase and blink toward you; weavers keep their distance and fire three-orb bursts. Gold-ring elites have triple hull and guaranteed drops. Waves 3, 6 and 9 are faster Surge assaults worth 50% more score. Sixteen boons include critical hits, kill healing, heavier rounds, flame protection, faster dash recovery and an opening Ember nova. Boss phases, remaining foes and dash recharge are visible in the HUD.

## Spend the light you swore to save

Press **E** to plant an **Ember Ward** at your position for **10 light** (must have more than 10). Keep up to **3**: each auto-fires at nearby foes, survives between waves, and has 60 HP. Enemy contact and orbs destroy wards. Spend light on defense, save it for Heartburst, or hoard it to survive.

Press **Q or F** for **Heartburst**: spend 15 Heartflame light to scorch every enemy (including phased Wraiths) and erase enemy orbs. Normal foes take 120 damage; elites and bosses take 160. There is no cooldown: each desperate blast spends the very light you must defend. Ember nova remains a separate opening-wave boon.

Select **Ember / Ash / Cinder** on the title with the mouse or left/right arrows; Ash is the default. Ember reduces enemy hull by 25% and slows flame drain; Cinder increases enemy hull and speed by 30%, drains light faster, and awards 50% more score. Your selection persists on restart.

Each boon screen has one free **R** reroll (or click REROLL), offering three different blessings. Wave 5 brings the **Herald Warden**, whose defeat grants an immediate bonus boon before the same wave resumes. Below 25% hull, the final Gloom Herald enrages with faster movement, rings and spiral fire.

After victory, press **N** or click **CONTINUE — THE LONG NIGHT** for endless waves beyond 10. Your build and score carry forward, enemy hull and speed keep scaling, flame drain rises, and no further bosses spawn. Enter still restarts a fresh ten-wave oath.
