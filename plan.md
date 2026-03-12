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

---

# Project Background

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

---

# In Scope

- Homepage front-end design and build
- Responsive navigation
- Typography and spacing system
- Reusable section and card patterns
- Visitor-focused homepage structure
- Ministry and announcement content blocks
- Footer with contact details
- Interior page mockups (starting with Staff)
- Light JavaScript interactions only where needed
- Foundation for future interior pages

---

# Out of Scope

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

---

# Project Constraints

- Static site only
- No frameworks unless explicitly requested
- No copying source code or exact design from inspiration sites
- Keep code understandable for a beginner/intermediate developer
- Favor maintainability over novelty
- Keep file structure simple

---

# Primary Audiences

## Audience 1: First-Time Visitors

Needs:

- where the church is
- when worship happens
- what to expect
- how to connect
- whether there is a place for them

## Audience 2: Current Church Members / Regular Attenders

Needs:

- announcements
- ministries
- events
- giving access
- service information
- easy navigation to common tasks

---

# UX Goals

The homepage should answer these questions quickly:

- Who is Maple Avenue?
- When is worship?
- How do I visit?
- What ministries or next steps are available?
- What is happening now?
- How do I contact or support the church?

Interior pages should:

- feel consistent with the homepage
- be simple and readable
- avoid visual clutter
- support scanning and quick understanding

---

# Recommended Top-Level Navigation

- Who We Are
- What We Do
- Events
- Give
- Contact

Potential subcontent mapping:

### Who We Are

- About Maple Avenue
- Staff
- What We Believe

### What We Do

- Worship
- Ministries
- Sunday School
- Outreach

### Events

- Announcements
- Calendar

### Give

- Online Giving

### Contact

- Contact page
- Location and office information

---

# Design Direction

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

---

# Accessibility Goals

Minimum accessibility expectations:

- skip link
- semantic landmarks
- correct heading structure
- keyboard-accessible nav
- visible focus states
- color contrast that supports readability
- descriptive alt text guidance
- sensible link/button labels

---

# Technical Standards

## HTML

- semantic landmarks
- clean heading hierarchy
- meaningful labels and button text
- avoid unnecessary div-heavy structures

## CSS

- establish tokens/variables for colors, spacing, radius, and typography
- use reusable section/container/button/card styles
- mobile-friendly layout patterns
- consistent spacing rhythm

## JavaScript

Use only for:

- mobile nav toggle
- accessible dropdown or disclosure behavior if needed
- minimal interaction enhancements that improve usability

---

# Build Phases

## Phase 1: Site Analysis and Architecture

Goal:

Translate the inspiration sites into a better content and UX strategy for Maple Avenue.

Tasks:

- identify strong patterns from inspiration sites
- identify weaknesses to avoid
- inventory Maple Avenue homepage content
- define homepage goals
- define cleaner site architecture

Deliverable:

- homepage outline
- simplified navigation model
- list of reusable section types

---

## Phase 2: Homepage Wireframe in HTML

Goal:

Create a strong semantic homepage structure before visual styling.

Tasks:

- build `index.html`
- implement semantic landmarks
- structure homepage sections
- use real Maple Avenue content where available

Deliverable:

- semantic homepage HTML skeleton

---

## Phase 3: Design System Foundation

Goal:

Create a reusable visual system.

Tasks:

- typography system
- color palette
- spacing tokens
- container widths
- reusable components (buttons, cards, sections)

Deliverable:

- maintainable `style.css`

---

## Phase 4: Homepage Visual Design

Goal:

Turn the structured homepage into a polished layout.

Tasks:

- design hero section
- highlight worship time and visitor info
- style ministry and announcement sections
- integrate Maple Avenue imagery

Deliverable:

- polished homepage visual design

---

## Phase 5: Responsive and Accessibility Refinement

Goal:

Ensure the page works smoothly across devices.

Tasks:

- refine mobile nav
- adjust layout stacking
- test keyboard navigation
- verify readable spacing

Deliverable:

- responsive homepage

---

## Phase 6: Light Interaction Layer

Goal:

Add minimal JavaScript improvements.

Tasks:

- implement mobile nav toggle
- improve accessible interaction states

Deliverable:

- minimal `script.js`

---

## Phase 7: Cleanup and Extension Preparation

Goal:

Prepare the project for additional pages.

Tasks:

- normalize class naming
- remove unused styles
- identify reusable layout patterns
- confirm consistent container and spacing systems

Deliverable:

- stable homepage foundation

---

# Phase 8: Staff Page Mockup

