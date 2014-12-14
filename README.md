# How to install


sudo npm install

grunt once

Please make sure that sass is allready installed


# Configuration

You need to install everything into a virtuell server. Your webserver root has to be /.
Make sure to have mod_rewrite and mod_headers installed.

You need to configure main.js. You need to change all 'dev-smart-frontend.de' to your virtuell server. Do not change 'http://dev-smart-drupal-140508.helloplugin.de/' because this is the drupal system that is serving all content in json files.




# Development

While developing grunt should always run because sass and all the javascript stuff has to be build. To start the grunt watcher just type 'grunt' at the command prompt

# More infos:

https://helloplugin.atlassian.net/wiki/display/SMART/Howto+Installation

# SEO for Backbone.js

If a search engine comes along redirect it to another URL that serves the fully rendered version of the page

How to setup
- install node.js
- install phantom.js
- install apache proxy and proxy_http
- install npm
- rename package-node.json to package.json
- run $npm install
- run $node web.js

Check if everything is up and running:
- open a webrowser and deactivate JavaScript
- go to http://your-server/?_escaped_fragment_=/fr/Berlin
- go to http://your-server/?_escaped_fragment_=/en/Berlin
-> it should print just the html without any JavaScript





