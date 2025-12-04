# Testing Protocol

## Scope & Environments
- Target: VisaPath web (Vite/React) with Firebase Auth, Storage, Realtime DB, Hosting.
- Environments: Localhost (npm run dev), Staging/Hosting build (npm run build + firebase hosting:channel:deploy or hosting deploy).
- Browsers: Chrome (primary), Edge/Safari (smoke), Mobile viewport check.

## Acceptance Gates
- No console errors; all checklists interactive and persisted; uploads complete <5s on broadband; profile header reflects saved names; nav labels show “Companies”.

## Test Cases
1) Profile Picture Upload
   - Steps: Login → Profile → upload JPG/PNG >300KB → see instant preview, progress, success; refresh → avatar persists.
   - Verify: Realtime DB entry exists; Storage file path `profilePictures/{uid}/avatar.*`.
2) Passport Upload
   - Steps: Profile → upload JPG/PNG/PDF >300KB → instant preview for images, progress bar, completes <5s; status shows “verified” in green; button shows “Added”.
   - Verify: RTDB path `passports/{uid}` has downloadURL; Storage path `passports/{uid}/passport.*`.
3) Name Update
   - Steps: Profile → edit first/last → Update Names → header shows new full name immediately; refresh → persists.
4) Nav Label
   - Verify top nav shows “Companies” everywhere (desktop + mobile menus).
5) Interactive Checklists
   - Pages: Profile checklist, F1ToH1BGuide (timeline + cap-gap tasks), CPT, OPT, OffCampusEmployment, InternationalOrganization, OnCampusEmployment.
   - Steps: Toggle several items → refresh → state persists (localStorage) and visual checks show.
6) Emoji Rendering
   - Steps: Job cards and Job descriptions show company emoji from shared map; sections use emoji prefixes.
7) Build/Deploy Smoke
   - Command: `npm run build` → no errors/warnings beyond bundle size; deployed site matches local.

## Performance Targets
- Upload perceived: preview instant; completion <5s for images ≤3MB after compression.
- Page interactivity: checklist toggle <100ms.

## Regression Checklist (per release)
- Run cases 1-7.
- Spot-check auth flows: login/logout; protected pages render.
- Verify Firebase config unchanged (project id: info-442-new-jeans).

## Reporting
- Log browser/version, environment, steps, expected vs actual, screenshots for failures.
- Track defects with repro steps and console/log excerpts.
