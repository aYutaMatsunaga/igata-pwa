/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js')
importScripts('https://www.gstatic.com/firebasejs/5.5.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.5.1/firebase-messaging.js')

firebase.initializeApp({
  messagingSenderId: '532894596394',
})

firebase.messaging()

workbox.core.skipWaiting()
workbox.core.clientsClaim()

// workbox.routing.registerRoute(new RegExp('https://hacker-news.firebaseio.com'), new workbox.strategies.StaleWhileRevalidate())

self.addEventListener('push', event => {
  const title = 'Get Started With Workbox'
  const options = {
    body: event.data.text(),
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

// workbox.precaching.precacheAndRoute(self.__precacheManifest)
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)
