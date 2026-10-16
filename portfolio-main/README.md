# Portfolio Website — Eya Badri

Personal e-portfolio of an Electrical Engineering student at ENIT (embedded systems, TinyML, robotics).

**No frameworks. No build tools. Just HTML + CSS + JavaScript.**

🌐 **Live site:** `https://YOUR-USERNAME.github.io/REPO-NAME/` *(replace after step 3 below)*

---

## 1. Put the site online (GitHub Pages)

GitHub only shows the *code* of a repository. To let anyone open the *website*, enable **GitHub Pages**:

1. Make sure `index.html` is at the **root** of the repository (not inside a sub-folder). The repo should look like this:
   ```
   index.html   css/   js/   assets/   .nojekyll   README.md
   ```
2. On GitHub, open your repository → **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**, then select branch `main` and folder `/ (root)`. Click **Save**.
4. Wait 1–2 minutes and refresh the page. GitHub shows your link at the top:
   - repo named `YOUR-USERNAME.github.io` → `https://YOUR-USERNAME.github.io/`
   - any other repo name → `https://YOUR-USERNAME.github.io/REPO-NAME/`
5. Put this link on your LinkedIn, CV and emails. Every `git push` updates the site automatically.

**Requirements**
- The repository must be **public** (GitHub Pages is free for public repos).
- File names are **case-sensitive** online: `Profile.jpg` ≠ `profile.jpg`. Keep the paths in `js/data.js` identical to the real file names.
- Keep paths **relative** (`assets/images/profile.jpg`, never `/assets/...`), so the site works under `/REPO-NAME/`.
- The empty `.nojekyll` file tells GitHub to serve the files as they are. Do not delete it.

**Everything on a public site is public**: your email, LinkedIn link and `assets/cv/cv.pdf` can be read and downloaded by anyone. Remove anything you don't want shared (phone number, address…) from the CV before uploading it.

---

## 2. Preview locally (before pushing)

Open a terminal in the project folder (the one containing `index.html`).

**Python**
```bash
python -m http.server 8000
```
Open **http://localhost:8000**

**Node.js**
```bash
node server.js
```
Open **http://127.0.0.1:8090**

Opening `index.html` by double-click also works, but a local server is closer to the real site.

To test on your phone, use the same Wi-Fi and open `http://YOUR-COMPUTER-IP:8000`.

---

## 3. Project structure

```
├── index.html          Page skeleton (sections are filled by JavaScript)
├── css/style.css       All styling
├── js/
│   ├── data.js         ⭐ ALL your content — edit this file
│   └── main.js         Rendering logic (rarely edited)
├── assets/
│   ├── cv/cv.pdf       Your CV (Download CV buttons)
│   └── images/         profile.jpg + project-*.jpg (project-*.svg are fallbacks)
├── server.js           Optional local server (Node.js)
├── .nojekyll           Needed for GitHub Pages
└── README.md
```

---

## 4. Editing your content (`js/data.js`)

Edit the file, save, refresh the browser. Each block below is a key of the `SITE` object.

| Section | Key | What to edit |
|---|---|---|
| Name, hero text, email, LinkedIn | `personal` | `name`, `initials`, `heroTitleLine1-3`, `heroDescription`, `email`, `linkedin`, `cvFile` |
| About + photo + interests | `about` | `intro`, `paragraphs`, `photo`, `interests` |
| Education | `education` | `date`, `current`, `title`, `institution`, `description`, `tags` |
| Projects | `projects` | see below |
| Experience | `experience` | `title`, `company`, `date`, `description`, `tags` |
| Skills | `skills` | categories with `items` |
| Associations | `activities` | `title`, `role`, `description` |
| Contact | `contact` | `email`, `linkedin`, `linkedinLabel`, `cvFile`, `message` |

Keep the same email, LinkedIn and CV path in `personal` **and** `contact`.

### Add or change a project

Copy an existing block in `projects` and edit it:

```js
{
  id: "my-new-project",        // unique, no spaces
  tier: 2,                     // 1 = featured, 2 = standard, 3 = compact
  title: "My New Project",
  subtitle: "Short subtitle",
  description: `What the project is.`,
  tech: ["Python", "STM32"],
  focus: "Main focus areas",
  status: "completed",         // "completed" or "in-progress"
  icon: "code",
  context: "University Project",
  details: {                   // set to null to hide "View Details"
    problem: `...`, objective: `...`, role: "...",
    architecture: ["..."], implementation: ["..."], results: ["..."],
    challenges: ["..."], learnings: ["..."],
    metrics: [{ value: "95%", label: "Accuracy" }],
    image: "assets/images/project-name.jpg",   // or null
  },
},
```

Project images: save them in `assets/images/` (`.jpg`/`.png`, ≈1200 px wide max) and reference them with a relative path.

### Skills use text levels, not numbers

```js
{ name: "STM32 (G4, F4 series)", level: "Core", description: "Development & debugging" }
```
Levels used by the site: `"Core"`, `"Working Knowledge"`, `"Familiar"`. Each level has its own badge style (`.skill-level__badge--core`, `--working-knowledge`, `--familiar` in `css/style.css`). If you invent a new level, add a matching style.

### Available icons

`chip, layers, robot, bolt, clock, cube, code, wave, drone, battery, terminal, wrench, briefcase, lightning, gear, mail, linkedin, file, grid, arrow, close` (defined in the `ICONS` object at the bottom of `data.js`).

### Replace photo or CV

Overwrite `assets/images/profile.jpg` (portrait, 3:4 recommended) or `assets/cv/cv.pdf` and keep the same file names — or change the path in `data.js`.

### Add a new section (e.g. Publications)

1. `index.html`: add a `<section class="section" id="publications">` with a container `<div id="publicationsContent"></div>`.
2. `data.js`: add `publications: [ { title: "...", journal: "...", year: 2026 } ],`.
3. `main.js`: write `renderPublications()` that fills `#publicationsContent`, call it in the `DOMContentLoaded` listener, and add `{ label: 'Publications', href: '#publications' }` in `renderNav()`.

---

## 5. Customization

In `css/style.css`:
```css
:root {
  --color-accent: #00b4d8;
  --color-accent-light: #48cae4;
  --color-bg-primary: #060b18;
  --color-bg-secondary: #0c1225;
}
```

---

## 6. Troubleshooting

| Problem | Fix |
|---|---|
| Site shows 404 on GitHub | Check Settings → Pages is set to `main` / `/ (root)` and that `index.html` is at the repo root. Wait 2 minutes. |
| Page loads but is empty / unstyled | A file path is wrong or has the wrong capital letters. Open the browser console (F12) to see which file fails. |
| Photo or project image missing | File name in `data.js` must match exactly (case-sensitive). |
| "Download CV" does nothing | Check `assets/cv/cv.pdf` exists and `cvFile` is correct in both `personal` and `contact`. |
| Changes don't appear online | Commit **and push**, wait 1–2 minutes, then hard refresh (Ctrl+Shift+R). |

---

## Tech stack

HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JavaScript · Google Fonts (Inter, JetBrains Mono)
