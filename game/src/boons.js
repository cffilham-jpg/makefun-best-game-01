export const boons=[
 ['kindle','Kindled rounds','+25% shot damage','✦',s=>s.player.damage*=1.25],
 ['tempo','Quickened hands','Fire 18% faster','»',s=>s.player.rate*=.82],
 ['stride','Ashwalk','+16% movement speed','↗',s=>s.player.speed*=1.16],
 ['hull','Golden vessel','+25 max hull & restore 40','+',s=>{s.player.max+=25;s.player.hp=Math.min(s.player.max,s.player.hp+40);}],
 ['repair','Rekindle','Restore 38 Heartflame light','☀',s=>s.flame=Math.min(100,s.flame+38)],
 ['spread','Forked fire','Add a pair of spread shots','⋔',s=>s.player.spread++],
 ['pierce','Sun needle','Shots pierce one more foe','→',s=>s.player.pierce++],
 ['magnet','Ember affinity','Pull drops from farther away','◎',s=>s.player.magnet+=100],
 ['orbit','Satellite ember','An orbiting ember burns foes','◈',s=>s.player.orbits++],
 ['swift','Swiftstep','Dash recovers 35% faster','↯',s=>s.player.dashRate=(s.player.dashRate||1)*.65],
 ['focus','Deadly focus','+15% chance of double damage','✧',s=>s.player.crit=(s.player.crit||0)+.15],
 ['siphon','Siphon','Kills restore 2 hull','♡',s=>s.player.siphon=(s.player.siphon||0)+2],
 ['heavy','Heavy shot','+30% shot speed and size','●',s=>s.player.heavy=(s.player.heavy||1)*1.3],
 ['ward','Flame ward','Heartflame drains 40% slower','◇',s=>s.player.ward=(s.player.ward||1)*.6],
 ['nova','Ember nova','Wave start burns foes near flame','☼',s=>s.player.nova=(s.player.nova||0)+80],
 ['fortune','Radiant oath','+25% score for every kill','×',s=>s.player.mult+=.25]
];
export function offerBoons(s,exclude=[]){const pool=boons.filter(b=>!exclude.includes(b[0]));s.rerolls=1;s.choices=[];for(let i=0;i<3;i++)s.choices.push(pool.splice(Math.floor(s.rng()*pool.length),1)[0]);s.selected=0;}
export function takeBoon(s,index){const b=s.choices[index];if(!b)return;b[4](s);s.owned.push(b[0]);}

export function rerollBoons(s){if(s.screen!=='boon'||!s.rerolls)return false;const previous=s.choices.map(b=>b[0]);offerBoons(s,previous);s.rerolls=0;return true;}
