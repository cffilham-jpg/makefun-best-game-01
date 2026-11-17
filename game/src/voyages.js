import {archipelago} from './islands.js';
import {makeHazards} from './hazards.js';
import {contracts} from './cargo.js';
export const names=['','The Saffron Road','Foam & Fortune','Blackflag Waters','The Turning Gale','Teeth of the Sea','The Last Lantern','The Starlight Charter'];
export function prepareVoyage(s){s.world=archipelago(s.seed,s.voyage);s.ship.x=210;s.ship.y=810;s.ship.vx=s.ship.vy=0;s.ship.heading=-.6;s.wind={base:-1.65+(s.seed%7)*.2,dir:-1.1,strength:1};s.hazards=makeHazards(s);s.king={x:1000,y:200,clock:3,strikes:[]};s.contracts=contracts(s);s.cargo=null;s.screen='contract';s.fx=[];}
