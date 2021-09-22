import pyperclip
#--------------------- Minutes Calculator ---------------------------------

timeOpened = float(input("Time Opened: ").replace(":" , "."))
timeClosed = float(input("Time Closed: ").replace(":" ,"."))
time_delta = abs(timeOpened - timeClosed)
print("minutes : " , time_delta)
minutes= float("{:.2f}".format(time_delta*60))
pyperclip.copy(str(minutes) + " min")
print("\n\n",minutes , " min" )

#-------------------------------------------------------------------------
