export function burst(s,x,y,color,count=16,power=140){for(let i=0;i<count;i++){const a=s.rng()*Math.PI*2,v=power*(.25+s.rng());s.particles.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:.4+s.rng()*.65,max:1,color,size:1+s.rng()*3});}}
export function floatText(s,x,y,text,color='#ffdb8a'){s.texts.push({x,y,text,color,life:1.1});}
export function updateParticles(s,dt){for(const p of s.particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=.97;p.vy*=.97;p.life-=dt;}s.particles=s.particles.filter(p=>p.life>0);for(const p of s.texts){p.y-=27*dt;p.life-=dt;}s.texts=s.texts.filter(p=>p.life>0);}
