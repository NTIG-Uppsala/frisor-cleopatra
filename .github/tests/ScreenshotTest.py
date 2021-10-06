from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from datetime import datetime
import time
from pathlib import Path
import os

codePath = ''

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])

# takes screenshots for different device resolutions

def screenShots(urlList):

    # resolution for screenshots
    # d = desktop
    # m = mobile
    resolutions = [[1920 , 1080 , "d"] , [2560 , 1440 , "d"] , [1080 , 1920 , "m"] , [1440 , 3040 , "m"]]
 
    now = datetime.now()
    for res in resolutions:
        print(res)

        # adds a timestamp for the screenshots
        dt_string = now.strftime("%d-%m-%Y , %Hh %Mm %Ss")

        # checks if the resolution is for mobile or desktop
        if(res[2] == "d"):
            # sets the resolution for the desktop emulation
            emulation = {
                "deviceMetrics": { "width": res[0], "height": res[1], "pixelRatio": 1.0 }
            }
        elif(res[2] == "m"):
            # sets the resolution for the mobile emulation
            emulation = {
                "deviceMetrics": { "width": res[0], "height": res[1], "pixelRatio": 1.0 },
                "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
            }
        else:
            print(res + "invalid device type")

        chrome_options = Options()
        
        # runs the emulation for different resolutions
        chrome_options.add_experimental_option("mobileEmulation", emulation)

        driver = webdriver.Chrome( options = chrome_options)
        print(urlList)
        for website in urlList:
            time.sleep(2)
            driver.get(website[1])
            print(website)
            driver.save_screenshot( "Screenshots/Image (" + website[0] + str(res[0]) + " x " + str(res[1]) + ")" + ".png")

            if(website == urlList[-1]):
                driver.close()

def Swedish():
    urlList = [["Landing_sv_",      "https://ntig-uppsala.github.io/frisor-cleopatra/"],
               ["Start_sv_ki_",     "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/swedish/"], 
               ["OpenHours_sv_ki_", "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/swedish/#Oppettider"],
               ["HouseCalls_sv_ki_","https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/swedish/#Hembesok"],
               ["Services_sv_ki_",  "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/swedish/#Tjanster"],
               ["FindUs_sv_ki_",    "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/swedish/hitta-hit.html"],
               ["Ourstaff_sv_ki_",  "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/swedish/vara-frisorer.html"],
               ["Start_sv_lu_",     "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/swedish/"], 
               ["OpenHours_sv_lu_", "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/swedish/#Oppettider"],
               ["HouseCalls_sv_lu_","https://ntig-uppsala.github.io/frisor-cleopatra/lulea/swedish/#Hembesok"],
               ["Services_sv_lu_",  "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/swedish/#Tjanster"],
               ["FindUs_sv_lu_",    "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/swedish/hitta-hit.html"],
               ["Ourstaff_sv_lu_",  "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/swedish/vara-frisorer.html"]]

    screenShots(urlList)

def English():
    urlList = [["Landing_en_",      "https://ntig-uppsala.github.io/frisor-cleopatra/"],
               ["Start_en_ki_",     "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/english/"], 
               ["OpenHours_en_ki_", "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/english/#Oppettider"],
               ["HouseCalls_en_ki_","https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/english/#Hembesok"],
               ["Services_en_ki_",  "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/english/#Tjanster"],
               ["FindUs_en_ki_",    "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/english/find-us.html"],
               ["Ourstaff_en_ki_",  "https://ntig-uppsala.github.io/frisor-cleopatra/kiruna/english/our-staff.html"],
               ["Start_en_lu_",     "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/english/"], 
               ["OpenHours_en_lu_", "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/english/#Oppettider"],
               ["HouseCalls_en_lu_","https://ntig-uppsala.github.io/frisor-cleopatra/lulea/english/#Hembesok"],
               ["Services_en_lu_",  "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/english/#Tjanster"],
               ["FindUs_en_lu_",    "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/english/find-us.html"],
               ["Ourstaff_en_lu_",  "https://ntig-uppsala.github.io/frisor-cleopatra/lulea/english/our-staff.html"]]
    #call screenshot function and send url

    screenShots(urlList)

Swedish()
time.sleep(1)
English()