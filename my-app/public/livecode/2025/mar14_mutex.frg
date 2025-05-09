#lang forge/temporal 

// Default 5 
option max_tracelength 10

/*
  Let's model a (potential) mutual-exclusion algorithm! 
  Both threads run this:

  polite = null

  while(true) {
    // state: uninterested
    this.flag = true; 
    // state: halfway
    // I am being polite  (does it go here?)
    polite = me; 
    // state: waiting
    while(other.flag == true || polite != me) {}; // busy-wait until the other thread is done
    // state: in-cs
    run_critical_section(); // does whatever, we don't care
    this.flag = false; 
  }

*/

abstract sig Location {} 
one sig Uninterested, Halfway, Waiting, InCS extends Location {}

abstract sig Process {}
one sig ProcessA, ProcessB extends Process {}

one sig World {
    // where each process is in the program
    //   (should not be used by other processes!)
    var loc: func Process -> Location,
    // whether a process's flag is true or not 
    //   (should be visible/used by other processes!)
    var flags: set Process,
    // who is being polite, if anyone
    var polite: lone Process
}

// Are we in an initial state right now?
pred init {
  all p: Process | World.loc[p] = Uninterested
  no World.flags
  no World.polite
}

pred raiseEnabled[p: Process] { World.loc[p] = Uninterested }
// Are we taking the raise transition right now?
pred raise[p: Process] {
    -- GUARD
    raiseEnabled[p]
    -- ACTION
    World.loc'[p] = Halfway
    World.flags' = World.flags + p
    -- FRAME
    all p2: Process - p | World.loc'[p2] = World.loc[p2]
    World.polite' = World.polite
}


pred deferEnabled[p: Process] { World.loc[p] = Halfway }
pred defer[p: Process] {
    -- GUARD
    deferEnabled[p]
    -- ACTION
    World.loc'[p] = Waiting
    World.polite' = p
    -- FRAME
    all p2: Process - p | World.loc'[p2] = World.loc[p2]
    World.flags' = World.flags
}

pred enterEnabled[p: Process] { 
    World.loc[p] = Waiting
    (World.flags in p or World.polite != p)
}
pred enter[p: Process]  {
    -- GUARD
    enterEnabled[p]
    -- ACTION
    World.loc'[p] = InCS
    World.flags' = World.flags
    -- FRAME
    all p2: Process - p | World.loc'[p2] = World.loc[p2]
    World.polite' = World.polite
}
pred leaveEnabled[p: Process] {
    World.loc[p] = InCS
}
pred leave[p: Process] {
    -- GUARD
    leaveEnabled[p]
    -- ACTION
    World.loc'[p] = Uninterested
    World.flags' = World.flags - p
    -- FRAME
    all p2: Process - p | World.loc'[p2] = World.loc[p2]
    World.polite' = World.polite
}

pred doNothing {
    -- GUARD 
    all p: Process | {
        not leaveEnabled[p]
        not enterEnabled[p]
        not raiseEnabled[p]
        not deferEnabled[p]
    }

    -- ACTION/FRAME
    World.loc' = World.loc 
    World.flags' = World.flags
    World.polite' = World.polite
}

// Take a transition right now 
pred delta {
    some p: Process | {
        raise[p] or 
        enter[p] or 
        leave[p] or 
        defer[p]
    } or 
    doNothing
}

showTransition: run { 
    init
    // delta 
    // next_state delta
    always { delta }
} for exactly 2 Process


///////////////////////////////////////////////////////////////////////////
//// MODEL VALIDATION: 
//// Does our *model* reflect the system the way we want? 
///////////////////////////////////////////////////////////////////////////

// Tests of inclusion 

sat_raise: assert {some p: Process | raise[p]} is sat
  for exactly 2 Process
sat_enter: assert {some p: Process | enter[p]} is sat
  for exactly 2 Process
sat_leave: assert {some p: Process | leave[p]} is sat
  for exactly 2 Process

  // TODO: add appro. tests for defer

// *** !!! These mean different things. ***
//sat_init: assert {some s: State | init[s]} is sat
sat_init: assert {init} is sat
  for exactly 2 Process

// Tests of exclusion

disj_raise_enter: assert {
  some p: Process | {
    eventually { raise[p] and enter[p] }
  }
} is unsat 
for exactly 2 Process

// /////////////////////////////////////////////////////////////////////
// //// SYSTEM VALIDATION: 
// //// What properties do we want from the *system*?
// /////////////////////////////////////////////////////////////////////

// // Requirements

// (1) Mutual exclusion
// Never have more than one process in the critical section at once. 

// We'll use the inductive technique to check this. We had an interesting
// discussion about whether certain operators were needed in this context. 
//  I've taken some notes on that discussion. 

pred good_me { 
    // MUTUAL EXCLUSION
    #{p: Process | World.loc[p] = InCS} <= 1

    // ENRICHMENT: FORBID PRESTATES WITH BAD FLAG USE
    all p: Process | World.loc[p] in (InCS + Waiting) implies p in World.flags 
    // ENRICHMENT: FORBID PRESTATES WITH BAD POLITENESS
    // TODO ... ... ... 
}

-- If the initial state is really initial, then it's good. 
req_me_init: assert init is sufficient for good_me
-- Why don't we need `always` here? Because we're using the inductive approach. 
--   Temporal Forge will indeed always give us a full trace, but we have not said 
--   it must be a _valid trace of this system_. Thus, we can ignore everything but 
--   the first state. If we started to do something more complex, we'd want to 
--   think carefully about whether `always` is needed. 

pred next_good_me {
    -- next_state: advance the state index by one
    next_state good_me}

req_me_consec: assert  
  {good_me and delta} is sufficient for next_good_me
-- Why no `always` here? Again, because we're using the inductive method, 
-- we only care about the first two states of the trace Forge finds us. 
-- the "trace that Forge finds" isn't necessarily a valid system trace,
-- just the first transition is so constrained. 


// (2) Non-starvation 
// If a process indicates interest by flag=true, it will eventually
//  get access. 

// TN NOTE: I filled in an initial try at this, for your reference before Monday.

// Here we cannot use the inductive approach (at least, as we've learned so far). 
// We're looking for a reachable bad cycle. Fortunately, Temporal Forge will search
// for lasso traces by default.  

// Initial try: it turns out this isn't *quite* right, though.
// (It passes; what could be /wrong/?)
pred non_starvation {
    always { 
        all p: Process | {
            // if p is interested then 
            (World.loc[p] = Waiting) implies
            // some later state where p gets access
                (eventually World.loc[p] = InCS)
        }}}
req_non_starvation: 
  assert {init and always delta} is sufficient for non_starvation
