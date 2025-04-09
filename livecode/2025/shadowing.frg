#lang forge
sig Owner {}
sig Pet { owner: one Owner }
run { one pet: Pet, owner: Owner | pet.owner = owner }
//run { some x: Pet | some x: Owner | some x.owner }
