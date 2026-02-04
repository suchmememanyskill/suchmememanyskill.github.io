# **Switch Unbrick Guide**

!!! Danger "**READ THIS BEFORE CONTINUING**"

    This guide isn't called an "unbrick guide" for no reason, it shouldn't be treated as a way out of simple inconveniences and should **NOT** be followed without proper reason to do so. A "brick" indicates that a device is dysfunctional on a soft- and/or hardware level. The term "software brick" means that something is messed up at the internal storage/operating system level, while "hardware brick" indicates that you experience hardware failure or hardware malfunction (causing the system to not boot properly, if at all).
    
    Reasons to **NOT** follow this guide include:
    
    - Your games don't work,
    - You run into homebrew apps crashing,
    - You experience homebrew related crashes upon booting Atmosphere,
    - A YouTube video guide or discord server told you to follow this guide. (With the exception being Discord servers like Nintendo Homebrew or ReSwitched.) 

    If you experience **ANY** of the above, please ask for help in `#switch-assistance-1` or `#switch-assistance-2` in the [NH-Discord server](https://discord.gg/C29hYvh) before doing anything and don't continue following this guide.
    
    Please do **NOT** misuse this guide or any of the tools used within this guide (looking at you, sthetix and other YouTube video guide creators).
    
    Finally; issues caused by hardware failure or hardware malfunction (in the case of modchip installation issues, for example) will **NOT** be fixed by following the steps below. Please do **NOT** follow this guide if you experience such issues.

## **Quick reference**
- [My Switch seemingly does nothing when I try to boot it up normally](#early-boot-errors)
- [My Switch shows the Nintendo and/or black and white atmosphere logo, then black screens](#mid-boot-errors)
- [My Switch gets stuck at the Switch logo](#late-boot-errors)
- [My Switch crashes on boot](#boot-crashes)
- [Last Resort: Full MMC Rebuild guide](#mmc-rebuild)

-----

## **Types of boot errors**

The tabs below contain *possible* fixes for "common" boot errors, these are **NOT** guaranteed to work on every console. Many issues can *look* the same but can have fundamentally different causes.

=== "Early-Boot Errors"
    
    The instructions below are numbered based on level of 'severity' (**low** to **high**), please don't follow all of them if you have no reason to do so.
    
    1. Check if you can boot stock (not OFW) via hekate's `Launch` menu.
        - If you can, you likely have `AutoRCM` enabled or you have an e-fuse mismatch on your hands. Update to the latest firmware via stock or sysCFW.
    2. Restore a NAND backup if you have one.
    3. Follow everything from the [MMC Rebuild](#mmc-rebuild) section with the same firmware version as your current firmware version.
    4. If **NONE** of these steps worked, please ask for help in `#switch-assistance-1` or `#switch-assistance-2` in the [NH-Discord server](https://discord.gg/C29hYvh).

=== "Mid-Boot Errors"

    The instructions below are numbered based on level of 'severity' (**low** to **high**), please don't follow all of them if you have no reason to do so.
    
    1. Check if you can boot stock (not OFW) via hekate's `Launch` menu.
        - If you can boot stock but not sysCFW, you might be running too many sysmodules, try to disable some.
    2. Check if you have an exFAT formatted SD. If it's formatted as exFAT, format it to FAT32 using [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card).
    3. Check if your `SYSTEM` partition is mountable. This can be done via `Browse eMMC` > `SYSTEM` in [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases)
    4. Restore a NAND backup if you have one.
    5. Follow everything from the [MMC Rebuild](#mmc-rebuild) section.
    6. If **NONE** of these steps worked, please ask for help in `#switch-assistance-1` or `#switch-assistance-2` in the [NH-Discord server](https://discord.gg/C29hYvh).

=== "Late-Boot Errors"

    The instructions below are numbered based on level of 'severity' (**low** to **high**), please don't follow all of them if you have no reason to do so.
    
    1. Check if you can boot stock (not OFW) via hekate's `Launch` menu.
        - If you can boot stock but not sysCFW, you might be running too many sysmodules, try to disable some.
    2. Check if your `USER` partition is mountable. This can be done via `Browse eMMC` > `USER` in [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases)
    3. Check if your `PRODINFO` is fine. To do this, follow the steps below:
        1. Boot TegraExplorer,
        2. Navigate to `Browse eMMC` > `PRODINFO`,
        3. Select `PRODINFO` and dump it when prompted,
        4. Go back to TegraExplorer's main menu and navigate to `Browse SD`,
        5. Navigate to `tegraexplorer` > `Dumps` > `PRODINFO`,
        6. Select `PRODINFO`, select `View hex`.
            - "Intact" PRODINFO starts with `CAL0` and contains your Switch serial number at offset `0x250`.
    4. Restore a NAND Backup if you have one.
    5. Perform a [System Wipe](#system-wipe).
    6. Follow everything from the [MMC Rebuild](#mmc-rebuild) section.
    7. If **NONE** of these steps worked, please ask for help in `#switch-assistance-1` or `#switch-assistance-2` in the [NH-Discord server](https://discord.gg/C29hYvh).

=== "Boot Crashes"

    The instructions below are numbered based on level of 'severity' (**low** to **high**), please don't follow all of them if you have no reason to do so.

    1. If you're booting via hekate/fusee, you'll get a TitleID/ProgramID for which program crashed. Check if this ID is in `sd:/atmosphere/contents`, and if it is, delete it.
    2. Check if you can boot stock via hekate's `Launch` menu or OFW via `Reboot` > `OFW` from hekate's `Home` menu.
    
        !!! info "If you can, follow the instructions below:"
            1. On your SD card, rename your `atmosphere` folder to `oldatmosphere`,
            2. Extract the contents of the latest [Atmosphere release](https://github.com/Atmosphere-NX/Atmosphere/releases) (`atmosphere-X.XX.X-master-XXXXXXXXX+hbl-X.X.X+hbmenu-X.X.X.zip`) on your SD, replacing (merging, if on macOS) when asked,
            3. Copy the `hosts` folder from `oldatmosphere` to `atmosphere`,
            4. Copy the `automatic_backups` folder from `oldatmosphere` to `atmosphere`.
            
    3. Perform a [System Wipe](#system-wipe)
    4. If **NONE** of these steps worked, please ask for help in `#switch-assistance-1` or `#switch-assistance-2` in the [NH-Discord server](https://discord.gg/C29hYvh).

-----
    
## **MMC Rebuild**

An MMC Rebuild is an "advanced" procedure which involves generating system restoration files using the decryption keys of your Switch and your Switch firmware dump in combination with a tool called [EmmcHaccGen](https://github.com/suchmememanyskill/EmmcHaccGen), to (hopefully) restore your Switch back to a working state. Please keep in mind that following this section of the guide should **ONLY** be done if you have a valid reason to do so.

### **Step 0: Making a NAND backup**
You will want to make a NAND backup before you start modifying your Switch. To do so, follow the steps below.

#### What you need:
- The latest release of [hekate](https://github.com/CTCaer/hekate/releases) (`hekate_ctcaer_X.X.X.zip`)

#### Instructions:
1. Extract the bootloader folder from the hekate .zip to the root of your SD card.
2. Inject the hekate payload (`hekate_ctcaer_X.X.X.bin`) using your desired RCM payload injector.
    - **Note:** If you use a modchipped Switch, you can place the hekate payload on the root of your SD card, rename it to `payload.bin` and turn on your Switch.
3. Go to `Tools` > `Backup eMMC` and back up `eMMC BOOT0 & BOOT1` & `eMMC RAW GPP`.
4. You should now end up with `BOOT0/BOOT1` and 15 parts (30 parts if on an OLED Switch) of `rawnand.bin` in `sd:/backup/<random characters>/`.
5. Navigate to `Tools` > `USB Tools` > `SD Card` and connect your Switch to your PC via USB.
6. Access your SD card and back up the `backup` folder on the root of your SD card to your PC.
7. Once done, safely eject the `hekate UMS` device from your PC, then navigate back to hekate's `Home` menu.

### **Step 1: Generating the files and copying them to your SD card**

#### What you need:

- *Your* Switch's `prod.keys`. (This needs to be yours specifically! Decryption keys are console-unique.) If you don't have them, try to dump them via Lockpick_RCM.
    -   **Note:** Lockpick_RCM is not linked due to legal concerns, and help is not provided with obtaining it. Please refrain from using modified versions of Lockpick_RCM, such as "Lockpick_RCM_Pro".
- Your Switch's firmware dump (try to dump your firmware via [TegraExplorer's](https://github.com/suchmememanyskill/TegraExplorer/releases) `FirmwareDump.te` script).
- A computer running Windows, Linux or macOS.

#### Follow the instructions for your computer's operating system below:

=== "Windows x64"

    #### What you need:

    - The latest release of [EmmcHaccGen-Extended](https://github.com/DefenderOfHyrule/EmmcHaccGen-Extended/releases) (`EmmcHaccGen-Extended-win-x64.GUI.exe`)
    
    #### Instructions:

    1. Open `EmmcHaccGen-Extended-win-x64.GUI.exe`, import your Switch's prod.keys and firmware folder.
    2. Configure the sliders/toggles depending on your console model:
        - **V1 Unpatched consoles:** *Enable* the `Enable AutoRCM` and, if applicable, the `ExFAT Support` toggles.
        - **V1 Patched consoles:** *Disable* the `Enable AutoRCM` toggle and, if applicable, *enable* the `ExFAT Support` toggle.
        - **V2/Mariko consoles:** *Enable* the `Generate Mariko Firmware` and, if applicable, the `ExFAT Support` toggles.
    3. Click `Generate` and select any location on your PC to save the generated files to.
    4. Once done, boot hekate (if you aren't already in hekate/Nyx), navigate to `Tools` > `USB Tools` > `SD Card` and connect your Switch to your PC via USB.
    5. In EmmcHaccGen GUI, click `Prepare SD Card` and select/open the root of your SD card.
    6. Once done, click `Yes` to proceed with copying/downloading files to the `MMCRebuild` and `bootloader` folders on the root of your SD card.
    7. Once finished, safely eject the `hekate UMS` device from your PC, then navigate to hekate's `Home` menu > `Payloads` > `TegraExplorer.bin`.

=== "Linux x64"

    #### What you need:

    - The latest release of [EmmcHaccGen-Extended](https://github.com/DefenderOfHyrule/EmmcHaccGen-Extended/releases) (`EmmcHaccGen-Extended-linux-x64.GUI`)
    
    #### Instructions:

    1. Open `EmmcHaccGen-Extended-linux-x64.GUI`, import your Switch's prod.keys and firmware folder.
    
        !!! note "You *may* need to make the `EmmcHaccGen-Extended-linux-x64.GUI` file executable before being able to open it."
            To do this, you can do one of the following: 
            
            1. Use the terminal command: `chmod +x path/to/EmmcHaccGen-Extended-linux-x64.GUI` and then open it from your file manager or,
            2. On most (modern) Linux distributions you can right click the file from your desired file manager and enable `Executable as Program` or `Allow executing file as program` or something along those lines in the properties of the executable and open it from your file manager.
            
    2. Configure the sliders/toggles depending on your console model:
        - **V1 Unpatched consoles:** *Enable* the `Enable AutoRCM` and, if applicable, the `ExFAT Support` toggles.
        - **V1 Patched consoles:** *Disable* the `Enable AutoRCM` toggle and, if applicable, *enable* the `ExFAT Support` toggle.
        - **V2/Mariko consoles:** *Enable* the `Generate Mariko Firmware` and, if applicable, the `ExFAT Support` toggles.
    3. Click `Generate` and select any location on your PC to save the generated files to.
    4. Once done, boot hekate (if you aren't already in hekate/Nyx), navigate to `Tools` > `USB Tools` > `SD Card` and connect your Switch to your PC via USB.
    5. In EmmcHaccGen GUI, click `Prepare SD Card` and select/open the root of your SD card.
    6. Once done, click `Yes` to proceed with copying/downloading files to the `MMCRebuild` and `bootloader` folders on the root of your SD card.
    7. Once finished, safely eject the `hekate UMS` device from your PC, then navigate to hekate's `Home` menu > `Payloads` > `TegraExplorer.bin`.

=== "macOS x64/arm64"

    #### What you need:

    - The latest release of [EmmcHaccGen-Extended](https://github.com/DefenderOfHyrule/EmmcHaccGen-Extended/releases) (`EmmcHaccGen-Extended-osx-x64-app.zip` or `EmmcHaccGen-Extended-osx-arm64-app.zip`)
    
    #### Instructions:
    
    1. Extract the contents of the `EmmcHaccGen-Extended-osx-x64-app.zip` or `EmmcHaccGen-Extended-osx-arm64-app.zip` to a location on your mac, double click `EmmcHaccGen-Extended.app` to open the app and import your Switch's prod.keys and firmware folder.
    
        !!! note "You will need to 'trust' the `EmmcHaccGen-Extended.app` executable before being able to open it."
            To do this, you can do the following: 
            
            1. Open a terminal window.
            2. Enter the following command: `xattr -dr com.apple.quarantine /path/to/EmmcHaccGen-Extended.app` (replacing `/path/to` with the actual path to the executable).
            3. You should now be able to double click the app to open it from Finder.
    
    2. Configure the sliders/toggles depending on your console model:
        - **V1 Unpatched consoles:** *Enable* the `Enable AutoRCM` and, if applicable, the `ExFAT Support` toggles.
        - **V1 Patched consoles:** *Disable* the `Enable AutoRCM` toggle and, if applicable, *enable* the `ExFAT Support` toggle.
        - **V2/Mariko consoles:** *Enable* the `Generate Mariko Firmware` and, if applicable, the `ExFAT Support` toggles.
    3. Click `Generate` and select any location on your PC to save the generated files to.
    4. Once done, boot hekate (if you aren't already in hekate/Nyx), navigate to `Tools` > `USB Tools` > `SD Card` and connect your Switch to your PC via USB.
    5. In EmmcHaccGen GUI, click `Prepare SD Card` and select/open the root of your SD card.
    6. Once done, click `Yes` to proceed with copying/downloading files to the `MMCRebuild` and `bootloader` folders on the root of your SD card.
    7. Once finished, safely eject the `hekate UMS` device from your mac, then navigate to hekate's `Home` menu > `Payloads` > `TegraExplorer.bin`.

### **Step 2: Flashing the files**

#### Instructions:

1. Navigate to `Browse SD` > `MMCRebuild` > `SystemRestoreV3.te`.
    - **Note:** Navigation in TegraExplorer on Normal/OLED Switch models can be done using the volume buttons + power and/or your joycons while navigation on Switch Lite consoles can only be done using the volume buttons + power.
2. Select `Launch Script` > `Apply on Sysmmc` > `Restore Both`.
3. After the script has finished, try to boot sysCFW from hekate's `Launch` menu. 
    - **Note:** If you lack the sysCFW boot entry in your `Launch` menu, please replace the `hekate_ipl.ini` file in `sd:/bootloader` with with [this one](https://nintendohomebrew.com/assets/hekate_ipl.ini). The sysCFW boot entry is called `Atmosphere PKG3 sysMMC`.
    - **Note:** If you have an unpatched Switch, AutoRCM will be enabled! You will need to use a custom bootloader (hekate/fusee) to be able to boot.
4. If your Switch does not boot (correctly), perform the [System Wipe](#system-wipe) section below.

## **System Wipe**

!!! Danger "System Wipe"
    This will wipe **EVERYTHING** from your system, including; game save data, installed games/titles, all user data and everything else. Be safe and always have a NAND backup.

#### What you need:

- [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases) (`TegraExplorer.bin`)

#### Instructions:

1. Place the downloaded `TegraExplorer.bin` in `sd:/bootloader/payloads`, replacing the existing payload if it exists.
2. Inject the hekate payload (`hekate_ctcaer_X.X.X.bin`) using your desired RCM payload injector.
    - **Note:** If you use a modchipped Switch, you can place the hekate payload on the root of your SD card, rename it to `payload.bin` and turn on your Switch.
3. Navigate to `Payloads` > `TegraExplorer.bin`
4. Navigate to `SystemWipe.te` and select `Wipe sysmmc` to wipe your sysmmc.
5. Confirm using the `Power` button or the `A` button of your joycon.
6. Try to boot sysCFW from hekate's `Launch` menu.
    - **Note:** If you *still* cannot boot, please ask for help in `#switch-assistance-1` or `#switch-assistance-2` in the [NH-Discord server](https://discord.gg/C29hYvh).
