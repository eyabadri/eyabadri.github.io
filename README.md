# Portfolio Website

A professional personal e-portfolio for an Electrical Engineering student at ENIT.

**Zero frameworks. Zero build tools. Just HTML + CSS + JavaScript.**

---

## Quick Start — Preview the Website Locally

You need **one** of these installed on your computer: Python, Node.js, or just a web browser.

### Option 1: Python (easiest)
1. Open a terminal / command prompt
2. Navigate to the `portfolio` folder:
   ```bash
   cd portfolio
   ```
3. Run:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and go to: **http://localhost:8000**

### Option 2: Node.js
```bash
cd portfolio
node server.js
```
Then open: **http://127.0.0.1:8090**

### Option 3: Double-click index.html
Just open `index.html` directly in your browser. Most features work, but the local server is recommended.

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← Main page (you rarely need to edit this)
├── css/
│   └── style.css           ← All visual styling (you rarely need to edit this)
├── js/
│   ├── data.js             ← ⭐ EDIT THIS FILE to change content
│   └── main.js             ← Rendering logic (you rarely need to edit this)
├── assets/
│   ├── images/             ← Put your photos and project images here
│   │   └── profile.jpg     ← Your profile photo goes here
│   └── cv/                 ← Put your CV/resume PDF here
│       └── cv.pdf          ← Your CV file goes here
├── server.js               ← Local development server (optional)
└── README.md               ← This file
```

---

## ✏️ HOW TO EDIT YOUR CONTENT

### ⭐ THE ONE FILE YOU NEED TO KNOW: `js/data.js`

**Almost everything you want to change is in `js/data.js`.**

Open this file in any text editor (Notepad, VS Code, Sublime Text, etc.) and edit the values. Your changes appear when you refresh the browser.

---

### 1. Where to Change Your Name and Introduction

Open `js/data.js` and look for the `SITE.personal` section near the top:

```js
personal: {
    name: "YOUR FULL NAME",           // ← Put your name here
    initials: "YN",                    // ← Your initials, e.g. "AB"
    title: "Electrical Engineering Student",
    institution: "ENIT",
    
    // Hero section (the big text on the homepage)
    heroTagline: "Electrical Engineering Student — ENIT",
    heroTitleLine1: "Engineering the",
    heroTitleLine2: "Future of Embedded",     // ← This line gets the blue accent color
    heroTitleLine3: "Intelligent Systems",
    heroDescription: `I design and build systems...`,  // ← Your intro paragraph
},
```

Also update your name in the `contact` section at the bottom of `data.js`:

```js
contact: {
    email: "your-email@example.com",        // ← Your email
    linkedin: "https://linkedin.com/in/you", // ← Your LinkedIn URL
},
```

---

### 2. Where to Change Your Profile Photo

**Step 1:** Take your photo and save it as `profile.jpg`

**Step 2:** Replace the file at:
```
assets/images/profile.jpg
```

**Important:** Keep the same filename (`profile.jpg`). Just overwrite the existing file.

Your photo appears in the About section. It should be a portrait-style photo (3:4 ratio recommended). If the photo doesn't load, a placeholder is shown automatically.

**To use a different filename**, edit `js/data.js`:
```js
about: {
    photo: "assets/images/your-photo-name.jpg",  // ← Change this
},
```

---

### 3. Where to Add/Change Projects

Open `js/data.js` and find the `SITE.projects` array. Each project is an object inside square brackets `[ ]`.

**To add a new project**, copy an existing project block and paste it at the end:

```js
{
    id: "my-new-project",          // Unique ID (no spaces, use hyphens)
    tier: 2,                       // 1 = Featured (big), 2 = Standard, 3 = Compact
    title: "My New Project",
    subtitle: "Short subtitle",
    description: `Describe your project here.`,
    tech: ["Python", "STM32"],     // Technologies used
    focus: "Main focus areas",
    status: "completed",           // "completed" or "in-progress"
    icon: "code",                  // Icon: chip, code, wave, drone, battery, terminal, etc.
    context: "University Project", // Where/when you did it
    details: {                     // Set to null to hide "View Details" button
        problem: `What problem does this solve?`,
        objective: `What was the goal?`,
        role: "What did YOU do?",
        architecture: ["Step 1...", "Step 2..."],
        implementation: ["How you built it..."],
        results: ["What you achieved..."],
        challenges: ["Difficulties you faced..."],
        learnings: ["What you learned..."],
        metrics: [
            { value: "95%", label: "Accuracy" },
            { value: "2ms", label: "Latency" },
        ],
        image: null,  // Set to "assets/images/project-name.jpg" when you have one
    },
},
```

**Tier explained:**
- `tier: 1` = Featured/Flagship project (large card, most prominent)
- `tier: 2` = Important project (standard card)
- `tier: 3` = Smaller project (compact card)

---

### 4. Where to Add/Change Education

In `js/data.js`, find `SITE.education`:

```js
education: [
    {
        date: "2022 — Present",       // ← Your dates
        current: true,                 // Shows green "Current" badge
        title: "Engineering Degree in Electrical Engineering",
        institution: "ENIT",
        description: `What you study / learned.`,
        tags: ["Embedded Systems", "Signal Processing"],
    },
    // Add more entries by copying the block above
],
```

**To add education:** Copy one `{ }` block and paste it below.

---

### 5. Where to Add/Change Internships/Experience

In `js/data.js`, find `SITE.experience`:

```js
experience: [
    {
        title: "Engineering Intern",        // Your job title
        company: "ACTIA",                    // Company name
        date: "Jul 2024 — Sep 2024",        // ← Your actual dates
        description: `What you did during this internship.`,  // ← Your real responsibilities
        tags: ["STM32", "Embedded AI"],     // Technologies you used
    },
    // Add more entries by copying the block above
],
```

**Do NOT invent dates or responsibilities.** If you don't know something yet, use a placeholder like `"2024"`.

---

### 6. Where to Add/Change Associations

In `js/data.js`, find `SITE.activities`:

```js
activities: [
    {
        title: "ENIT Robotics Club",
        role: "Member",           // Your role
        description: `What you do in this club.`,
    },
    // Add more entries by copying the block above
],
```

---

### 7. Where to Change Skills

In `js/data.js`, find `SITE.skills`. Skills are grouped by category:

```js
skills: [
    {
        category: "Embedded Systems",     // Category name
        icon: "chip",                      // Icon: chip, code, layers, bolt, wrench
        items: [
            { name: "STM32 (G4, F4 series)", level: 85, description: "Development & debugging" },
            // level: 0-100 (controls the progress bar)
            // Add more items by copying a line
        ],
    },
    // Add more categories by copying the block above
],
```

**To change a skill level**, change the `level` number (0-100).
**To add a skill**, add a new `{ name: "...", level: 80, description: "..." }` line.
**To remove a skill**, delete that line.

---

### 8. Where to Add/Change Your CV

**Step 1:** Put your CV PDF at:
```
assets/cv/cv.pdf
```

**Step 2:** If your filename is different, update `js/data.js`:
```js
personal: {
    cvFile: "assets/cv/your-file-name.pdf",  // ← Change this
},
// Also update in the contact section:
contact: {
    cvFile: "assets/cv/your-file-name.pdf",  // ← And here
},
```

**To replace your CV later:** Just overwrite `assets/cv/cv.pdf` with your new PDF.

---

### 9. Where to Add Project Images

**Step 1:** Put your image in `assets/images/` with a clear name:
```
assets/images/project-battery.jpg
assets/images/project-drones.jpg
```

**Step 2:** In `js/data.js`, find the project and set the image:
```js
{
    id: "battery-twin",
    // ... other fields ...
    details: {
        // ... other details ...
        image: "assets/images/project-battery.jpg",  // ← Set this
    },
},
```

**Recommended:** Use `.jpg` or `.png` files, max 1200px wide for fast loading.

---

### 10. Where to Change Contact Information

In `js/data.js`, find `SITE.contact`:

```js
contact: {
    email: "your-email@example.com",           // ← Your email
    linkedin: "https://linkedin.com/in/you",   // ← Your LinkedIn URL
    linkedinLabel: "Your LinkedIn Profile",     // ← Text shown for the link
    cvFile: "assets/cv/cv.pdf",               // ← CV file path
    message: "Open to opportunities, collaborations, and technical discussions",
},
```

---

### 11. How to Preview the Website Locally

See the **Quick Start** section at the top of this file.

**Remember:** After editing `data.js`, just **refresh your browser** (F5 or Ctrl+R).

---

### 12. How to Add a Completely New Section

If you want to add a section that doesn't exist yet (e.g., "Publications"):

**Step 1:** Add the section HTML in `index.html`:
```html
<!-- PUBLICATIONS -->
<section class="section" id="publications">
    <div class="container">
        <div class="section__header">
            <span class="section__tag">&lt;publications&gt;</span>
            <h2 class="section__title">Publications</h2>
        </div>
        <div id="publicationsContent"></div>
    </div>
