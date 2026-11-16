import {startWave} from './waves.js';
export function continueLongNight(s){
 if(s.screen!=='victory'||s.wave!==10)return false;
 s.endless=true;s.enemies=[];s.orbs=[];s.bullets=[];s.player.inv=2;startWave(s);return true;
}
