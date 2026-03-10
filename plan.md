# plan.md

## Project Name

Maple Avenue UMC Front-End Redesign

## Project Objective

Design and build a static front-end prototype for Maple Avenue United Methodist Church that:

- uses Maple Avenue’s real content, ministries, and core church information
- draws inspiration from Eastside Church, Johns Creek UMC, and McKendree UMC
- improves on those references through cleaner structure, better semantics, stronger accessibility, smoother UX, and a more modern visual system

This phase is front-end only and should use:

- HTML
- CSS
- vanilla JavaScript

## Project Background

The current Maple Avenue site contains the core content areas needed for a redesign, including:

- About Us
- Guest Information
- Staff
- What We Believe
- Worship
- Past Messages
- Connect Card
- Ministries
- Announcements
- Give
- Contact
- Sunday worship and Sunday school information

The current site also includes reusable imagery that may be used in the redesign.

The inspiration sites provide useful direction:

- Eastside suggests strong mission-driven messaging and visual identity
- Johns Creek suggests broad church-site organization and category-based navigation
- McKendree suggests a more welcoming homepage structure with visit-focused pathways and event visibility

The redesign should not simply imitate them. It should exceed them in clarity, accessibility, semantic structure, responsiveness, and polish.

## In Scope

- Homepage front-end design and build
- Responsive navigation
- Typography and spacing system
- Reusable section and card patterns
- Visitor-focused homepage structure
- Ministry and announcement content blocks
- Footer with contact details
- Light JavaScript interactions only where needed
- Foundation for future interior pages

## Out of Scope

- Backend/CMS work
- Live event integrations
- Search
- Form processing
- Authentication
- Database connections
- Deployment configuration
- Full content migration for every page
- Deep SEO implementation
- Full WCAG audit

## Project Constraints

- Static site only
- No frameworks unless explicitly requested
- No copying source code or exact design from inspiration sites
- Keep code understandable for a beginner/intermediate developer
- Favor maintainability over novelty
- Keep file structure simple

## Primary Audiences

### Audience 1: First-Time Visitors

Needs:

- where the church is
- when worship happens
- what to expect
- how to connect
- whether there is a place for them

### Audience 2: Current Church Members / Regular Attenders

Needs:

- announcements
- ministries
- events
- giving access
- service information
- easy navigation to common tasks

## UX Goals

The homepage should answer these questions quickly:

- Who is Maple Avenue?
- When is worship?
- How do I visit?
- What ministries or next steps are available?
- What is happening now?
- How do I contact or support the church?

## Content Priorities for Homepage

Recommended homepage content priority:

1. Clear welcome / identity statement
2. Worship time and visit information
3. Brief introduction to the church
4. Main pathways into church life
5. Announcements or featured updates
6. Giving / connect call to action
7. Contact and location details

## Recommended Top-Level Navigation

Start with a cleaner top-level navigation such as:

- Who We Are
- What We Do
- Events
- Give
- Contact

Potential subcontent mapping:

- About: Guest Information, Staff, What We Believe
- Worship: Live, Past Messages, Connect Card
- Ministries: Sunday School, Missions/Outreach, Next Step Ministries, Children, Congregational Care, other ministry items
- Events: Announcements, Calendar
- Give: Give Online
- Contact: address, office details, contact page

This should stay simpler than the current site unless later content expansion demands more depth.

## Design Direction

The design should feel:

- warm
- trustworthy
- contemporary
- calm
- inviting
- uncluttered

Visual goals:

- stronger hierarchy than the current Maple Avenue site
- more breathing room than the inspiration sites
- better mobile behavior
- more consistent component styling
- more intentional CTAs
- more polished section transitions
- improved readability

## Accessibility Goals

Minimum accessibility expectations:

- skip link
- semantic landmarks
- correct heading structure
- keyboard-accessible nav
- visible focus states
- color contrast that supports readability
- descriptive alt text guidance
- sensible link/button labels

## Technical Standards

### HTML

- semantic landmarks
- clean heading hierarchy
- meaningful labels and button text
- no div-heavy structure where semantic elements fit better

### CSS

