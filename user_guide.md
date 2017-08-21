# User Guide

This document gives instructions on how to create content for the site. We welcome contributions from the OSLC community, whether than be a new resource, a blog post, or something else that adds value. You can submit content via a pull request, and every request will be reviewed. If there are review comments, we will add them in the pull request. There is no guarantee that your content will be approved, and it is a good idea to get feedback on the idea first before writing the content. This can be done my opening a github issue, and using the label 'Content'.

## Notions from Hugo
The main notion from Hugo is something called Front Matter and it's the use of metadata for each page or single page. For this site we are using TOML so everything between `+++` and `+++` it is Front Matter tags. In other words everything you put between `+++` and `+++` it's called meta information or Front Matter of the post or page and it's gonna be the information needed for the correct running of the post or page and everything you put after the second `+++` it's the actual content for that post or page. Some of the information in the Front Matter it's gonna be displayed like the `title`, `author` and `date`

# How to update content for the existent pages

The file `index.md` in each folder is used for rendering custom information like title, description of sections and more.

## How to update the existent for About Page

To modify the content of this website you have to update the files in the content folder. Following the next conventions.

In the About Page we use custom tags for custom sections, for example to add a new organization brand or team member you have to create a single file with the corresponding tag, example: "people" or "brand".

## How to update the Resources page 
In the Resources Page you will see all the content you put in /content/resources, every markdown file 
needs to match the following attributes in the Front Matter.

**Tags needed in the Front Matter for new posts in the Resource Page**

* Title is the title of the post
* Date is the date in format YYYY-MM-DDTHH:mm:ss+00:00, where the last 4 digts are the UTC timezone
* Tags is for group the post with another posts, you need to use tags for the type of resource you want to post: article, podcast, presentation, tool, tutorial, video, website, white paper
* Author is the name of the person or organization who writes the post

## How to update the Contribute page
In the Contribute Page you need to modify the content from `/content/contribute/_index.md` to update the top section

To update this page you have to edit the corresponding section in the `content/contribute/*.md`

## How to update the News page (Blog)

Every markdown file you create in the content/news folder is gonna be displayed in the News Page (oscl-site/news) and has to follow these recommendations.

**Tags needed in the Front Matter for new posts in the News Page**

* Title is the title of the post
* Date is the date in format YYYY-MM-DDTHH:mm:ss+00:00, where the last 4 digts are the UTC timezone
* Tags is for group the post with another posts
* Banner is the route to the image in the static/img/oslc/ folder 
* Draft this could be true or false
* Author is the name of the author or the organization who writes the post

The url of the post follow this convention: _name-of-file.md_ becomes oslc-site/news/name-of-the-file 

# How to add new content

If you want to add a new top page like `oslc-site/example` you have to create two new folders one in `/content/new-page` and other in `/themes/oslc/layouts/new-page` and then you need to create this files: `/content/new-page/_index.md` `/themes/oslc/layouts/new-page/list.html` 

You can use the command `hugo new new_page/new_page` but only generates the content folder, you need to create manually the files `single.html` and `list.html` inside the `/themes/oslc/layouts/new_page/` in order to use that page.

Also, for display single elements of that url like `oslc-site/example/single-item` you need to add a `single.html` file in `/themes/oslc/layouts/new-page/` in order to render the content from 
`/content/example-single.md`

The difference between `list.html` and `single.html` is that the first is used to display the template of a page and the second is used for the posts.

For reference you can copy the content from `/content/example` and `/themes/oslc/layouts/example` to your new page and update depending on what you need