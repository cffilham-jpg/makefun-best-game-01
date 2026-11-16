import {burst,floatText} from './particles.js';
import {sound} from './audio.js';
export const WARD_COST=10, WARD_MAX=3;
export function placeWard(s){
 if(s.screen!=='play')return false;
 const message=s.wards.length>=WARD_MAX?'WARD LIMIT REACHED':s.flame<=WARD_COST?'NOT ENOUGH LIGHT':'';
 if(message){floatText(s,s.player.x,s.player.y-35,message);return false;}
 s.flame-=WARD_COST;
 const w={x:s.player.x,y:s.player.y,r:16,hp:60,max:60,cool:0,flash:0,ring:.5};
 s.wards.push(w);burst(s,w.x,w.y,'#ffc568',25,110);floatText(s,w.x,w.y-40,'EMBER WARD · −10 LIGHT');sound('wardPlace');return true;
}
export function updateWards(s,dt){
 for(const w of s.wards){
  w.cool-=dt;w.flash=Math.max(0,w.flash-dt);w.ring=Math.max(0,w.ring-dt);
  for(const e of s.enemies)if(!e.dead&&!e.phased&&Math.hypot(e.x-w.x,e.y-w.y)<e.r+w.r)w.hp-=25*dt;
  for(const o of s.orbs)if(o.life>0&&Math.hypot(o.x-w.x,o.y-w.y)<w.r+(o.r||7)){w.hp-=10;o.life=0;}
  if(w.hp<=0){burst(s,w.x,w.y,'#ff9b53',32,170);floatText(s,w.x,w.y-32,'WARD LOST');sound('wardLost');continue;}
  let target,range=320;
  for(const e of s.enemies){const d=Math.hypot(e.x-w.x,e.y-w.y);if(!e.dead&&!e.phased&&d<range){range=d;target=e;}}
  if(target&&w.cool<=0){const a=Math.atan2(target.y-w.y,target.x-w.x);w.cool=.5;w.flash=.12;s.bullets.push({x:w.x,y:w.y,vx:Math.cos(a)*520,vy:Math.sin(a)*520,life:1,pierce:0,hit:new Set(),ward:true,damage:20,size:4});}
 }
 s.wards=s.wards.filter(w=>w.hp>0);s.orbs=s.orbs.filter(o=>o.life>0);
}
export function drawWards(c,s){
 c.save();
 for(const w of s.wards){
  c.shadowColor='#ffb63e';c.shadowBlur=w.flash>0?32:17;c.lineWidth=2.5;c.strokeStyle='#ffc568';c.fillStyle='#392b26';
  c.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3;c.lineTo(w.x+Math.cos(a)*20,w.y+Math.sin(a)*20);}c.closePath();c.fill();c.stroke();
  c.beginPath();c.arc(w.x,w.y,26,0,Math.PI*2);c.strokeStyle='#d9964d88';c.lineWidth=1;c.stroke();
  if(w.ring>0){c.beginPath();c.arc(w.x,w.y,26+(1-w.ring/.5)*40,0,Math.PI*2);c.strokeStyle=`rgba(255,205,120,${w.ring*2})`;c.stroke();}
  c.fillStyle=w.flash>0?'#ffffff':'#ffe5a1';c.beginPath();c.moveTo(w.x,w.y-15);c.lineTo(w.x+8,w.y);c.lineTo(w.x,w.y+10);c.lineTo(w.x-8,w.y);c.closePath();c.fill();
  c.shadowBlur=0;c.lineWidth=3;c.strokeStyle='#55423a';c.beginPath();c.arc(w.x,w.y,30,Math.PI*1.15,Math.PI*1.85);c.stroke();c.strokeStyle='#ffe0a0';c.beginPath();c.arc(w.x,w.y,30,Math.PI*1.15,Math.PI*(1.15+.7*w.hp/w.max));c.stroke();
  c.font='600 10px sans-serif';c.textAlign='center';c.fillStyle='#f8cf8d';c.fillText('WARD',w.x,w.y+42);
 }
 c.restore();
}
