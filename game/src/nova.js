import {CX,CY} from './config.js';
import {damageEnemy} from './entities.js';
import {burst,floatText} from './particles.js';
import {sound} from './audio.js';
export function heartburst(s){
 if(s.screen!=='play'||s.flame<15)return false;
 s.flame-=15;s.heartburst=.7;s.shake=14;s.orbs=[];
 for(const e of [...s.enemies]){const phased=e.phased;e.phased=false;damageEnemy(s,e,e.type==='boss'||e.type==='warden'||e.elite?160:120);e.phased=phased;}
 burst(s,CX,CY,'#ffda91',100,650);floatText(s,CX,CY-100,'HEARTBURST · −15 LIGHT','#ffe7b2',28);sound('heartburst');return true;
}
export function drawHeartburst(c,s){
 if(!(s.heartburst>0))return;
 const progress=1-s.heartburst/.7,r=40+progress*820;
 c.save();c.globalAlpha=(1-progress)*.7;const g=c.createRadialGradient(CX,CY,0,CX,CY,r);g.addColorStop(0,'#ffd68b22');g.addColorStop(.8,'#ffa84e08');g.addColorStop(.94,'#ffdc8c44');g.addColorStop(1,'#ffdc8c00');c.fillStyle=g;c.fillRect(0,88,1280,600);
 c.strokeStyle='#ffe6ad';c.lineWidth=3+8*(1-progress);c.beginPath();c.arc(CX,CY,r,0,Math.PI*2);c.stroke();c.restore();
}
