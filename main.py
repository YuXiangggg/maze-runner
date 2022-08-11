_break = 0
fast = 0
slow = 0
stop = 0
def go_forward():
    DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 45)
    basic.pause(350)
    DFRobotMaqueenPlus.motot_stop(Motors.ALL)
def State_when_going_straight():
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.GREEN)
    basic.pause(100)
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
def back():
    DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 70)
def U_turn():
    global _break
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.YELLOW)
    go_forward()
    basic.pause(100)
    turn_R()
    basic.pause(600)
    _break = 0
    fault_tolerant_R()
    _break = 0
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
def fault_tolerant_L():
    global _break
    while _break != 1:
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 or DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 or (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1 or DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 1):
            DFRobotMaqueenPlus.motot_stop(Motors.ALL)
            basic.pause(150)
            _break = 1
        else:
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CCW, 40)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 40)
            basic.pause(35)
def turn_L():
    DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CCW, 65)
    DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 65)
def line_tracking():
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.PINK)
    if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 35)
    else:
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, fast)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, slow + 30)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 1):
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, fast)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, slow + 15)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 1):
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 100)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, slow)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, slow + 30)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, fast)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
            DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.BLUE)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, fast)
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, slow + 15)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, slow)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 100)
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
def turn_R():
    DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 65)
    DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, 65)
def State_when_turning_right():
    global _break
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.BLUE)
    basic.pause(100)
    turn_R()
    basic.pause(350)
    _break = 0
    fault_tolerant_R()
    _break = 0
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
def State_when_turning_left():
    global _break
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.RED)
    basic.pause(100)
    turn_L()
    basic.pause(400)
    _break = 0
    fault_tolerant_L()
    _break = 0
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
def fault_tolerant_R():
    global _break
    while _break != 1:
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 or DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 or (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1 or DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1):
            DFRobotMaqueenPlus.motot_stop(Motors.ALL)
            basic.pause(150)
            _break = 1
        else:
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 40)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, 40)
            basic.pause(35)

def on_forever():
    global slow, fast, stop
    slow = 0
    fast = 50
    line_tracking()
    if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 or DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1:
        if DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 1:
            go_forward()
            if DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R3) == 1):
                stop = 1
            if (DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 or DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1) and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 0 or DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
                DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 20)
                basic.pause(200)
                State_when_turning_left()
            if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0:
                DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 20)
                basic.pause(200)
                State_when_turning_left()
        elif DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
            go_forward()
            DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 20)
            basic.pause(200)
            State_when_turning_left()
        elif DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 1):
            go_forward()
            if (DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 or DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1) and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 0 or DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
                State_when_going_straight()
            else:
                DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 20)
                basic.pause(200)
                State_when_turning_right()
    elif DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0):
        U_turn()
    while stop == 1:
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
        basic.pause(200)
basic.forever(on_forever)
