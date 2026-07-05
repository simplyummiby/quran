# Changelog

## v0.15.0
- Renamed Full Schedule to My Schedule.
- Renamed Completed Plans to History.
- Removed the separate Progress page from navigation and markup.
- Updated My Schedule subtitle to: Your reading plan at a glance.
- Kept Home progress card as the single progress view.

## v0.14.2
- Removed the duplicate Current Reading text inside Full Schedule rows.
- Changed the current row action area to show a light green 📍 Current badge.
- Matched the Current badge width and shape to the Set as Current button.
- Kept the Reading Info page Set as Current Reading button unchanged.

## v0.14.1
- Replaced the Full Schedule pin action button with a clearer **Set as Current** text button.
- Kept the pin as a visual **📍 Current** badge for the active bookmark row.
- Updated the Full Schedule helper note to match the clearer button wording.

## v0.14.0
- Added a Start New Cycle button to the Progress card when a plan reaches 100%.
- Changed Current Streak week display to start on Sunday.
- Renamed the menu item from Current Plan to Full Schedule.
- Added a pin button in the Full Schedule modal to set any item as the current reading.
- Updated the Full Schedule note so it no longer points users to the reading info page for bookmarking.

## v0.13.9
- Added percentage-based progress encouragement messages.
- Updated 100% progress to show a completion message instead of a keep-going message.
- Added a Delete button for completed cycle records in Completed Plans.
- Deleting a completed cycle only removes that history entry and does not change current reading progress.

## v0.13.8
- Separated browsing a reading from moving the current-reading bookmark.
- Full Schedule clicks now open the reading information page as a preview without changing your place.
- Added an explicit “Set as Current Reading” action on the reading information page.
- Reading Mode from a preview opens as casual reading unless the reading is set as current.
- Kept completion progress separate from the bookmark so starting at pages 133–134 does not mark earlier readings complete.

## v0.13.3
- Replaced home page placeholder SVG artwork with photographic PNG assets.
- Current Plan now uses `assets/images/current-plan.png`.
- Current Reading now uses `assets/images/current-reading.png`.

## v0.13.2
- Removed the decorative ornament/image under Welcome/Welcome Back.
- Updated the phone header to match the refined green-and-gold visual direction used by the sidebar on larger screens.
- Kept desktop and tablet layouts unchanged from v0.13.1.


## v0.13.0 — Responsive Redesign & Navigation Polish

- Established a clearer responsive layout system:
  - Desktop: sidebar + reading content + right progress panel.
  - Tablet: sidebar + reading content, with Progress and Current Streak stacked below the reading content.
  - Phone: hamburger navigation with single-column reading content.
- Restored the visible sidebar on tablet.
- Kept hamburger navigation on phone only.
- Preserved the reading-first home page hierarchy.
- Kept Welcome/Welcome Back centered above the Current Plan card.
- Kept the SVG menu icon set and Lora navigation typography from v0.12.9.
- Continued using simplified navigation names: Home, Current Reading, Current Plan, Reading Plans, Progress, Completed Plans, and About This App.

## v0.12.9 — Navigation Icon & Font Polish

- Replaced mixed menu symbols with matching SVG icons in `assets/icons/`.
- Updated menu typography to Lora.
- Renamed Browse Schedule to Current Plan.
- Renamed Completed Cycles to Completed Plans.
- Moved About This App to the end of the menu.

## v0.12.8 — Header, Welcome, and Reset Wording Polish

- Added Welcome!/Welcome Back! punctuation.
- Centered the welcome area across devices.
- Changed reset button wording to Reset This Plan.

## v0.12.5–v0.12.7 — Reading-First Layout Direction

- Moved Progress and Current Streak out of the main home dashboard.
- Removed the duplicate Current Plan Progress card.
- Centered branding and simplified the header.
- Removed the header icon and top quick links.
- Introduced mobile hamburger navigation.

## v0.12.0–v0.12.4 — Multiple Reading Plans

- Added Two Pages a Day.
- Added independent progress/history/reset by plan.
- Updated plan names and order:
  - Juz Amma
  - Two Pages a Day
  - 120 Day Plan
- Renamed Complete Qur'an to 120 Day Plan.

## v0.13.1

### Changed
- Elevated the home dashboard styling toward the refined green-and-gold visual direction.
- Added illustrated Qur'an artwork assets for the Current Plan and Current Reading cards.
- Standardized home card headings with uppercase green labels and gold accent lines.
- Reduced the Current Plan title size and preserved plan details such as pages, readings, and days.
- Restyled the desktop sidebar with a deep green background and cohesive navigation presentation.
- Reworked Progress and Current Streak cards for a more polished centered statistic-card style.

### Notes
- This release focuses on visual polish and responsive scaling, not reading-plan logic changes.
