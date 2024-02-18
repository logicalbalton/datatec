self.addEventListener("install",e=>{
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./assets/css/style.css","./assets/images/tapclone64.png","./assets/images/tapclone512.png","./about.html","./contact.html","./project.html","./project2.html","./project3.html","./project4.html","./protfolio.html","./services.html","./assets/css/plugins.css","./assets/images/backgrounds/gmb page.jpg","./assets/images/backgrounds/pexels-photo-1287145.jpeg","./assets/images/backgrounds/pic1.jpg","./assets/images/backgrounds/pic2.jpg","./assets/images/backgrounds/pic4.jpg","./assets/images/backgrounds/pic5.jpg","./assets/images/backgrounds/pic6.jpg","./assets/images/backgrounds/pic8.jpg","./assets/images/backgrounds/pic9.jpg","./assets/images/backgrounds/pic10.jpg","./assets/js/main.js","./assets/js/particles_init.js","./assets/js/plugins.js","./assets/js/typewriter.js"]);
        })
    )
})


self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);

        })
    )
})