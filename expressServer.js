const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','createProject.html')));
			this.app.get('/createProject', (req, res) => res.sendFile(path.join(__dirname,'html','createProject.html')));
			this.app.get('/createProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','createProject.html')));
			this.app.get('/viewAll', (req, res) => res.sendFile(path.join(__dirname,'html','viewAll.html')));
			this.app.get('/viewAll/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewAll.html')));
			this.app.get('/viewProject', (req, res) => res.sendFile(path.join(__dirname,'html','viewProject.html')));
			this.app.get('/viewProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewProject.html')));
			this.app.get('/updateProject', (req, res) => res.sendFile(path.join(__dirname,'html','updateProject.html')));
			this.app.get('/updateProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updateProject.html')));
			this.app.get('/viewAllProjects', (req, res) => res.sendFile(path.join(__dirname,'html','viewAllProjects.html')));
			this.app.get('/viewAllProjects/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewAllProjects.html')));
			this.app.get('/createWorkpackage', (req, res) => res.sendFile(path.join(__dirname,'html','createWorkpackage.html')));
			this.app.get('/createWorkpackage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','createWorkpackage.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;