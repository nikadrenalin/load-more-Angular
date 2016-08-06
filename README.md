
Start progect:
	
	need installed: 
		Node.js v4.4.4^, 
		npm v3.10.5^, 
		bower v 1.7.9^,
		git;

	clone repository:
		git clone https://goodnesman@bitbucket.org/goodnesman/requestum-job-test.git

	start console on root directory and run:
		npm install,
		bower install,
		gulp serve - start node server

	run api server separately:
		default 'http://localhost.jobtestrequestum/server/list.php';
		./src/app/index.constants.js - file change server address;


Directory structure:
	
	./dist - builded version progect;
	./src - folder main  project;
	./src/app/index.constants.js - config for project;
	./server - api server, must install separately on php server (default 'http://localhost.jobtestrequestum/server/list.php');
