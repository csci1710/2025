#lang forge 

sig Animal {}
sig Human,Cat extends Animal {}

pred p[h: Human] { Animal = h + Cat }
// run {
//     //some a: Animal | p[a]
// }

fun foo[a: Animal]: lone Animal {
    (none & Animal)
}
run { some a: Animal | some foo[a]}