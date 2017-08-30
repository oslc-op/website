const hugolunr = require('lunr-hugo');
const _ = require('lodash');
const fs = require('fs');
const about = new hugolunr();
const contribute = new hugolunr();
const news = new hugolunr();
const resources = new hugolunr();
const home = new hugolunr();

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

fs.readFile('../static/about/about.json', 'utf-8', (err, data) => {
  if (err) throw err;
  aboutJson = data;
})

fs.readFile('../static/resources/resources.json', 'utf-8', (err, data) => {
  if (err) throw err;
  resourcesJson = data;
})

fs.readFile('../static/contribute/contribute.json', 'utf-8', (err, data) => {
  if (err) throw err;
  contributeJson = data;
})

fs.readFile('../static/news/news.json', 'utf-8', (err, data) => {
  if (err) throw err;
  newsJson = data;
})

fs.readFile('../static/home/home.json', 'utf-8', (err, data) => {
  if (err) throw err;
  homeJson = data;
})

_.merge(result, homeJson, aboutJson, contributeJson, resourcesJson, newsJson);
var r = JSON.stringify(result);

fs.writeFile('../static/site.json', r, 'utf-8', (err, data) => {
  if (err) throw err;
  console.info(data);
})

console.info('finish task')