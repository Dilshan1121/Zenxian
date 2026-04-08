# Zenxian

A static website for **Zenxian** — a software development company specializing in custom web applications, AI solutions, SEO optimization, e-commerce platforms, and POS systems. Built with pure HTML, CSS, and JavaScript.

## Live Site

[zenxian.vercel.app](https://zenxian.vercel.app)

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home page with hero animation, services carousel, case studies, and tech stack |
| `about.html` | Company story, team, and values |
| `contact.html` | Contact form with booking calendar |
| `case-studies.html` | Portfolio and client success stories |
| `case-study.html` | Individual case study details |
| `service.html` | Service detail page (data-driven) |
| `platform.html` | Technology and infrastructure overview |
| `careers.html` | Job openings and career opportunities |
| `privacy-policy.html` | Privacy policy |
| `terms-of-service.html` | Terms of service |

## Project Structure

```
html/
├── index.html
├── about.html
├── contact.html
├── case-studies.html
├── case-study.html
├── service.html
├── platform.html
├── careers.html
├── privacy-policy.html
├── terms-of-service.html
├── sitemap.xml
├── robots.txt
├── css/
│   └── styles.css
├── js/
│   ├── main.js              # Core interactions, scroll animations
│   ├── mega-menu.js          # Navigation mega menu
│   ├── calendar.js           # Booking calendar widget
│   ├── contact-form.js       # Contact form validation
│   ├── contact-hero.js       # Aurora stars animation
│   ├── hero-hills.js         # Three.js GLSL hills animation
│   ├── service-page.js       # Dynamic service page rendering
│   └── case-studies.js       # Case studies filtering
├── data/
│   ├── services-data.js      # Services content
│   └── case-studies-data.js  # Case studies content
├── images/
│   └── logo.png
└── videos/
    └── vedio.mp4
```

## Running Locally

No build step needed. Serve the `html/` folder with any static file server:

```bash
# Using Python
python -m http.server 8000 --directory html

# Using Node.js
npx serve html
```

Then open `http://localhost:8000` in your browser.

## Tech Stack

- **HTML5** — semantic markup, structured data (JSON-LD)
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — no frameworks or dependencies
- **Three.js** — GLSL shader animation for hero section
- **SEO** — meta tags, Open Graph, Twitter Cards, sitemap, robots.txt

## SEO

All pages include:
- Unique title tags and meta descriptions
- Open Graph and Twitter Card tags for social sharing
- Canonical URLs
- Structured data (Organization, ProfessionalService, BreadcrumbList)
- `sitemap.xml` and `robots.txt`

## Contact

- Email: business@trangle.io
- Phone: +94 77 800 1343
- Address: 100, Welikadawatta Road, Rajagiriya, Sri Lanka
