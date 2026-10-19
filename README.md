# Sanjaey Shunmuga Sundaram · Portfolio

Plain HTML, CSS and JavaScript. No build step and no dependencies to install.

## Run it locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly also works.

## Files

| File | What it's for |
|---|---|
| `content.js` | All the text, projects, experience, links and the contact form key. **Edit this one.** |
| `index.html` | Page structure |
| `styles.css` | Colors (light and dark), fonts, layout |
| `script.js` | Renders `content.js`, filters, case studies, theme toggle, contact form |
| `assets/` | Photo, resume and any PDFs or slides you want to link |

## Common edits

- **Add a project:** copy one block in `projects` inside `content.js` and change the text. `category` must match a filter `id` (`ml`, `swe`, `ops`, `hpc`, `cloud`). The first project is the case study shown on load.
- **Add links:** fill `github`, `slides`, `report` or `demo` in the project's `links`. Empty ones are hidden. For a PDF in the repo, put it in `assets/` and use a path like `assets/hits-report.pdf`.
- **Add a job:** copy a block in `experience`.
- **Change colors:** edit the variables at the top of `styles.css`. Light values are in the first `:root` block; dark values are in the two blocks below it.
- **Swap the resume or photo:** replace `assets/resume.pdf` or `assets/profile.webp` and keep the same names.
- Search `content.js` for `TODO` to find spots worth filling in.

## Contact form (Web3Forms)

The form sends through [Web3Forms](https://web3forms.com), which emails each message to you. It has no access to your inbox. The free plan covers 250 messages a month.

- The access key is in `contact.web3forms.accessKey` at the bottom of `content.js`. It's designed to be public.
- To send messages to a different address, create a new key at web3forms.com for that address and replace it.
- A hidden `botcheck` field blocks simple spam bots.

If the key is empty, the form validates input and then asks visitors to email you directly.

## Deploy on GitHub Pages

Copy these files into your `portfolio-website` repo (replacing the old `index.html`, `styles.css` and `script.js`), then:

```bash
git add .
git commit -m "Redesign portfolio"
git push
```

GitHub Pages republishes automatically within a minute or two.

## After editing

Run `./bump-version.sh` before you commit. It updates the `?v=` tag on the CSS and JS files in `index.html`, so visitors get the new version right away instead of a cached copy (GitHub Pages lets browsers cache files for 10 minutes).
