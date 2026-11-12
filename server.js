'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const ROOT = __dirname;
const HOST = process.env.HOST || '0.0.0.0';
const PORT = Number(process.env.PORT || 4173);
const TYPES = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.ico':'image/x-icon','.md':'text/markdown; charset=utf-8'};
function lanAddresses(){const out=[];for(const entries of Object.values(os.networkInterfaces()))for(const item of entries||[])if(item.family==='IPv4'&&!item.internal)out.push(item.address);return out;}
const server=http.createServer((req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});return res.end('Method Not Allowed');}
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);return res.end('Bad Request');}
 if(pathname==='/')pathname='/index.html';
 const target=path.resolve(ROOT,'.'+pathname);
 if(target!==ROOT&&!target.startsWith(ROOT+path.sep)){res.writeHead(403);return res.end('Forbidden');}
 fs.stat(target,(err,stat)=>{if(err||!stat.isFile()){res.writeHead(404);return res.end('Not Found');}
 res.writeHead(200,{'Content-Type':TYPES[path.extname(target).toLowerCase()]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
 if(req.method==='HEAD')return res.end();fs.createReadStream(target).pipe(res);});
});
server.listen(PORT,HOST,()=>{console.log('\nNexusAI WorkRoom local preview is running.');console.log('This computer: http://localhost:'+PORT);for(const ip of lanAddresses())console.log('Same Wi-Fi/LAN: http://'+ip+':'+PORT);console.log('\nPress Ctrl+C to stop.');});
server.on('error',err=>{console.error('Cannot start server: '+err.message);if(err.code==='EADDRINUSE')console.error('Port '+PORT+' is already in use. Set PORT=4174 and try again.');process.exitCode=1;});
