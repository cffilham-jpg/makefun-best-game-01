import {clamp} from './config.js';
import {pointOfSail} from './wind.js';
export function makeShip(){return{x:210,y:810,heading:-.5,turn:0,vx:0,vy:0,speed:0,sail:2,hull:100,maxHull:100,brace:0,shield:0,hit:0};}
export function sailShip(s,k,dt){const p=s.ship;const trim=[.06,.62,1][p.sail];p.turn+=(k.turn*(.9+s.levels.rudder*.225)*(p.sail===2?.78:1.15)-p.turn)*dt*4;p.heading+=p.turn*dt;const polar=pointOfSail(p.heading,s.wind.dir);s.point=polar.name;let target=125*trim*polar.factor*s.wind.strength*(1+s.levels.sail*.12)*(s.cargo?.trait==='Heavy'?.85:1);const drag=p.sail===0?3: .68; p.vx+=(Math.cos(p.heading)*target-p.vx)*dt*drag;p.vy+=(Math.sin(p.heading)*target-p.vy)*dt*drag;p.x=clamp(p.x+p.vx*dt,25,1775);p.y=clamp(p.y+p.vy*dt,25,1075);p.speed=Math.hypot(p.vx,p.vy);p.brace=Math.max(0,p.brace-dt);p.shield=Math.max(0,p.shield-dt);p.hit=Math.max(0,p.hit-dt);}
export function damage(s,n,cause){const p=s.ship;if(p.shield>0)n*=.5;p.hull-=n;s.cause=cause;s.shake=Math.min(9,n);}
