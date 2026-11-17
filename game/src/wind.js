import {angle} from './config.js';
export function updateWind(s,dt){s.wind.dir=s.wind.base+Math.sin(s.time*.027+s.seed)*(.07+s.voyage*.025);s.wind.strength=1+s.voyage*.045+Math.sin(s.time*.15)*.08;}
export function pointOfSail(heading,wind){const a=Math.abs(angle(heading-wind));if(a<Math.PI/4)return {factor:-.035,name:'IN IRONS · TACK!'};return {factor:.58+.42*Math.sin((a-Math.PI/4)*1.36),name:a<1.2?'CLOSE HAULED':a<2?'BEAM REACH':'BROAD REACH'};}
