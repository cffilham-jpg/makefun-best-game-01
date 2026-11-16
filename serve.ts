import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(process.env.GAME_ROOT || fileURLToPath(new URL('./game',import.meta.url)));
const types = {'.html':'text/html','.js':'text/javascript','.jpg':'image/jpeg','.json':'application/json'};
createServer(async(req,res)=>{
 try {
  const pathname=decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
  const path=resolve(root,'.'+(pathname.endsWith('/')?pathname+'index.html':pathname));
  if(!path.startsWith(root+sep)) {res.writeHead(403).end();return;}
  const data=await readFile(path);
  res.writeHead(200,{'Content-Type':types[extname(path)] || 'application/octet-stream','Cache-Control':'no-store'}).end(data);
 } catch {res.writeHead(404).end('Not found');}
}).listen(Number(process.env.PORT || 8080),'127.0.0.1',()=>console.log('Emberward: http://localhost:'+(process.env.PORT || 8080)));