Goal:

Create a **static staff page prototype (`staff.html`)** for design review.

Tasks:

- create `staff.html`
- reuse header, navigation, and footer from `index.html`
- add a page header introducing the Staff page
- include a short introductory paragraph
- create a **responsive grid of staff profile cards**

Each staff card should contain:

- staff photo (from `/images`)
- name
- role/title
- short bio
- optional email link

Design expectations:

- welcoming and approachable
- consistent photo sizing
- readable bios
- layout consistent with the homepage design system

Layout structure:

1. Header + navigation
2. Page header / title section
3. Intro paragraph
4. Staff grid
5. Footer

Do not implement CMS logic.

Deliverable:

- `staff.html`
- reusable staff card pattern
- responsive grid layout

---

# Definition of Done for Staff Mockup

The mockup is complete when:

- `staff.html` exists
- the page uses the same header/nav/footer as the homepage
- staff photos load from `/images`
- staff cards are visually consistent
- the layout works on mobile
- the design matches the homepage style

---

# Recommended Next Step Prompt for Codex

Use this repo’s `AGENTS.md` and `plan.md`.

Inspect:

- `index.html`
- `style.css`
- `script.js`
- `/images`

Then implement **Phase 8: Staff Page Mockup**.

Create `staff.html` that:

- reuses the existing header, navigation, and footer
- follows the same design system used on the homepage
- includes a page title and introduction
- displays staff members in a responsive grid of staff cards
- uses staff photos from `/images`

Reuse existing components and CSS patterns where possible.

This page is a **static prototype for design review** and will later become a WordPress template.

---

# Phase 9: Contact Page Mockup

## Goal

Create a **static contact page prototype (`contact.html`)** that provides visitors with essential contact information and a simple, accessible contact form.

This page is intended for **design and usability review** and will later be integrated with a CMS or backend form handler.

The page should follow the **same layout structure and design system** established by the homepage and other interior pages.

---

## Tasks

- create `contact.html`
- reuse the **header, navigation, and footer** from `index.html`
- add a clear page title and short introduction
- display the church’s contact information in a structured and readable format
- include a **simple, accessible contact form**
- ensure form labels and structure support **keyboard navigation and screen readers**
- keep styling consistent with existing design system components

---

## Contact Information Section

Display the church’s primary contact details clearly near the top of the page.

Information to include:

- church name
- street address
- city, state, ZIP
- phone number
- office hours

The address should be structured semantically and easy to read.

Example structure:

Contact section  
Church name  
Street address  
City, State ZIP  
Phone number  
Office hours

Optional enhancements:

- link the phone number using `tel:`
- optionally allow the address to link to a map later

---

## Contact Form Requirements

Create a simple form that collects:

- First Name
- Last Name
- Email Address
- Phone Number
- Comment / Question

Required fields:

- First Name
- Last Name
- Email Address
- Comment / Question

Optional field:

- Phone Number

---

## Accessibility Requirements

The form must follow accessibility best practices:

- each input must have a properly associated `<label>`
- required fields should use the `required` attribute
- required fields should also indicate requirement visually and textually
- group related inputs logically
- ensure clear focus states
- ensure keyboard navigation works correctly
- use semantic HTML elements where appropriate
- provide descriptive button text

Example principles:

- label must be connected using `for` and `id`
- form instructions should be clear
- error handling can be added later during CMS integration

---

## Layout Expectations

Suggested page structure:

1. Header + navigation
2. Page header / title section
3. Contact information section
4. Contact form section
5. Footer

The contact form should be visually balanced and easy to scan.

Avoid overly complex layouts.

---

## Form Behavior (Prototype Phase)

Since this is a **static prototype**, the form should:

- include semantic structure
- include accessible labels and required attributes
- not implement backend processing yet

The form `action` may be a placeholder.

Form submission behavior will be implemented later when CMS or backend integration occurs.

---

## Deliverable

- `contact.html`
- accessible contact form markup
- contact information section
- layout consistent with the homepage design system
- mobile-friendly form layout

---

## Definition of Done for Contact Page Mockup

The mockup is complete when:

- `contact.html` exists
- the page uses the same header/nav/footer as the homepage
- the church address, phone number, and hours are clearly displayed
- the contact form includes all required fields
- required fields are clearly marked
- labels are correctly associated with inputs
- the form is usable with keyboard navigation
- the layout works on mobile
- the design is consistent with the rest of the site

Reuse existing components and CSS patterns where possible.

This page is a **static prototype for design review** and will later become a WordPress template.
