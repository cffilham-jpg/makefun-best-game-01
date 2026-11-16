import {placeWard} from './wards.js';
import {continueLongNight} from './endless.js';
import {selectDifficulty} from './difficulty.js';
import {heartburst} from './nova.js';
import {STEP} from './config.js';
import {createState,begin,step} from './state.js';
import {createInput} from './input.js';
import {render} from './render.js';
import {unlock,toggleMute,ambient} from './audio.js';
import {takeBoon,rerollBoons} from './boons.js';
import {startWave} from './waves.js';
import {stageShot} from './shots.js';
const canvas=document.getElementById('game'),ctx=canvas.getContext('2d');const query=new URLSearchParams(location.search),shot=query.get('shot');let state=shot?stageShot(shot,Number(query.get('seed'))||1):createState();
function restart(){const muted=state.muted,difficulty=state.difficulty;state=createState();state.muted=muted;state.difficulty=difficulty;begin(state);}
function choose(index){takeBoon(state,index);if(state.resumeWave){state.resumeWave=false;state.screen='play';}else startWave(state);}
const input=createInput(canvas,key=>{if(shot)return;if(key!=='Blur')unlock();if(key==='KeyM'){state.muted=toggleMute();return;}if(state.screen==='victory'&&(key==='KeyN'||key==='Click'&&input.x>=445&&input.x<=835&&input.y>=615&&input.y<=663)){continueLongNight(state);return;}if(state.screen==='title'){if(key==='ArrowLeft'||key==='ArrowRight'){selectDifficulty(state,key==='ArrowLeft'?-1:1);return;}if(key==='Click'&&input.y>=360&&input.y<=408&&input.x>=340&&input.x<=940){state.difficulty=Math.min(2,Math.floor((input.x-340)/200));return;}}if(state.screen==='title'||state.screen==='victory'||state.screen==='defeat'){if(key==='Enter'||key==='Click'&&input.x>=505&&input.x<=775&&input.y>490&&input.y<610)restart();return;}if(key==='KeyP'||key==='Escape'||key==='Blur'){if(state.screen==='play')state.screen='pause';else if(state.screen==='pause'&&key!=='Blur')state.screen='play';return;}if(state.screen==='play'&&key==='KeyE'){placeWard(state);return;}if(state.screen==='play'&&(key==='KeyQ'||key==='KeyF')){heartburst(state);return;}if(state.screen==='pause'){if(key==='Enter'||key==='Click'&&input.y>366&&input.y<414)state.screen='play';if(key==='KeyR'||key==='Click'&&input.y>429&&input.y<477)restart();return;}if(state.screen==='boon'){if(key==='KeyR'||key==='Click'&&input.x>=505&&input.x<=775&&input.y>=548&&input.y<=596){rerollBoons(state);return;}if(['Digit1','Digit2','Digit3'].includes(key))choose(Number(key.slice(-1))-1);else if(key==='ArrowRight')state.selected=(state.selected+1)%3;else if(key==='ArrowLeft')state.selected=(state.selected+2)%3;else if(key==='Enter')choose(state.selected);else if(key==='Click'&&input.y>308&&input.y<528){const index=Math.floor((input.x-190)/310);if(index>=0&&index<3&&input.x<190+index*310+280)choose(index);}}});
// Expose read-only state inspection for local play testing; game rules remain in their modules.
window.emberward={get state(){return state;}};
if(shot){render(ctx,state,input);window.__shotReady=true;}else{let last=performance.now(),accumulator=0;function frame(now){accumulator+=Math.min(.1,(now-last)/1000);last=now;while(accumulator>=STEP){if(state.screen!=='pause'&&state.screen!=='boon')step(state,input,STEP);accumulator-=STEP;}ambient(state.time);render(ctx,state,input);requestAnimationFrame(frame);}requestAnimationFrame(frame);}
