
x1 and (x1 implies x2)

**Exhaustive enumeration**

x1 | x2 | F
F F F 
F T F 
T F F
T T T

**Inference**

--> x1 always has to be true
--> which then implies that x2 is true 

(x1 or !x2) and 
(x1 or x2) and 
(!x1 or !x2) and 
(!x1 or x2)

* Let's try x1 true... 
  * we're in trouble with the next level (either !x2 or x2 will fail)
  ...

------

def solve(formula: BooleanFormula) -> bool: 
  remaining = variables_in(formula) 
  if remaining.isEmpty():    # True and False; False or False
    return simplify(formula)
  else: 
    branch = remaining[0]
    true_result = solve(substitute(formula, branch, True))
    false_result = solve(substitute(formula, branch, False))
    return true_result || false_result

N
(N-1) (N-1)
(N-2) (N-2) (N-2) (N-2)
...


def solve(formula: BooleanFormula) -> bool: 
  remaining = variables_in(formula) 
  if remaining.isEmpty():    # True and False; False or False
    return simplify(formula)
  else: 
    branch = remaining[0]
    true_result = solve(substitute(formula, branch, True))
    if true_result:
        return True
    return solve(substitute(formula, branch, False))

x1 and x2 and x3 and x4 and x5  -> no false-result branches at all
"5" rather than "2^5"

* could randomize whether we run true or false branch first 
* branch on false first instead (:-)) which is biased in the opposite direction
* heuristics to guess if there are "pivots" in the problem 

---------

x1 <-- a variable 

a _literal_ is either a variable or its negation   (x1)   (!x1)

a _clause_ is an "or" combining some set of literals 
  (!x1 or x2)
  x1  <-- unit clause
  (!x1 or !x2 or x1) <--- "tautology"; always true 
  [] <--- empty clause (always false; no options)

a _CNF formula_ is an "and" combining some set of clauses. 
  ("Conjunctive Normal Form")


x1 
// (x1 or x2 or x3) <---- given we know x1=true, this clause is satisfied -- full stop.
(!x3 or x2 or !x4)
//(!x1 or x2 or x3) <--- given we know x1=true, we know the !x1 option is impossible
  (x2 or x3)    <- replace with...
!x2
(!x3 or !x4)
x3

UNIT PROPAGATION
