let _break = 0
let fast = 0
let slow = 0
let stop = 0
function go_forward() {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 45)
    basic.pause(350)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
}

function State_when_going_straight() {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    basic.pause(100)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
}

function back() {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 70)
}

function U_turn() {
    
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    go_forward()
    basic.pause(100)
    turn_R()
    basic.pause(600)
    _break = 0
    fault_tolerant_R()
    _break = 0
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
}

function fault_tolerant_L() {
    
    while (_break != 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 || DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 || (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 || DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1)) {
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            basic.pause(150)
            _break = 1
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 40)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 40)
            basic.pause(35)
        }
        
    }
}

function turn_L() {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 65)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 65)
}

function line_tracking() {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 35)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, fast)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, slow + 30)
        }
        
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1)) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, fast)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, slow + 15)
        }
        
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1)) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, slow)
        }
        
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, slow + 30)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, fast)
        }
        
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, fast)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, slow + 15)
        }
        
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, slow)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
        }
        
    }
    
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
}

function turn_R() {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 65)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 65)
}

function State_when_turning_right() {
    
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
    basic.pause(100)
    turn_R()
    basic.pause(350)
    _break = 0
    fault_tolerant_R()
    _break = 0
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
}

function State_when_turning_left() {
    
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    basic.pause(100)
    turn_L()
    basic.pause(400)
    _break = 0
    fault_tolerant_L()
    _break = 0
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
}

function fault_tolerant_R() {
    
    while (_break != 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 || DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 || (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 || DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1)) {
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            basic.pause(150)
            _break = 1
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
            basic.pause(35)
        }
        
    }
}

basic.forever(function on_forever() {
    
    slow = 0
    fast = 50
    line_tracking()
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 || DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
            go_forward()
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 1)) {
                stop = 1
            }
            
            if ((DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 || DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 || DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
                DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 20)
                basic.pause(200)
                State_when_turning_left()
            }
            
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 20)
                basic.pause(200)
                State_when_turning_left()
            }
            
        } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
            go_forward()
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 20)
            basic.pause(200)
            State_when_turning_left()
        } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1)) {
            go_forward()
            if ((DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 || DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) && (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 || DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
                State_when_going_straight()
            } else {
                DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 20)
                basic.pause(200)
                State_when_turning_right()
            }
            
        }
        
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0)) {
        U_turn()
    }
    
    while (stop == 1) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(200)
    }
})
