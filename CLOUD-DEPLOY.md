# Yatra cloud-ready package

This folder contains the original Yatra application and transit data, plus a small runtime-only network binding helper and Render configuration. The original `index.html`, `server.js`, and transit data are unchanged. Yatra needs no API key or third-party service for transit routing; map tiles need internet access.

## Put Yatra online

1. Create a private GitHub repository and upload the contents of this folder (including `render.yaml` and `cloud-bind.js`) to its top level.
2. In Render, create a new Blueprint and connect that repository. Render will read `render.yaml` and deploy Yatra as a web service.
3. When deployment finishes, open the public `onrender.com` address Render gives you. That link works on phones, tablets, and computers with internet access.

The first visit after an idle period on Render's free service may take a little longer while it wakes up. Use a paid always-on service if you need it to respond immediately every time.

## Run locally as before

Install Node.js 18 or newer and run `start-yatra.bat`. The cloud helper is not used by the local launcher.

## What the helper does

The supplied server listens only on its own computer by default. Cloud hosting needs it to accept connections from the hosting network. `cloud-bind.js` adjusts that address when Node starts; it does not edit the supplied application code. Render's `PORT` setting is used by the original server automatically.
