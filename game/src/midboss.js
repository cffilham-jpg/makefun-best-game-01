import {fireOrb,enemy} from './entities.js';
export function updateHeraldWarden(s,e,angle){
 if(e.timer>0)return;
 e.timer=2.8;
 for(const offset of [-.18,0,.18])fireOrb(s,e,angle+offset,130);
 if(s.enemies.length<24)for(const offset of [-1,1])enemy(s,'wisp',e.x+offset*55,e.y+35);
}
