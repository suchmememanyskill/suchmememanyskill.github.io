# Welcome to Meme's Homebrew apps & Guides

## Steelminer Issues FAQ

## Section 1: Errors while installing homebrew via steelminer

### If the game boots normally

You haven't actually placed the modified save or inproperly renamed it in the steeldiver data folder, the name of the .sav file should be *00000001.sav* , **and nothing else**

### If the game exits with an error message saying "an error occured trying to launch this app, the system will now restart"

- Check your payload.bin (so the otherapp.bin that you got from http://smealum.github.io/3ds/#otherapp that you renamed to payload.bin)
- Check if you have boot.3dsx on the **root** of the sd card
- Check if you have any updates installed on steeldiver, you can check this at system settings>data management>3ds>add-on content/downloadable content. If steeldiver is listed in this menu, you have an update for steeldiver installed, delete it

### If the game crashes your system (aka the screen shows black and says to contact nintendo support)

Your 3ds has trouble reading the *00000001.sav* file, please check if it's named correctly.
If it is named correctly, you didn't use **your** movable.sed, which **are not universal**

## Section 2: What can i do with HB only

You can use the following:
- Anemone3ds, A 3ds theming tool
- JKSM, A 3ds save manager
- Playcoin setter, Set your playcoins to 300
- GYTB, A custom badge installer
- Emulators, Like snes9x, mgba, GameYob and VirtualNES. Note: Emulators most likely will be very unstable with homebrew only.
- FTPD, A way to wirelessly transfer files to your 3ds
- PKSM, a 3ds pokemon savegame editor

Things you **can't** do:
- Install FBI
- Mod games
- Install cheats to games
- Use Gameshark codes and such
- Install your cart based games to your 3ds sd card
- Virtual console injects

## Section 3: Miscellaneous addons

Q = I have a .3dsx file i'd like to use, how do i use it?
A = You put any .3dsx files in the `3ds` folder so hblauncher can see them

Q = I see this steelhax installer in my homebrew launcher, should i install it?
A = NO

Some cool programs for hb only can be installed using my easy to use installer
[Download](https://github.com/suchmememanyskill/Sd-File-Installer/releases)

### ---------------------------------

# SD Files Installer
This program automatically puts all the required files for finalizing setup in the right places, so you don't have to worry about moving the files manually yourself. Place the .3dsx file inside the 3ds folder and you should be good to launch it, and install all the files you need to get going

Note: These both work for hb only and cfw, but is primarily focused around **cfw**

[Download](https://github.com/suchmememanyskill/Sd-File-Installer/releases)
[Source](https://github.com/suchmememanyskill/Sd-File-Installer)



### Description of tools provided by SD File Installer
Anemone3ds - A theming tool by TeamAnemone. Drop Theme zips obtained from [Themeplaza](https://themeplaza.eu/themes?sort=most-downloaded) and drop them in your Themes folder that's located on the root of your sd card

Checkpoint - A save manager by BernardoGiordano. Dumped saves are located in 3ds/checkpoint/titles

Homebrew_launcher - Launches the homebrew launcher from a home icon. Made by mariohackandglitch  

DSP1 - Dumps a system file so you can listen to sound in homebrew apps. Made by zoogie

Lumaupdater - Updates luma on your sd card and on your CTRNAND. Made by KunoichiZ

FBI - Install .cia type files (usually .cia type files can be found in the cias folder). Made by Steveice10

GodMode9 - A full fledged file browser and editor for your 3ds. Made by D0K3

Luma3ds - Custom Firmware for your 3ds. Made by AuroraWright

Custom Version Setter - Sets a custom version inside system settings, just for fun. Made by BernardoGiordano

FTPD - A Tool by mtheall for wirelessly transfering files from and to your 3ds. Works with most ftp clients

ctrnotimeoffset - Resets your RTC to 0. Made by ihaveamac
