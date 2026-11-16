import {distance} from './config.js';
import {burst,floatText} from './particles.js';
import {sound} from './audio.js';
export const pickupColors={repair:'#83edb8',shield:'#81d9ff',rapid:'#ffe88b',bomb:'#ff9385'};
export function dropPickup(s,x,y,type){s.pickups.push({x,y,type:type||['repair','shield','rapid','bomb'][Math.floor(s.rng()*4)],life:16});}
export function updatePickups(s,dt){for(const q of s.pickups){q.life-=dt;const d=distance(q,s.player);if(d<85+s.player.magnet){q.x+=(s.player.x-q.x)*dt*5;q.y+=(s.player.y-q.y)*dt*5;}if(d<23){q.life=0;const p=s.player;if(q.type==='repair'){p.hp=Math.min(p.max,p.hp+25);s.flame=Math.min(100,s.flame+5);}if(q.type==='shield')p.shield=15;if(q.type==='rapid')p.rapid=9;if(q.type==='bomb'){for(const e of s.enemies)if(e.type!=='boss'&&e.type!=='brute'){e.hp=0;s.kill(e);}s.shake=16;burst(s,p.x,p.y,'#ffcf7e',70,450);}burst(s,q.x,q.y,pickupColors[q.type]);floatText(s,q.x,q.y-25,q.type.toUpperCase(),pickupColors[q.type]);sound('pickup');}}s.pickups=s.pickups.filter(q=>q.life>0);}
