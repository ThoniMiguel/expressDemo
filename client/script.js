const promise = fetch("http://localhost:3000/");
promise.then(data => document.write(data));