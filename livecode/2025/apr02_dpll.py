def solve(formula: Set[Clause]) -> bool:
    
    # are there any unit clauses? if so, propagate them
    # keep doing so until there are no more changes
    # Beware: mutation can be a source of bugs here...
    old_formula, formula = propagate_unit_clauses(formula)
    while formula <> old_formula:
        old_formula, formula = propagate_unit_clauses(formula)
    
    # Did we produce the empty clause? (We might represent the e.c. as {} or [] etc.)
    if EmptyClause in formula:
        return False
    # Do we otherwise have only unit clauses remaining? (What could go wrong in this check?) 
    elif formula == units_in(formula):    
        return True
    else:
        branch = remaining[0]
        # no longer substitute; instead, _add_ a unit clause to represent the "True" guess
        true_result = solve(formula + {branch})
        if true_result: 
            return True
        else: 
            # no longer substitute; instead, _add_ a unit clause to represent the "False" guess
            false_result = solve(formula + {!branch})
            return false_result    
```