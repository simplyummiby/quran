# PROJECT.md

# Quran Reading Schedule

## Project Overview

**Quran Reading Schedule** is a web application designed to help users maintain a consistent, year-round Qur'an reading routine.

The application prioritizes simplicity, focus, and ease of use. Every design decision should support reading the Qur'an rather than distracting from it.

---

# Purpose

The goal of this application is to:

* Encourage consistent daily Qur'an reading.
* Present daily readings in a clean and organized way.
* Allow users to pause and resume readings without losing their place.
* Remove unnecessary friction from the reading experience.

This is intended to be a companion for reading, not a replacement for the Qur'an itself.

---

# Target Users

Primary audience:

* The project author.
* Muslims seeking a structured, year-round Qur'an reading schedule.

The application should remain intuitive for users of all technical skill levels.

---

# Design Philosophy

When making changes, prefer:

* Simplicity over feature bloat.
* Readability over visual effects.
* Calm, uncluttered layouts.
* Consistency throughout the application.
* Mobile-first responsiveness.

Every feature should answer the question:

> "Does this make reading the Qur'an easier?"

If not, it probably does not belong.

---

# Core Principles

* The Qur'an should always remain the focus.
* Avoid unnecessary animations or distractions.
* Progress should never be lost.
* Existing functionality should remain stable whenever possible.
* New features should integrate naturally without changing the overall experience.

---

# Current Features

* Year-round reading schedule
* Reading Mode
* Progress tracking
* Resume reading
* Start Over for individual readings
* Automatic progress saving
* Responsive layout

---

# Planned Features

Potential future enhancements include:

* Ramadan Mode (1 Juz per day)
* Search by surah or ayah
* Bookmarks
* Personal notes
* Multiple reading plans
* Optional cloud synchronization
* Offline/PWA support

These features should remain optional whenever practical.

---

# User Experience Guidelines

The interface should feel:

* Clean
* Quiet
* Respectful
* Fast
* Predictable

Avoid unnecessary popups, confirmations, or interruptions.

Reading should require as few taps or clicks as possible.

---

# Storage Guidelines

User reading progress is valuable.

When modifying the application:

* Do not rename existing localStorage keys without a migration strategy.
* Never intentionally erase user progress during upgrades.
* Maintain backward compatibility whenever practical.
* If storage changes become necessary, migrate existing data automatically.

---

# Coding Standards

When implementing changes:

* Prefer small, incremental improvements.
* Avoid unnecessary refactoring.
* Maintain the existing project structure unless there is a clear benefit.
* Use descriptive variable and function names.
* Keep code readable over clever.

---

# Accessibility

Whenever possible:

* Maintain sufficient color contrast.
* Ensure controls remain usable on mobile devices.
* Use semantic HTML.
* Keep navigation straightforward.
* Avoid interactions that rely solely on color.

---

# Content Attribution

This application presents Qur'an text and related data obtained from third-party sources.

Respect the attribution and licensing requirements of all external data providers.

The application itself (interface, reading schedule implementation, logic, and original code) is separate from the Qur'an text and related datasets.

---

# Versioning

Use semantic versioning where practical.

Examples:

* v1.0.0 – Initial release
* v1.1.0 – New features
* v1.1.1 – Bug fixes

---

# Guidance for Future Contributors and AI Assistants

Before making changes:

1. Read this document.
2. Understand the purpose of the application.
3. Preserve the existing user experience whenever possible.
4. Avoid introducing breaking changes without discussion.
5. Discuss major architectural or user interface changes before implementing them.

When uncertain, choose the simpler solution.

The goal is not to build the largest Qur'an application—it is to build one that is reliable, peaceful to use, and encourages consistent engagement with the Qur'an.
