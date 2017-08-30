const hugolunr = require('lunr-hugo');

const about = new hugolunr();
const contribute = new hugolunr();
const news = new hugolunr();
const resources = new hugolunr();
const home = new hugolunr();
var site = new hugolunr();

var result = {};
var aboutJson = {};
var contributeJson = {};
var newsJson = {};
var resourcesJson = {};
var homeJson = {};

about.setInput('../content/about/**');
about.setOutput('../static/about/about.json');
about.index();

contribute.setInput('../content/contribute/**');
contribute.setOutput('../static/contribute/contribute.json');
contribute.index();

news.setInput('../content/news/**');
news.setOutput('../static/news/news.json');
news.index();

resources.setInput('../content/resources/**');
resources.setOutput('../static/resources/resources.json');
resources.index();

home.setInput('../content/_index.md');
home.setOutput('../static/home/home.json');
home.index();

site.setInput('../content/**/**');
site.setOutput('../static/site.json');
site.index();

console.info(site);

console.info('finish task')