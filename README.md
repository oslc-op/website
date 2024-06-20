# oslc-site-hugo

[![Discourse status](https://img.shields.io/discourse/https/meta.discourse.org/status.svg)](https://forum.open-services.net/)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/OSLC/chat)

## Contributing

Edit the Markdown sources for http://open-services.net/ under `/content`

## Dev setup

```
brew install hugo

# optional
npm install -g sass
(cd themes/oslc/static/css && sass scss/oslc.scss:./oslc.css)

hugo server -w
# go to http://localhost:1313/
```

## Deployment

The deployment is taken care of by Github Actions, just merge your changes to `master`.

Please check out the [wiki](https://github.com/OSLC/oslc-site-hugo/wiki/Contributing-Setup) for more details.

## Licensing

Please see the
[LICENSE](https://github.com/oslc-op/oslc-admin/blob/master/LICENSE.md)
file for description of the license terms and OASIS policies applicable
to the OSLC Open Project work items.
