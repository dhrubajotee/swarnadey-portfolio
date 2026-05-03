# Swarna Dey — Personal Portfolio

A single-page scrollable portfolio built with **Next.js 14** (App Router) and **Tailwind CSS**.

## Palette
| Name | Hex |
|------|-----|
| Mustard | `#C1A577` |
| Lavender | `#C5C3D0` |
| Pink | `#BAA7AA` |
| Cream (bg) | `#FAF7F2` |
| Parchment (sidebar) | `#F2EDE4` |

*Source: Autumn Hatchey*

## Structure

```
swarna-portfolio/
├── app/
│   ├── globals.css       # Tailwind + Google Fonts + animations
│   ├── layout.js         # Root layout & metadata
│   ├── page.js           # Main single-page layout with all sections
│   └── data.js           # All content (edit here to update text)
├── components/
│   ├── Sidebar.js        # Fixed sidebar with active-link tracking
│   ├── SectionHeader.js  # Reusable section heading
│   └── Timeline.js       # Reusable timeline for Experience & Community
├── public/
│   └── images/           # Add your profile photo here as profile.jpg
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Customisation

- **Content**: Edit `app/data.js` — all text, roles, skills are in one place.
- **Profile photo**: Drop your photo as `public/images/profile.jpg` and update the avatar `<div>` in `components/Sidebar.js` with an `<img>` tag.
- **Colors**: Change the palette in `app/globals.css` CSS variables and `tailwind.config.js`.
- **Fonts**: Swap Google Fonts in `app/globals.css` `@import` and `tailwind.config.js` `fontFamily`.

## Sections
1. Hero
2. About
3. Professional Experience
4. Key Achievements
5. Community Work
6. Education & Languages
7. Skills
8. Contact
