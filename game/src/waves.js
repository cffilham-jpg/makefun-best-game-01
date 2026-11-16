import {enemy} from './entities.js';
import {offerBoons} from './boons.js';
import {sound} from './audio.js';
export function startWave(s){s.wave++;s.waveTime=0;s.spawnTimer=1;s.pending=s.wave===10?9:8+s.wave*3;s.banner=3;s.screen='play';s.flame=Math.min(100,s.flame+6);if(s.wave===10){enemy(s,'boss',640,160);sound('boss');}else sound('wave');}
export function updateWave(s,dt){s.waveTime+=dt;s.spawnTimer-=dt;if(s.pending>0&&s.spawnTimer<=0){s.pending--;s.spawnTimer=Math.max(.32,1.05-s.wave*.055);const kinds=['wisp','dasher','spitter','splitter','brute'];let type=kinds[Math.floor(s.rng()*Math.min(5,1+Math.floor(s.wave/2)))];if(s.wave>2&&s.rng()<.15)type='brute';const edge=Math.floor(s.rng()*4),v=s.rng();enemy(s,type,edge===0?30:edge===1?1250:70+v*1140,edge===2?110:edge===3?665:130+v*520);}if(s.pending===0&&s.enemies.length===0&&s.waveTime>3){s.orbs=[];if(s.wave===10)s.finish(true);else{offerBoons(s);s.screen='boon';sound('pickup');}}}
