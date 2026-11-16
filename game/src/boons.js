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
 ['fortune','Radiant oath','+25% score for every kill','×',s=>s.player.mult+=.25]
];
export function offerBoons(s){const pool=[...boons];s.choices=[];for(let i=0;i<3;i++)s.choices.push(pool.splice(Math.floor(s.rng()*pool.length),1)[0]);s.selected=0;}
export function takeBoon(s,index){const b=s.choices[index];if(!b)return;b[4](s);s.owned.push(b[0]);}
