import {makeShip,sailShip} from './ship.js';
import {prepareVoyage} from './voyages.js';
import {updateWind} from './wind.js';
import {updateHazards} from './hazards.js';
import {huntStormKing} from './stormking.js';
import {updateCargo} from './cargo.js';
import {saveBest} from './storage.js';
export function newRun(seed=1){const s={seed,screen:'title',voyage:1,completed:0,ship:makeShip(),gold:35,earned:0,score:0,time:0,deliveries:0,levels:{hull:0,sail:0,rudder:0,compass:0,keel:0},fx:[],notice:'',shake:0,flash:0,point:'BEAM REACH',muted:false};prepareVoyage(s);s.screen='title';return s;}
export function step(s,k={},dt=1/60){if(s.screen!=='play')return;s.time+=dt;s.inStorm=false;s.shake*=.9;s.flash=Math.max(0,s.flash-dt);updateWind(s,dt);sailShip(s,{turn:k.turn||0},dt);updateHazards(s,dt);huntStormKing(s,dt);if(s.inStorm&&Math.floor(s.time/6)!==Math.floor((s.time-dt)/6))s.sound?.('thunder');if(Math.abs(s.ship.turn)>.4&&Math.floor(s.time/4)!==Math.floor((s.time-dt)/4))s.sound?.('creak');if(s.ship.hull<=0){s.ship.hull=0;s.screen='defeat';s.sound?.('defeat');saveBest(s);return;}if(updateCargo(s,dt)){s.sound?.('bell');s.screen=s.voyage===7?'victory':'shop';if(s.screen==='victory'){s.sound?.('victory');saveBest(s);}}s.fx.forEach(a=>a.life-=dt);s.fx=s.fx.filter(a=>a.life>0);if(Math.floor(s.time*20)!==Math.floor((s.time-dt)*20))s.fx.push({x:s.ship.x,y:s.ship.y,life:1.8,type:'wake'});}
