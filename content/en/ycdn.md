---
weight: 10
id: "ycdn"
title: "Use a Content Delivery Network (CDN)"
yahoo: "http://developer.yahoo.com/performance/rules.html#cdn"
discuss: "http://developer.yahoo.net/blog/archives/2007/04/high_performanc_1.html"
tags: ["server"]
locales: "en"
notoc: "true"
description: ""
---

The user's proximity to your web server has an impact on response times. Deploying your content across multiple, geographically dispersed servers will make your pages load faster from the user's perspective. But where should you start?

As a first step to implementing geographically dispersed content, don't attempt to redesign your web application to work in a distributed architecture. Depending on the application, changing the architecture could include daunting tasks such as synchronizing session state and replicating database transactions across server locations. Attempts to reduce the distance between users and your content could be delayed by, or never pass, this application architecture step.

Remember that 80-90% of the end-user response time is spent downloading all the components in the page: images, stylesheets, scripts, Flash, etc. This is the *Performance Golden Rule*. Rather than starting with the difficult task of redesigning your application architecture, it's better to first disperse your static content. This not only achieves a bigger reduction in response times, but it's easier thanks to content delivery networks.

A content delivery network (CDN) is a collection of web servers distributed across multiple locations to deliver content more efficiently to users. The server selected for delivering content to a specific user is typically based on a measure of network proximity. For example, the server with the fewest network hops or the server with the quickest response time is chosen.

Some large Internet companies own their own CDN, but it's cost-effective to use a CDN service provider, such as [Akamai Technologies](http://www.akamai.com/), [EdgeCast](http://www.edgecast.com/), or [level3](http://www.level3.com/index.cfm?pageID=36). For start-up companies and private web sites, the cost of a CDN service can be prohibitive, but as your target audience grows larger and becomes more global, a CDN is necessary to achieve fast response times. At Yahoo!, properties that moved static content off their application web servers to a CDN (both 3rd party as mentioned above as well as Yahoo’s own [CDN](https://cwiki.apache.org/TS/traffic-server.html)) improved end-user response times by 20% or more. Switching to a CDN is a relatively easy code change that will dramatically improve the speed of your web site.
