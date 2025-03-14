#lang forge
sig Person {
    friends: set Person,
    followers: set Person
}
one sig Nim, Tim extends Person {}

pred wellformed {
    -- friends is symmetric (followers might not be)
    all disj p1, p2: Person | p1 in p2.friends implies p2 in p1.friends 
    -- you cannot follow or friend yourself
    all p: Person | p not in p.friends and p not in p.followers
}
run {wellformed} for exactly 4 Person