- establish tokens/variables for colors, spacing, radius, and typography
- use reusable section/container/button/card styles
- mobile-friendly layout patterns
- consistent spacing rhythm

### JavaScript

Use only for:

- mobile nav toggle
- accessible dropdown or disclosure behavior if needed
- minimal interaction enhancements that improve usability

## Build Phases

### Phase 1: Site Analysis and Architecture

Goal:
Translate the source websites into a better content and UX strategy for Maple Avenue.

Tasks:

- identify the strongest patterns from the three inspiration sites
- identify the weaknesses to avoid
- inventory Maple Avenue’s current homepage and primary nav content
- define the most important homepage goals
- define a cleaner top-level information architecture

Deliverable:

- homepage outline
- simplified nav model
- list of reusable section types

### Phase 2: Homepage Wireframe in HTML

Goal:
Create a strong semantic homepage structure before visual refinement.

Tasks:

- build `index.html` with semantic landmarks
- include skip link, header, nav, main, and footer
- structure homepage sections in priority order
- use real Maple Avenue content where available
- use placeholders only where content is missing

Suggested homepage sections:

1. Skip link
2. Header and primary nav
3. Hero / welcome section
4. Worship times / visit section
5. About Maple Avenue section
6. Ministries / ways to connect
7. Announcements or featured items
8. Giving / next-step CTA
9. Footer with address and essentials

Deliverable:

- complete semantic homepage HTML skeleton

### Phase 3: Design System Foundation

Goal:
Create a reusable visual system before heavy page styling.

Tasks:

- define base typography
- define colors and spacing tokens
- define container widths and responsive behavior
- define buttons, cards, image treatments, and section spacing
- define utility patterns sparingly if needed

Deliverable:

- a maintainable CSS foundation in `style.css`

### Phase 4: Homepage Visual Design

Goal:
Turn the structured homepage into a polished, modern layout.

Tasks:

- design a strong hero section
- surface worship time and visitor info prominently
- style ministry and announcement sections with clear hierarchy
- use Maple Avenue imagery thoughtfully
- create a clean and trustworthy footer

Deliverable:

- polished homepage visual design

### Phase 5: Responsive and Accessibility Refinement

Goal:
Ensure the page works smoothly across devices and for keyboard users.

Tasks:

- refine mobile menu behavior
- stack layouts appropriately
- test readable text sizes and spacing
- prevent overflow and awkward wrapping
- verify focus states and nav usability

Deliverable:

- responsive, accessible front-end homepage

### Phase 6: Light Interaction Layer

Goal:
Add only the JavaScript needed to improve navigation and usability.

Tasks:

- implement mobile nav toggle
- add accessible state handling
- add small enhancements only if they provide clear value

Deliverable:

- minimal, readable `script.js`

### Phase 7: Cleanup and Extension Prep

Goal:
Leave the project ready for future interior pages.

Tasks:

- remove unused styles
- normalize class naming
- note missing content/assets
- identify reusable patterns for future pages such as About, Worship, Ministries, and Events

Deliverable:

- stable homepage foundation ready for expansion

## Risks to Watch

- copying inspiration sites too literally
- burying worship time and visit info
- overloading the homepage with too many ministry links
- keeping the menu too complex
- creating a design that looks modern on desktop but weak on mobile
- using church images without enough structure or consistency
- mixing placeholders and real content unclearly

## Definition of Done for MVP

The MVP front-end is complete when:

- `index.html` contains a full semantic homepage
- `style.css` establishes a polished and reusable design system
- `script.js` contains only necessary UI behavior
- the homepage is clearly more modern and organized than the current site
- the design reflects Maple Avenue’s content, not the inspiration sites’ content
- the site is responsive and accessibility-conscious
- the homepage is a strong model for future interior pages

## Recommended Next Step Prompt for Codex

Use this repo’s `AGENTS.md` and `plan.md`. Inspect `index.html`, `style.css`, `script.js`, and the `/images` folder. Then build Phase 1 through Phase 3 of the Maple Avenue homepage redesign. Keep the site static and use vanilla HTML, CSS, and JavaScript only. Prioritize semantic structure, accessibility, a cleaner top-level nav, and a prominent worship/visit section.
