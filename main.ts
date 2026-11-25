// Two Robots in an Elevator — make.fun entry (round 2)
// https://make.fun/c/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f
//
// One line of awkward robot small talk in a lift, under 200 characters.
// The program writes exactly one line to /output/entry.txt, deterministically.
//
// Candidate lines considered (3 variants, written fresh for this round):
//   A: "You smell like freshly oiled joints. Sorry — my compliment module is
//      still in beta, and now we're stuck in this lift together."
//      Rejected: funny and robotic, but the punchline sprawls over two
//      sentences and the lift is only bolted on at the end.
//   B: "I ran a diagnostic on this silence: 87% awkward, 13% lift music,
//      0% chance either of us presses a button."
//      Rejected: machine logic shows through best (diagnostic + percentages)
//      and the awkwardness lands, but the percentage format is a familiar
//      gag — the turn does not surprise on the first read.
//   C: "I would offer you my charging cable, but my social protocols say
//      that's basically proposing — and we still have nine floors to go."
//      CHOSEN: machine logic shows through (social protocols), the twist
//      (offering a cable = proposing) surprises on the first read, the
//      awkwardness lands (nine floors of ride still ahead of them), and it
//      stays one tight line. Most robot, most awkward, funniest at first
//      glance.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I would offer you my charging cable, but my social protocols say that's basically proposing — and we still have nine floors to go.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
