# Switch Dump and Install Guide
This guide has been made and tested using goldleaf 0.9.0, nxdumptool 1.1.14 and Gamecard Installer NX 2.0.0

!!! danger "Ban risk"
	Installing any sort of nsp's gets you banned as soon as you connect to Nintendo services. AFTER INSTALLING ANY NSP, KEEP YOUR SYSTEM PERMANENTLY OFFLINE!

!!! danger "EmuMMC is strongly recommended"
	Because you need to keep your system offline after installing an nsp, EmuMMC is strongly recommended as with it you can still go online on sysnand while keeping your EmuMMC permanently offline.

!!! warning "Remove all your wifi networks or set up 90dns/dns.mitm"
	Again, in preparation for this you need to remove all your wifi networks or set up 90dns/dns.mitm. Do this now. To set up 90dns/dns.mitm, [click here](https://nh-server.github.io/switch-guide/extras/blocking_updates/).

!!! note "How to update your patches"
	Currently supports Atmosphere 1.0.0 and firmware 12.1.0

	If you're just here to update your patches, you'll need to put the <a href="../Img/patches.ini" download>patches.ini from here</a> into the bootloader folder, replacing when asked. You may also need to replace the <a href="../Img/hekate_ipl.ini" download>hekate_ipl.ini</a> in the bootloader folder as well.

-----

# Game Cartridge Install Guide 

## Step 1: Preparations
This part will get you the required files and programs for installing cart games.

### What you need
- [Gamecard Installer NX](https://github.com/ITotalJustice/Gamecard-Installer-NX/releases)
- Your prod.keys file, generated by [Lockpick_RCM](https://github.com/shchmue/Lockpick_RCM/releases)
- <a href="../Img/hekate_ipl.ini" download>A Modified Hekate_ipl.ini</a>
- <a href="../Img/patches.ini" download>Hekate patches</a>

### Instructions
1. Copy the contents of the Gamecard Installer NX zip to your sd.
2. Copy your `prod.keys` file to your `switch` folder. If you ran lockpick_rcm it will likely already be in the `switch` folder.
3. Copy (or replace) `patches.ini` to the `bootloader` folder on your sd card.
4. Replace the `hekate_ipl.ini` from the `bootloader` folder with the one you just downloaded.
	- Note: If you are not using the Hekate config from the nh guide, you can add `kip1patch=nosigchk` (and `kip1patch=noldrchk` if you're on firmware 10.0.0+) right underneath the line starting with `fss0=` instead of replacing your `hekate_ipl.ini` (be sure to add those lines in your EmuMMC entry).
	- Note: You need to be booting via Hekate for this to work (and specifically the entry where patches are applied), fusee-primary will not work.
	- Note: If you copied these files while booted into the switch OS itself, you need to restart your switch for the changes to take effect.

## Step 2: The install

!!! note "If you haven't read the warnings on the top of the page yet, do so now"
	There is quite important information about ban risk up there.
	Also, if you haven't removed your wifi networks or set up [90dns/dns.mitm](https://nh-server.github.io/switch-guide/extras/blocking_updates/) yet, do so now.

**Don't forget to boot into EmuMMC if you haven't done so already!!**

1. Open the Homebrew Menu and launch Gamecard Installer NX.
2. Press X to go into settings, and turn `Lower Keygen Version` ON, then exit out of the options menu.
3. Select `SD Card Install` or `Nand Install` and press A to confirm.
4. Wait until the app finishes installing the game, then press B to exit to the home menu.

Take out your card and you'll find that your cart is now installed to the system. You're done!

If your game needs an update and/or a DLC that is installed on your sysnand, you can continue with the steps 3 and 4.

## Step 3: The update/DLC dump

### What you need
- [The .nro version of Goldleaf](https://github.com/XorTroll/Goldleaf/releases)
- [The .nro version of nxdumptool](https://github.com/DarkMatterCore/nxdumptool/releases)

### Instructions
1. Copy the .nro of Goldleaf and nxdumptool to the `switch` folder on your sd card.
2. Launch into Sys CFW via Hekate.
3. Open the Homebrew Menu and launch nxdumptool.
	- Note: It is recommended to open the Homebrw Menu with full RAM access. To do so, hold R while lauching a game.
4. Select `Dump installed SD card / eMMC content`.
5. Press Y to access the orphan title list.
6. Select the update/DLC you want to dump, then select `Nintendo Submission Package (NSP) dump`.
7. Turn the following options on: `Split output dump (FAT32 support)`, `Remove console specific data` and `Generate ticket-less dump`.
	- If you dump an update, also turn on the `Change NPDM RSA key/sig in Program NCA` option.
8. Select `Start NSP dump process`.
9. After dumping your updates/DLCs, return to the Homebrew Menu by pressing +.

Your game dump got dumped in the /nxdumptool/nsp folder.

## Step 4: The install

!!! note "If you haven't read the warnings on the top of the page yet, do so now"
	There is quite important information about ban risk up there.
	Also, if you haven't removed your wifi networks or set up [90dns/dns.mitm](https://nh-server.github.io/switch-guide/extras/blocking_updates/) yet, do so now.

**Don't forget to reboot into EmuMMC if you haven't done so already!!**

1. Open the Homebrew Menu and launch Goldleaf.
2. Select `Explore content`.
3. Select `SD card`.
4. Navigate to and select `switch`, then `nxdumptool`, then `NSP`. You should be here now:
![GLEAF1](Img/Folder_GOLDLEAF.png)
5. Install your update/DLC dump by selecting the nsp with A, then selecting `Install`, then selecting `SD card` or `Console memory`, then selecting `Install` again.
7. After the install(s) finished installing, return to the Homebrew Menu by pressing +.

You should now see your dump installed. You can delete or move the nsp files in /switch/nxdumptool/nsp to your pc.


# Digital Game Install Guide

## Step 1: Preparations 
This part will get you the required files and programs for dumping and installing digital games.

### What you need
- [The .nro version of GoldLeaf](https://github.com/XorTroll/Goldleaf/releases)
- [The .nro version of NXDumpTool](https://github.com/DarkMatterCore/nxdumptool/releases)
- <a href="../Img/hekate_ipl.ini" download>A Modified Hekate_ipl.ini</a>
- <a href="../Img/patches.ini" download>Hekate patches</a>
- Your prod.keys file, generated by [Lockpick_RCM](https://github.com/shchmue/Lockpick_RCM/releases)

### Instructions
1. Copy the .nro of Goldleaf and NXdumptool to the `switch` folder on your sd card.
2. Place your prod.keys file into your `switch` folder, if you ran lockpick_rcm it will likely already be in the `switch` folder.
3. Copy (or replace) `patches.ini` to the `bootloader` folder on your sd card.
4. Replace the `hekate_ipl.ini` from the `bootloader` folder with the one you just downloaded.
	- Note: If you are not using the Hekate config from the nh guide, you can add `kip1patch=nosigchk` (and `kip1patch=noldrchk` if you're on firmware 10.0.0+) right underneath the line with `fss0=atmosphere/fusee-secondary.bin` instead of replacing your `hekate_ipl.ini` (be sure to add those lines in your EmuMMC entry).
	- Note: You need to be booting via Hekate for this to work (and specifically the entry where patches are applied), fusee-primary will not work.
	- Note: If you copied these files while booted into the switch OS itself, you need to restart your switch for the changes to take effect.

## Step 2: The Dump

### Instructions (Base title and Update dump)
1. Launch into Sys CFW via Hekate.
2. Open the Homebrew Menu and launch nxdumptool.
3. Select `Dump installed SD card / eMMC content`.
4. Select the game you want to dump, then select `Nintendo Submission Package (NSP) dump`.
5. Select `Dump base application NSP`.
6. Turn the following options on: `Split output dump (FAT32 support)`, `Remove console specific data`, `Generate ticket-less dump` and `Change NPDM RSA key/sig in Program NCA`.
7. Select `Start NSP dump process`.
8. After this is done, you can dump your game update if needed by selecting `Dump installed update NSP` on point 5.
9. After this is done, you can dump your game DLC if needed by following the instructions below.

Your game dump got dumped in the /nxdumptool/nsp folder.

### Instructions (DLC dump)
1. Launch into Sys CFW via Hekate.
2. Open the Homebrew Menu and launch nxdumptool.
3. Select `Dump installed SD card / eMMC content`.
4. Select the game you want to dump, then select `Nintendo Submission Package (NSP) dump`.
5. Select `Dump installed DLC NSP`.
6. Turn the following options on: `Split output dump (FAT32 support)`, `Remove console specific data` and `Generate ticket-less dump`.
7. Select the DLC you want to dump with `DLC to dump:`.
8. Select `Start NSP dump process`.

Your game dump got dumped in the /nxdumptool/nsp folder.

## Step 3: The Install

!!! note "If you haven't read the warnings on the top of the page yet, do so now"
	There is quite important information about ban risk up there.
	Also, if you haven't removed your wifi networks or set up [90dns/dns.mitm](https://nh-server.github.io/switch-guide/extras/blocking_updates/) yet, do so now.

**Don't forget to reboot into EmuMMC if you haven't done so already!!**

1. Open the Homebrew Menu and launch Goldleaf.
2. Select `Explore content`.
3. Select `SD card`.
4. Navigate to and select `switch`, then `nxdumptool`, then `NSP`. You should be here now:
![GLEAF1](Img/Folder_GOLDLEAF.png)
5. Install your update/DLC dump by selecting the nsp with A, then selecting `Install`, then selecting `SD card` or `Console memory`, then selecting `Install` again.
7. After the install(s) finished installing, return to the Homebrew Menu by pressing +.

You should now see your dump installed. You can delete or move the nsp files in /switch/nxdumptool/nsp to your pc.