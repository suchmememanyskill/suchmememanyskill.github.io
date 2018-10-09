## Steelminer Issues FAQ

## Section 1: Errors while installing homebrew via steelminer

### If the game boots normally

You haven't actually placed the modified save in the steeldiver data folder, *or* inproperly renamed the save in the steeldiver data folder, the name of the .sav file should be *00000001.sav* , **and nothing else**

### If the game exits with an error message saying "an error occured, causing this app to forcibly close, the system will now restart"

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


[Back to main page](https://suchmememanyskill.github.io/)
