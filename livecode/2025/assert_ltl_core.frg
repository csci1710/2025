#lang forge/temporal 
open "assert_ltl.frg"

// "withAlways" failed, but "withoutAlways" passed. 
// What if we wanted to know _why_?
option solver MiniSatProver
option logtranslation 1
option coregranularity 1
option core_minimization rce

// Pasted *ONE* command that yields unsat:
withoutAlways: assert {C.count >= 0} is necessary for traces
// Once this runs and fails, hit the "Stop" button in VSCode.
