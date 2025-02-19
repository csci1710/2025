#lang forge

option run_sterling off










abstract sig Boolean {}
one sig True, False extends Boolean {}







sig Lock {
    
    breaks: pfunc Int -> Int -> Boolean
}






pred wellformed {
    
    
    
    all l: Lock, x, y: Int | {
        x < 0 => (l.breaks[x][y] = False or no l.breaks[x][y]) 
        y < 0 => (l.breaks[x][y] = False or no l.breaks[x][y]) 
    }
}












pred manufacturer_standard_tumbler[l: Lock, t: Int] {
    let lengths = l.breaks[t] | {
        
        some l1, l2: Int | {
            
            l1 >= 1 and l1 <= 5
            l2 >= 1 and l2 <= 5
            
            lengths[l1] = True
            
            no l3: Int | { l1 != l3 and l2 != l3 and lengths[l3] = True }
        }
    }
}

pred manufacturer_standard {
    
    
    
    all l: Lock | {
        
        
        
        manufacturer_standard_tumbler[l, 0]
        manufacturer_standard_tumbler[l, 1]
        manufacturer_standard_tumbler[l, 2]
        manufacturer_standard_tumbler[l, 3]
        manufacturer_standard_tumbler[l, 4]

        
        no t: Int, len: Int | {
            t < 0 or t > 4
            l.breaks[t][len] = True
        }
    }
}











pred lockOpenedWith[l: Lock, cut0, cut1, cut2, cut3, cut4: Int] {
    let b = l.breaks | {
        b[0][cut0] = True
        b[1][cut1] = True
        b[2][cut2] = True
        b[3][cut3] = True
        b[4][cut4] = True
    }
}



pred noOtherLockOpenedWith[l: Lock, cut0, cut1, cut2, cut3, cut4: Int] {
    all otherLock : Lock | {
        otherLock != l implies {
            let b = otherLock.breaks | {
                b[0][cut0] = False or no b[0][cut0] or
                b[1][cut1] = False or no b[1][cut1] or
                b[2][cut2] = False or no b[2][cut2] or
                b[3][cut3] = False or no b[3][cut3] or
                b[4][cut4] = False or no b[4][cut4] 
            }
        }
    }
    
}



















pred known {
    
    some disj aLockA,aLockB,aLockC,aLockD,aLockE: Lock | {

        
        
        
        
        
        

        lockOpenedWith[aLockA, 1, 2, 3, 4, 5]
        noOtherLockOpenedWith[aLockA, 1, 2, 3, 4, 5]
        lockOpenedWith[aLockB, 5, 4, 3, 2, 1]
        noOtherLockOpenedWith[aLockB, 5, 4, 3, 2, 1]
        lockOpenedWith[aLockC, 1, 2, 5, 1, 3]
        noOtherLockOpenedWith[aLockC, 1, 2, 5, 1, 3]
        lockOpenedWith[aLockD, 5, 4, 3, 4, 5]
        noOtherLockOpenedWith[aLockD, 5, 4, 3, 4, 5]
        lockOpenedWith[aLockE, 3, 4, 5, 2, 1]
        lockOpenedWith[aLockA, 3, 4, 5, 2, 1]
        not lockOpenedWith[aLockB, 3, 4, 5, 2, 1]
        not lockOpenedWith[aLockC, 3, 4, 5, 2, 1]
        not lockOpenedWith[aLockD, 3, 4, 5, 2, 1]
        
        
    }
}























one sig Key {
    cut0: one Int,
    cut1: one Int,
    cut2: one Int,
    cut3: one Int,
    cut4: one Int
}


pred solutionOpensAllLocks {
    
    all l: Lock | {
        lockOpenedWith[l, Key.cut0, Key.cut1, Key.cut2, Key.cut3, Key.cut4]
    }
}



run {
    wellformed
    manufacturer_standard
    known
    solutionOpensAllLocks
} for 4 Int, exactly 5 Lock

myName: 
  run 
    {} for 4 Int, exactly 5 Lock








pred lock_tolerances {
    all l: Lock, c, b: Int | {
        l.breaks[c][b] = True => (l.breaks[c][add[b, 1]] = False or no l.breaks[c][add[b, 1]])
    }
}
































































test suite for wellformed {
    example validEmpty is {wellformed} for {
        Lock = `Lock0
        Boolean = `True0 + `False0
        True = `True0
        False = `False0
    }
   
    
    assert manufacturer_standard is necessary for wellformed 

}