export const STEP=1/60, W=1280,H=720, MAP={w:1800,h:1100};
export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const angle=a=>Math.atan2(Math.sin(a),Math.cos(a));
export const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
