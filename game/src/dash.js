import {clamp} from './config.js';
import {burst} from './particles.js';
import {sound} from './audio.js';
export function updateDash(s,input,dx,dy,dt){const p=s.player;p.dashCooldown=Math.max(0,(p.dashCooldown||0)-dt);if(!input.dash)return;input.dash=false;if(p.dashCooldown>0)return;const a=dx||dy?Math.atan2(dy,dx):p.angle;p.dashCooldown=2.5*(p.dashRate||1);p.inv=Math.max(p.inv,.28);for(let i=0;i<8;i++){burst(s,p.x,p.y,'#ffe1a1',3,35);p.x=clamp(p.x+Math.cos(a)*19,38,1242);p.y=clamp(p.y+Math.sin(a)*19,110,669);}sound('dash');}
