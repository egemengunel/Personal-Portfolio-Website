# Writing a case study

How Egemen and Claude write a case study for this site. Read this before adding
an entry to `caseStudiesData.ts`, not after. The mechanics of the data model are
in `CLAUDE.md`; this file is about what goes in it and how it gets there.

The audience is a recruiter or hiring manager for a design engineer, product
engineer or mobile product engineer role. That audience decides everything
below. They read three of these back to back, they skim, and they are looking
for evidence that decisions were made by a person who can say why.

---

## Order of operations

Never start with prose. The order is the point.

1. **Claude reads the source material first.** The app's repo, its docs, its
   commit history, and any analytics or post-mortems Egemen has. Deleted files
   in git history are often the best record of a direction that was abandoned.
2. **Claude asks design engineer questions.** Specific, answerable, about
   decisions rather than features. The point is to surface reasoning that is in
   Egemen's head and nowhere in the repo.
3. **Egemen answers, usually as a voice note.** Long, unstructured, in his own
   words. This is the raw material for voice, not just for facts.
4. **Claude drafts sections from the answers**, in Egemen's register, and says
   which claims are unsupported.
5. **Screens come last.** Egemen exports them by hand. Claude does not export
   assets from Sketch on its own initiative.

Assets are compressed before they are committed, every time, and go in
`public/case-studies/<slug>/<YYYY-MM>/`. See `CLAUDE.md`.

---

## What a section is

A section is one decision, the reason for it, and what it cost. If a section
does not contain a decision, it is not a section. Delete it or fold its one
good sentence into the section next door.

Good: "I dropped into UIKit for one button." A goal, a framework that refused,
a diagnosis, a workaround, and an honest note about what the workaround costs.

Not a section: an essay about what other people's work looks like. A feature
tour. A list of technologies. Anything whose argument is "this was hard".

Prefer a section that shows the decision being wrong later. Every study on this
site ends with a real "what I would change", and those are the sections that
make the rest of the page credible.

### Section ordering

Strongest decision second, after a short opener that sets up the rule the rest
of the study follows. A skimmer leaves somewhere in the middle, so nothing that
matters goes in the middle. Confession sections go last.

---

## Voice

Egemen's, not Claude's. The rules that actually describe it:

- Plain declarative sentences. A long one carrying the reasoning, then a short
  one delivering the verdict.
- Concrete nouns and exact numbers. "0.3761 recall", "three patches", "646x1400".
- No adjective does an argument's work. If the claim needs "beautiful" or
  "elegant", the claim is not made yet.
- First person, and specific about what he did versus what was shared. Lucid has
  a backend partner; the other apps are his alone.
- **No em dashes.** Anywhere. Commas, periods, or a colon.
- Name the trade. "It does mean the button is in a different place depending on
  which iOS you are running. I decided that was fine."

### Tics to watch for, because they recur

- **Defining by negation.** "I did not want a list that happens to contain
  terms." One per study, maximum. More than that and the product sounds designed
  in opposition to other apps rather than toward something.
- **Undercutting a claim in the same breath it is made.** "I think that is why
  it reads as expressive." State it, then let a separate sentence carry the
  caveat if there is one.
- **The "not X, it is Y" construction.** It is a strong move and it is used a
  lot. Count them.
- **Confession fatigue.** Three studies that each end with a drifted design
  system read as a habit, not as candour. Name the missing process step that
  caused it instead of listing the symptoms again.

---

## Numbers

- **Never invent one.** If the number is not in a document Egemen supplied, it
  does not go on the page.
- **Sourced, and say the source in the copy when it matters**: App Store
  Connect, the PostHog funnel with its n, a Supabase query, the model's test
  split.
- **Outcomes, not effort.** "13 languages" and "307 localized strings" are
  effort. Downloads, completion rates, recall, and conversion are outcomes.
- **A metric chip has to be legible on its own.** A number that needs a section
  to explain it either gets that section or gets cut. Three good chips beat four
  with a filler.
- **Attribution honesty.** If a cohort is scoped by signup date rather than by
  campaign, say "people who created an account over those days", not "people the
  campaign brought in".
- **No money.** No revenue, proceeds, ROAS or subscriber counts. Nobody hiring
  for these roles is evaluating the business, and a small revenue figure invites
  the one frame where the work looks weak when it is not. Cost figures that
  demonstrate a modelled prediction being checked against reality are fine.

---

## Length

Roughly 1,200 to 1,800 words of body copy. Lucid runs longer because it carries
more decisions, and that is the ceiling, not the target. Length is never the
real problem; a section that argues nothing is the real problem, and cutting it
fixes both.

---

## The review pass

Before a study is done, read all of them back to back the way a recruiter would,
and answer honestly:

- Which one would you interview on, and which one would you skip?
- Does every section contain a decision?
- Is there anywhere a claim stands without being immediately taken back?
- Does a number appear that nothing on the page explains?
- Is the same anecdote told twice in two sections?
- Would an interviewer's obvious next question be answered on the page, or left
  hanging?

Brutal is useful here. Agreement is not.

---

## Antenna, and rejected directions

Antenna is the one project with a direction that was designed in full and then
scrapped, so it owns that theme. Other studies should not claim it, or Antenna's
version lands softer. The evidence is in its git history: a day of deletions on
3 and 4 September 2026 that removed the old components wholesale.
