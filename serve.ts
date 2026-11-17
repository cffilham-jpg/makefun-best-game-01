import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve(process.env.GAME_ROOT||'game');
createServer(async(req,res)=>{try{const path=resolve(root,'.'+decodeURIComponent(new URL(req.url||'/','http://localhost').pathname));if(!path.startsWith(root+'/')&&path!==root)throw Error();const file=path===root?path+'/index.html':path;const data=await readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html','.css':'text/css','.js':'text/javascript'} as Record<string,string>)[extname(file)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(Number(process.env.PORT||8080),()=>console.log('Tradewinds http://localhost:'+(process.env.PORT||8080)));
