import {fireOrb} from './entities.js';
import {floatText} from './particles.js';
import {sound} from './audio.js';
export function updateBossEnrage(s,e,dt){
 if(e.hp>=e.max*.25)return;
 if(!e.enraged){e.enraged=true;e.timer=Math.min(e.timer,.3);sound('phase');floatText(s,640,260,'THE HERALD RAGES','#ff827b',30);s.shake=12;}
 e.spiralTimer=(e.spiralTimer||0)-dt;
 if(e.spiralTimer<=0){e.spiralTimer=.13;fireOrb(s,e,e.age*3.8,145);fireOrb(s,e,e.age*3.8+Math.PI,145);}
}
