var hugolunr = require('lunr-hugo');
var h = new hugolunr();
h.setInput('../content/resources/**');
h.setOutput('../static/resources/resources.json');
h.setInput('../content/news/**');
h.setOutput('../static/news/news.json');
console.info('resources search done');
h.index();