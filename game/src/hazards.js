import {distance} from './config.js';
import {damage} from './ship.js';
export function makeHazards(s){const v=s.voyage;return{storms:Array.from({length:Math.ceil(v/2)},(_,i)=>({x:680+i*300,y:320+(s.seed%5)*70,r:90+v*5,phase:i*3})),whirls:v>1?[{x:1080,y:760,r:75}]:[],pirates:v>=3?[{x:780,y:850,hp:20,age:0,hit:0}]:[]};}
export function updateHazards(s,dt){const p=s.ship;for(const r of s.world.reefs){if(distance(p,r)<r.r+15&&p.hit<=0){damage(s,7*(1-.3*Math.min(2,s.levels.keel)),'Reef collision');p.vx*=.25;p.vy*=.25;p.hit=2.5;if(s.cargo?.trait==='Fragile'){s.cargo.failed=true;s.notice='Porcelain shattered · sail on to safety';}s.fx.push({x:p.x,y:p.y,life:1,type:'spray'});s.sound?.('hit');}}
for(const a of s.hazards.storms){a.x+=Math.sin(s.time*.07+a.phase)*dt*10;if(distance(p,a)<a.r){p.vx+=Math.cos(s.time*2)*dt*65;p.vy+=dt*30;damage(s,dt*(p.sail===2?2.8:p.sail===1?.7:.25),'Storm damage');s.inStorm=true;}}
for(const a of s.hazards.whirls){const d=distance(p,a);if(d<a.r*2){p.vx+=(a.x-p.x)*dt*.5;p.vy+=(a.y-p.y)*dt*.5;}}
for(const a of s.hazards.pirates){a.age+=dt;a.hit=Math.max(0,a.hit-dt);const d=distance(a,p);if(a.age<20&&d<700){a.x+=(p.x-a.x)/Math.max(1,d)*dt*(72+s.voyage*4);a.y+=(p.y-a.y)/Math.max(1,d)*dt*(72+s.voyage*4);}if(d<34&&a.hit<=0){damage(s,11,'Pirate ram');s.gold=Math.max(0,s.gold-15);a.hit=4;s.notice='Pirates rammed us! −15 gold';s.sound?.('hit');}}
}
