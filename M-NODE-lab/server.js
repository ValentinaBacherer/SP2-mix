const http = require("http");
const moduleMentorService = require("./mentoresService");
const PORT = 8080;


http
  .createServer((req, res) => { 
    const mentorList = moduleMentorService.mentorsListFunction();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify( mentorList ));
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Ada Web server running on http://localhost:${PORT}`);
  });
    