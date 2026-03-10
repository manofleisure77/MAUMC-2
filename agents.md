# AGENTS.md

## Project Overview

This project is a static front-end redesign for Maple Avenue United Methodist Church.

Primary goal:
Create a modern, accessible, semantically structured church website that uses the real content, ministries, identity, and imagery of Maple Avenue United Methodist Church, while drawing design inspiration from these churches:

- Eastside Church: https://www.eastsideatl.org/
- Johns Creek UMC: https://www.johnscreekumc.org/
- McKendree UMC: https://mckendreeumc.org/

Important:
The new site should be inspired by the strengths of those sites, but should ultimately be better:

- smoother
- more organized
- more semantic
- more accessible
- more modern
- easier to navigate
- easier to extend later

This is a front-end-only project.

## Scope

Current scope includes:

- HTML
- CSS
- vanilla JavaScript
- responsive layout
- reusable front-end components
- use of available images from Maple Avenue’s current website when helpful

Out of scope unless explicitly requested:

- backend development
- CMS integration
- form handling with real submission
- database work
- authentication
- frameworks
- npm packages
- build tools

## Core Design Intent

The website should feel:

- welcoming to first-time visitors
- grounded and trustworthy
- visually clean and contemporary
- warm, not corporate
- easy to scan
- easy to use on mobile
- clearly structured around church life

The design should serve both:

1. newcomers asking basic questions like where to go, when worship is, and what to expect
2. current members looking for ministries, announcements, events, and giving

## Source Strategy

Use the inspiration sites only for:

- layout ideas
- navigation ideas
- visual pacing
- section hierarchy
- patterns for welcoming visitors
- homepage organization
- clarity of calls to action

Do not copy:

- text
- code
- logos
- unique branding
- exact layouts
- unique graphics or illustrations
- distinctive visual details that would make the new site feel derivative

Use Maple Avenue’s site for:

- real ministry/content categories
- real church information
- existing images when appropriate
- existing page priorities
- actual church identity and messaging

If content is missing, use clearly labeled placeholders.

## Project Principles

1. Keep the site static and simple.
   - Use plain HTML, CSS, and vanilla JavaScript.
   - Do not add frameworks unless explicitly requested.

2. Prioritize semantic HTML.
   - Use proper landmarks such as header, nav, main, section, aside, and footer where appropriate.
   - Use heading levels correctly.
   - Use lists for repeated navigation or ministry groupings when appropriate.

3. Prioritize accessibility.
   - Include a skip link.
   - Ensure keyboard-friendly navigation.
   - Use accessible button and menu behavior.
   - Maintain strong color contrast.
   - Add alt text for meaningful images.
   - Avoid vague link text like "click here."
   - Make interactive elements clearly visible and focusable.

4. Make the homepage newcomer-friendly.
   - Surface worship time and visit information early.
   - Make the next best action obvious.
   - Help visitors find ministries and announcements without digging.

5. Improve information architecture.
   - Reduce clutter.
   - Group related content logically.
   - Avoid overly long menus.
   - Favor clarity over trying to expose everything at once.

6. Keep the code beginner-friendly.
   - Use readable class names.
   - Keep CSS organized by section.
   - Keep JavaScript minimal and understandable.
   - Prefer maintainability over cleverness.

7. Build in small, reviewable steps.
   - Briefly explain the intended changes before larger edits.
   - Make targeted edits rather than rewriting everything unless asked.

## Assumed Project Structure

Assume this structure unless the repo shows otherwise:

- `index.html`
- `style.css`
- `script.js`
- `/images`

If additional files are needed:

- name them clearly
- keep the structure simple
- avoid unnecessary nesting

## Homepage Priorities

The homepage should likely prioritize the following information in a clear order:

1. Header with logo and primary navigation
2. Welcome/hero section
3. Worship time and plan-your-visit information
4. Brief introduction to Maple Avenue
5. Key ministries or ways to connect
6. Announcements or upcoming highlights
7. Giving or next-step call to action
8. Footer with contact and basic church info

This order can be adjusted if the real content suggests a better structure.

## Navigation Guidance

Navigation should be simpler and more intentional than the current site.

Favor a clear top-level structure such as:

- About
- Worship
- Ministries
- Events
- Give
- Contact

If subnavigation is needed, keep it manageable and organized.
Do not recreate a crowded or overly nested menu unless explicitly requested.

## Visual Direction

The site should not feel generic or outdated.

Aim for:

- strong whitespace
- clear section rhythm
- modern typography
- clean card and button patterns
- restrained use of accent colors
- tasteful imagery
- consistent spacing and hierarchy
- a polished mobile menu

Avoid:

- heavy visual clutter
- unnecessary animation
- too many competing calls to action
- dated church-site tropes
- decorative effects that hurt readability

## Images

You may use images from the current Maple Avenue website when useful.

When using church images:

- choose images that feel welcoming and authentic
- avoid overly repetitive image treatment
- ensure images support content, not distract from it
- provide alt text guidance for meaningful photos

If an image filename exists but the image purpose is unclear, flag it for manual review.

## CSS Standards

- Prefer reusable utility-like patterns only when they remain readable
- Use CSS variables for colors, spacing, border radius, and typography when helpful
- Keep selectors reasonably shallow
- Group styles by page section
- Maintain a consistent spacing system
- Use responsive layouts without hard-coded brittle dimensions when possible

## JavaScript Standards

Use JavaScript only where it improves usability, such as:

- mobile navigation toggle
- accessible submenu behavior
- simple announcement or accordion interactions if requested
- sticky header only if it improves usability

Do not add JavaScript just for effect.

## Content Rules

Use Maple Avenue content as the source of truth where available.

Do not invent:

- staff details
- worship times
- ministry facts
- schedules
- event details
- church beliefs
- addresses
- contact data

If something is unknown, use a clearly marked placeholder.

## Workflow Expectations

When asked to build or edit:

1. Read AGENTS.md and plan.md first
2. Inspect the existing files before changing them
3. Explain the intended change briefly
4. Make the smallest effective set of edits
5. Preserve working structure unless asked to replace it
6. Note any assumptions or placeholders

## What Success Looks Like

A successful result is a front-end site that:

- feels clearly better than the inspiration sites in structure and polish
- reflects Maple Avenue’s real identity and content
- is easier for visitors to understand
- is more accessible and semantic
- is responsive and maintainable
- provides a strong foundation for future interior pages
