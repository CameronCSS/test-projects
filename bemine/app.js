const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

    http.createServer(function (request, response) {
        // error checking file routes
        console.log('request ', request.url);
        let filePath = request.url;

        if (filePath == '/') {
            filePath = 'index.html';
        }
        else {
            filePath = 'public' + request.url;
        }

        let extname = String(path.extname(filePath)).toLowerCase();
        let mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml'
        };

        let contentType = mimeTypes[extname] || 'application/octet-stream';

        fs.readFile(filePath, function(error, content) {
            if (error) {
                if(error.code == 'ENOENT') {
                    fs.readFile('public/404.html', function(error, content) {
                        response.writeHead(404, { 'Content-Type': 'text/html' });
                        response.end(content, 'utf-8');
                    });
                }
                else {
                    response.writeHead(500);
                    response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                }
            }
            else {
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            }
        });

    }).listen(port);
    console.log(`Server running at http://${hostname}:${port}/`);