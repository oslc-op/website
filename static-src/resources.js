var hugolunr = require('lunr-hugo');
var h = new hugolunr();
h.setInput('../content/resources/**');
h.setOutput('../static/resources/resources.json');
console.info('resources search done');
h.index();