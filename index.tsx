const server = Bun.serve({
    port: Bun.env.PORT || 5000, 
    fetch(req) {
    //   return new Response("Hello World!");
    const url = new URL(req.url);
    if(url.pathname === "/") return new Response("HomePage!");
    if(url.pathname === "/blog") return new Response("BlogPage!");
    return new Response("404!");
    },
});

console.log(`Listening on port ${server.port}`);