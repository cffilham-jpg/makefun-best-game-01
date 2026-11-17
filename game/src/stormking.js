import {distance} from './config.js';
import {damage} from './ship.js';
export function huntStormKing(s,dt){if(s.voyage!==7)return;const b=s.king,p=s.ship,d=distance(b,p);b.x+=(p.x-b.x)/Math.max(d,1)*dt*39;b.y+=(p.y-b.y)/Math.max(d,1)*dt*39;b.clock-=dt;if(d<150)damage(s,dt*(p.sail===2?4:1.5),'The Storm King');if(b.clock<0){b.strikes.push({x:p.x+p.vx*.7,y:p.y+p.vy*.7,t:1.6});b.clock=4.5;}b.strikes=b.strikes.filter(a=>{a.t-=dt;if(a.t<=0){if(distance(a,p)<57)damage(s,20,'Royal lightning');s.flash=.25;return false;}return true;});}
