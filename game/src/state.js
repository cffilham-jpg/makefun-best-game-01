import {randomSource} from './rng.js';
import {loadBest,saveBest} from './storage.js';
import {kill,updateEntities} from './entities.js';
import {updatePickups} from './pickups.js';
import {updateWave,startWave} from './waves.js';
import {updateParticles} from './particles.js';
import {sound} from './audio.js';
export function createState(seed=Date.now()){const s={rng:randomSource(seed),screen:'title',difficulty:1,elapsed:0,time:0,wave:0,waveTime:0,score:0,best:loadBest(),combo:0,comboTimer:0,kills:0,shots:0,hits:0,flame:100,shake:0,damageFlash:0,banner:0,muted:false,owned:[],enemies:[],bullets:[],orbs:[],particles:[],texts:[],pickups:[],selected:0,player:{x:640,y:500,vx:0,vy:0,hp:100,max:100,speed:275,damage:20,rate:.18,cool:0,angle:-1.57,inv:0,shield:0,rapid:0,spread:0,pierce:0,magnet:0,orbits:0,mult:1,muzzle:0}};s.kill=e=>kill(s,e);s.finish=(won,cause='')=>{if(s.screen!=='play')return;s.screen=won?'victory':'defeat';s.cause=cause;s.best=Math.max(s.best,Math.floor(s.score));saveBest(s.best);sound(won?'victory':'defeat');};return s;}
export function begin(s){startWave(s);}
export function step(s,input,dt){s.time+=dt;s.heartburst=Math.max(0,(s.heartburst||0)-dt);s.clearFlash=Math.max(0,(s.clearFlash||0)-dt);updateParticles(s,dt);s.shake=Math.max(0,s.shake-dt*25);s.damageFlash=Math.max(0,s.damageFlash-dt);s.banner=Math.max(0,s.banner-dt);if(s.screen!=='play')return;if(s.hitStop>0){s.hitStop-=dt;return;}s.elapsed+=dt;s.comboTimer-=dt;if(s.comboTimer<=0)s.combo=0;updateEntities(s,input,dt);if(s.screen!=='play')return;updatePickups(s,dt);updateWave(s,dt);}
