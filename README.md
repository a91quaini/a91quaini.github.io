# Alberto Quaini’s website

Source for [albertoquaini.com](https://albertoquaini.com), published by GitHub Pages from the `main` branch.

## Edit the site

- `_pages/`: home, research, software, teaching, and 404 content.
- `_data/navigation.yml`: navigation links.
- `_layouts/clean.html` and `_includes/seo.html`: shared layout and metadata.
- `assets/css/site.css` and `assets/js/theme.js`: styling and light/dark mode.
- `images/`: portrait and favicon.
- `_config.yml`: Jekyll settings; `CNAME` retains the custom domain.

Legacy About, Publications, Software, and Teaching URLs redirect to the current pages. The local CV source in `temp/` is ignored and excluded from publication.

## Preview and build

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open `http://localhost:4000`. To build without starting a server:

```sh
bundle exec jekyll build
```

The build uses Jekyll and two plugins: redirects for old URLs and an XML sitemap. The browser loads only the site’s CSS and theme script; no JavaScript libraries or external fonts are required.

Originally adapted from [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes). The original MIT license is retained in `LICENSE`.
