# Switch Unbrick Guide

## Quick reference
- [My switch seemingly does nothing when i try to boot it up normally](#early-boot-errors)
- [My switch shows the Nintendo/blackwhite atmosphere logo, then blackscreens](#mid-boot-errors)
- [My switch gets stuck at the Switch logo](#late-boot-errors)
- [My switch crashes on boot](#boot-Crashes)
- [Last Resort: Full on MMC rebuild guide](#mmc-rebuild)

## Early Boot Errors

1. Check if you can boot via RCM/Hekate
    - If you can, you likely have a fuse mismatch on your hands. Update to the latest firmware
2. Restore a Nand backup if you have one
3. Follow Step0, Step1, Step2 and Step3 from the [MMC Rebuild](#MMC-Rebuild) section with the same fw version as your current fw

## Mid Boot Errors

1. Check if you can boot via RCM/Hekate or stock
    - If you can boot stock but not cfw, you might be running too many sysmodules, try to disable some.
2. Check if you have an exFAT sd. If you have, format it to fat32 
3. Check if your system partition is mountable. This can be done via [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases)
4. Restore a Nand backup if you have one
5. Follow everything from the [MMC Rebuild](#MMC-Rebuild) section

## Late Boot Errors

1. Check if you can boot via RCM/Hekate or stock
    - If you can boot stock but not cfw, you might be running too many sysmodules, try to disable some.
2. Check if your USER partition is mountable. This can be done via [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases)
3. Check if your PRODINFO is fine. Decrypted prodinfo's start with `CAL0` in a hex editor
4. Restore a Nand Backup if you have one
5. Perform a [System Wipe](#System-Wipe)
6. Follow everything from the [MMC Rebuild](#MMC-Rebuild) section

## Boot Crashes

1. If booting via Atmosphere/Hekate, you'll get a TitleID/ProgramID for which program crashed. Check if this ID is in Atmosphere/contents, and if it is, delete it
2. Check if you can boot normally
    - If you can, your cfw setup is likely fucked
3. Perform a [System Wipe](#System-Wipe)


## MMC Rebuild

### Step 0: Making a nand backup
You probably want to make a nand backup before you start modifying your switch. Boot into [Hekate](https://github.com/CTCaer/hekate/releases), Go to tools, Backup eMMC, amd backup both `eMMC BOOT0 & BOOT1` and `eMMC RAW GPP`

### Step 1: Getting the files

What you need:

- Your own prod.keys file (This needs to be yours specifically (Unless you are trying to just generate the BIS files)! If you don't have them, try to dump them via [Lockpick_RCM](https://github.com/shchmue/Lockpick_RCM/releases))
- Your switch firmware (Try to dump them via [Tegraexplorer](https://github.com/suchmememanyskill/TegraExplorer/releases) if you don't have them)
- [EmmcHaccGen](https://github.com/suchmememanyskill/EmmcHaccGen/releases)

Instructions:

1. Extract the EmmcHaccGen zip somewhere, and place the prod.keys and the fw dump in the same folder
2. Open up a cmd prompt in the same folder, and execute the command `EmmcHaccGen.exe --keys (location of the prod.keys file) --fw (location of the firmware folder)` (example: `EmmcHaccGen --keys prod.keys --fw 9.1.0)`)
3. You should now have a folder called NX-(fw version)_exFAT. If you do, you can continue

### Step 2: Flashing BOOT0/1

What you need:

- [Etcher](https://www.balena.io/etcher/)
- [TegraRcmGui](https://github.com/eliboa/TegraRcmGUI/releases)

!!! Note "Manual Memloader"
    If you do not have access to TegraRcmGui, you can download [Memloader](https://switchtools.sshnuke.net/) here, copy the contents of the sample folder to the root of your sd, and inject the memloader.bin payload

Instructions:

1. Put your switch in RCM and connect it to your PC
2. Open up TegraRcmGui, go to the tools tab, Select BOOT0 from the dropdown menu, and hit the left USB icon to launch memloader.
    - If after this a popup window pops up that the drive needs to be formatted to use it, __Do not format!__ Click cancel!
3. Open up Etcher, select BOOT0.bin, select `Linux UMS disk`, and Flash. Boot0.bin is found in the NX-(fw version)_exFat folder you generated earlier
    - If you do not see `Linux UMS disk`, Restart at instruction 1
    - If BOOT0 is not of size 1.57 MB, or the `Linux UMS disk` is not of size 4.19 MB, stop, you went wrong somewhere
4. Put your switch in RCM and connect it to your PC
5. Open up TegraRcmGui, go to the tools tab, Select BOOT1 from the dropdown menu, and hit the left USB icon to launch memloader.
    - If after this a popup window pops up that the drive needs to be formatted to use it, __Do not format!__ Click cancel!
6. Open up Etcher, select BOOT1.bin, select `Linux UMS disk`, and Flash. Boot1.bin is found in the NX-(fw version)_exFat folder you generated earlier
    - If you do not see `Linux UMS disk`, Restart at instruction 1
    - If BOOT1 is not of size 524 KB, or the `Linux UMS disk` is not of size 4.19 MB, stop, you went wrong somewhere

Note: AutoRCM will be enabled! You need to boot via RCM or disable AutoRCM if you want the ability to boot normally.

### Step 3: Flasing BCPKG2

What you need:

- [HacDiskMount](https://switchtools.sshnuke.net/)
- [TegraRcmGui](https://github.com/eliboa/TegraRcmGUI/releases)

!!! Note "Manual Memloader"
    If you do not have access to TegraRcmGui, you can download [Memloader](https://switchtools.sshnuke.net/) here, copy the contents of the sample folder to the root of your sd, and inject the memloader.bin payload

Instructions:

1. Put your switch in RCM and connect it to your PC
2. Open up TegraRcmGui, go to the tools tab, Select RAWNAND from the dropdown menu, and hit the left USB icon to launch memloader
    - If after this a popup window pops up that the drive needs to be formatted to use it, __Do not format!__ Click cancel!
3. Open up HacDiskMount as administrator. Go to File > Open Physical Drive, and open the `Linux UMS disk`
    - If you do not see this disk you went wrong somewhere. Restart at instruction 1
4. Double click on BCPKG2-1-Normal-Main. Click on browse in the `Restore from file` section. Navigate to your NX-(fw version)_exFat folder, and select the `BCPKG2-1-Normal-Main.bin`
    - Repeat this for BCPKG2 2 to 4, selecting the corresponding file

### Step 4: Flashing System 

What you need:

- [HacDiskMount](https://switchtools.sshnuke.net/)
- [TegraRcmGui](https://github.com/eliboa/TegraRcmGUI/releases)

!!! Note "Manual Memloader"
    If you do not have access to TegraRcmGui, you can download [Memloader](https://switchtools.sshnuke.net/) here, copy the contents of the sample folder to the root of your sd, and inject the memloader.bin payload

Instructions:

1. Skip to instruction 5 if you're still in HacDiskMount from the last section
2. Put your switch in RCM and connect it to your PC
3. Open up TegraRcmGui, go to the tools tab, Select RAWNAND from the dropdown menu, and hit the left USB icon to launch memloader
    - If after this a popup window pops up that the drive needs to be formatted to use it, __Do not format!__ Click cancel!
4. Open up HacDiskMount as administrator. Go to File > Open Physical Drive, and open the `Linux UMS disk`
    - If you do not see this disk you went wrong somewhere. Restart at instruction 1
5. Search for your bis_key_02 in your prod.keys file (open it in notepad or something like that). The first 32 characters are the upper biskey, the last 32 characters are the lower biskey
6. Double click on `SYSTEM`. Insert your biskey (upper and lower) and hit save.
    - if it does not say `OK!`, you went wrong somewhere. Re-Split your biskeys
7. Click `Install Driver` in the `Virtual drive` section. Check `Passtrough zeroes` and `Mount` System.
8. Navigate to the A:/ drive on your pc. Delete the `Contents` folder and the `PRF2SAVE.RCV` file (if it exists). Copy the contents of the NX-(fw version)_exFat/SYSTEM folder to the A:/ drive
9. Try to boot your switch with Atmosphere.
    - Note: if you followed the entirety of this guide, AutoRCM will be enabled! You need to boot via RCM
    - If you do not have a basic Atmosphere setup on your SD, Download the atmosphere zip and fusee-primary.bin from [here](https://github.com/Atmosphere-NX/Atmosphere/releases). Extract the contents of the zip to the root of your sd, and inject fusee-primary.bin
    - If your switch does not boot, perform the [System Wipe](#System-Wipe)

## System Wipe

!!! Danger "System Wipe"
    This will wipe everything from your system. Including saves, installed games and everything else. Be safe and always have a nand backup

What you need:

- [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases)
- <a href="../Img/systemwipe.tegrascript" download>systemwipe.tegrascript</a>

Instructions:

1. Put the systemwipe.tegrascript script on the root of your sd card
2. Inject TegraExplorer using your favorite payload injector (for example TegraRcmGui)
3. Navigate to your SD, then select `systemwipe.tegrascript`, then `Launch Script`
4. Press vol+ to wipe saves from sysmmc
5. Confirm using vol+