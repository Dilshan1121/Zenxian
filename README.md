# Zenxian

A static website for **Zenxian** — a high-precision technical architecture company. Built with pure HTML, CSS, and JavaScript. No frameworks, no build tools required.

## Project Structure

```
html/
├── index.html          # Home page
├── about.html          # About page
├── platform.html       # Platform page
├── case-studies.html   # Case studies listing
├── case-study.html     # Individual case study
├── contact.html        # Contact & booking page
├── service.html        # Service detail page
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── main.js         # Core interactions
│   ├── mega-menu.js    # Navigation mega menu
│   ├── calendar.js     # Booking calendar
│   ├── contact-form.js # Contact form
│   └── ...             # Other page scripts
├── data/
│   ├── services-data.js     # Services content
│   └── case-studies-data.js # Case studies content
├── images/
│   └── logo.png        # Brand logo
└── videos/
    └── vedio.mp4       # Hero background video
```

## Running Locally

No build step needed. Simply open `html/index.html` in your browser, or serve it with any static file server:

```bash
# Using Python
python -m http.server 8000 --directory html

# Using Node.js (npx)
npx serve html
```

Then open `http://localhost:8000` in your browser.

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — no dependencies
