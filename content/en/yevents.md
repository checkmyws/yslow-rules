---
weight: 250
id: "yevents"
title: "Develop Smart Event Handlers"
yahoo: "http://developer.yahoo.com/performance/rules.html#events"
tags: ["javascript"]
locales: "en"
notoc: "true"
description: ""
---

Sometimes pages feel less responsive because of too many event handlers  attached to different elements of the DOM tree which are then executed  too often. That's why using *event delegation* is a good approach. If  you have 10 buttons inside a `div`, attach only one event handler to the  div wrapper, instead of one handler for each button. Events bubble up so  you'll be able to catch the event and figure out which button it  originated from. 

You also don't need to wait for the onload event in order to start doing  something with the DOM tree. Often all you need is the element you want  to access to be available in the tree. You don't have to wait for all  images to be downloaded. `DOMContentLoaded` is the event you might  consider using instead of onload, but until it's available in all  browsers, you can use the [YUI  Event](http://developer.yahoo.com/yui/event/) utility, which has an  `onAvailable` method. 

For more information check the YUI theatre's ["High Performance Ajax  Applications"](http://yuiblog.com/blog/2007/12/20/video-lecomte/) by  Julien Lecomte.