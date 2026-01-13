# BMOL Digital — Jekyll site

This repository is a minimal Jekyll scaffold configured for GitHub Pages.

**Local setup (Windows / PowerShell)**

1. Install Ruby (use RubyInstaller for Windows) and ensure `gem` is on your PATH.
2. From this project folder, install bundler and the dependencies:

```powershell
gem install bundler
bundle install
```

3. Serve locally:

```powershell
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000` in your browser.

Notes:
- Replace `url` in `_config.yml` with your GitHub Pages URL (e.g. `https://yourusername.github.io`).
- To publish, push this repository to GitHub. For a user/organization site, name the repo `yourusername.github.io`.
