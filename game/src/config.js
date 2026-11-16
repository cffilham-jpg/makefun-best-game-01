export const W=1280,H=720,CX=640,CY=380,STEP=1/60;
export const colors={wisp:'#ac8dff',dasher:'#ff668a',spitter:'#62dfd2',splitter:'#d3a0ff',brute:'#8094ff',boss:'#f18bff',mini:'#ac8dff'};
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
// Distance from the Heartflame within which the Warden regenerates hull.
export const FLAME_REGEN_RADIUS = 105;
