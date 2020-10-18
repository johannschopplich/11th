<p align="center">
  <img src="./assets/img/favicon.svg" alt="Logo of 11th" width="114" height="114">
</p>

<h3 align="center">11th</h3>

<p align="center">
  Simple, Generic <a href"https://www.11ty.dev">Eleventy</a> Template<br>
  <a href="https://11th.jhnn.dev"><strong>Explore the demo »</strong></a>
</p>

<br>

## Key Features

- 🍃 **Generic**: Solely basics – but those well thought out
- 🔢 **Hashed Assets**: Cachebust CSS & JS files in production, like `main.ac3afb.css`
- 🔍 **SEO-friendly**: Generate meta tags for each page
- 🗂 **Reasonable Directory Names**: As little nesting as possible
- 🏗 **Default Layout**: Standard layout if no custom one specified
- ⚡️ **HTML Minification**: Minify generated HTML in production
- 🚤 **Rollup**: Simple ES module bundler setup

## How did we get here?

When creating my first website with Eleventy, I was reading through many [starter projects](https://www.11ty.dev/docs/starter/) to grasp how one could setup an Eleventy site. Sometimes being overwhelmed by the complexity. I didn't need pagination or support for Webmentions. Just the basics. I forked a few but often found myself stripping out parts I didn't need.

So I constructed a setup which I felt comfortable working with. A light base for future projects. Of course, every starterkit is opiniated, this is my take.

What other templates lacked was a reliabe way to **cachebust CSS and JS** assets (without query strings) that doesn't get in the way in development environment. That's one of the core features of this starter project.

## Setup

Install npm dependencies:

```bash
npm install
```

Spin up the development server:

```bash
npm run start
```

Build for production (compiles into `_site`):

```bash
npm run build
```

## Credits

- [pack11ty](https://github.com/nhoizey/pack11ty) for default layout fallback and permalink options in [`src.11tydata.js`](src/src.11tydata.js)
