# User Guide

## Notions from Hugo
The main notion from Hugo is something called Front Matter and it's the use of metadata for each page or single page. For this site we are using TOML so everything between _+++_ and _+++_ it is Front Matter tags.

## How to update the existent content and structure

To modify the content of this website you have to update the files in the content folder. Following the next conventions.

1. The file _index.md_ in each folder is used for meta information in the corresponding page.
2. In the About Page we use custom tags for custom sections, for example to add a new organization brand or team member you have to create a single file with the corresponding tag, example: "people" or "brand".
3. In the Contribute Page you need to modify the content from /content/contribute/_index.md
4. In the Resources Page you need to use tags for the type of resource you want to post.
5. In the Latest News Page you don't need to use tags or follow conventions, every file you create here it's gonna be displayed in the Latest News Page.


## How to add new content

If you want to add a new top page like /example you have to create two new folders one in /content/new-page and other in /themes/oslc/layouts/new-page and then you need to create this files: /content/new-page/_index.md /themes/oslc/layouts/new-page/list.html 

Also, for display single elements of that url like /example/single you need to add a single.html file in /themes/oslc/layouts/new-page/ in order to render the content from /content/example-single.md

For reference you can copy the content from /content/example and /themes/oslc/layouts/example to your new page and update depending on what you need