if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('s2.js')
        .then(() => { console.log('Service Worker Registered')});
}