</section>
```

**Step 2:** Add the data in `js/data.js`:
```js
// After the existing sections
publications: [
    { title: "Your Paper Title", journal: "Journal Name", year: 2024 },
],
```

**Step 3:** Add a rendering function in `js/main.js`:
```js
function renderPublications() {
    const el = document.getElementById('publicationsContent');
    el.innerHTML = SITE.publications.map(pub => `
        <div class="activity-card">
            <h3>${pub.title}</h3>
            <p>${pub.journal} — ${pub.year}</p>
        </div>
    `).join('');
}
```

**Step 4:** Call it in the `DOMContentLoaded` listener:
```js
renderPublications();  // Add this line
```

**Step 5:** Add nav link in `renderNav()` in `main.js`:
```js
{ label: 'Publications', href: '#publications' },
```

---

## 🎨 Customization Tips

### Change the accent color
In `css/style.css`, change:
```css
:root {
    --color-accent: #00b4d8;     /* Change to your color */
    --color-accent-light: #48cae4;
}
```

### Change the background
```css
:root {
    --color-bg-primary: #060b18;  /* Dark navy */
    --color-bg-secondary: #0c1225;
}
```

### Add a Google Analytics or similar script
Add it right before `</body>` in `index.html`.

---

## 📋 Placeholder Values to Replace

Search `js/data.js` for these and replace them:

| Placeholder | What to put |
|---|---|
| `[YOUR FULL NAME]` | Your real name |
| `[YN]` | Your initials (e.g., "AB") |
| `[your-email@example.com]` | Your email |
| `[YOUR-LINKEDIN-URL]` | Your LinkedIn profile URL |
| `[START YEAR] — Present` | Your enrollment year |
| `[START YEAR] — [END YEAR]` | Your dates |
| `[INSTITUTION NAME]` | Your school name |
| `[START DATE] — [END DATE]` | Your internship dates |
| `[Technology 1]` | Technologies you used |

---

## ❓ Common Questions

**Q: I edited data.js but nothing changed!**
A: Make sure you saved the file and refreshed your browser (Ctrl+R or F5).

**Q: My photo doesn't show up!**
A: Make sure the file is at `assets/images/profile.jpg` and the format is .jpg, .jpeg, .png, or .webp.

**Q: The "Download CV" button doesn't work!**
A: Make sure your CV is at `assets/cv/cv.pdf`.

**Q: How do I see the website on my phone?**
A: Run the local server (see Quick Start), then find your computer's IP address and open `http://YOUR-IP:8000` on your phone (both must be on the same WiFi).

---

## 🛠 Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — no frameworks, no dependencies
- **Google Fonts** — Inter + JetBrains Mono

**No build tools needed. No npm. No React. No complicated setup.**
