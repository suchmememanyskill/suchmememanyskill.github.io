



# Steelminer Issues FAQ

## Section 1: Errors while installing homebrew via steelminer

### If the game boots normally

- Check if you have any updates installed on steeldiver, you can check this at system settings>data management>3ds>add-on content/downloadable content. If steeldiver is listed in this menu, you have an update for steeldiver installed, delete it
- You haven't actually placed the modified save in the steeldiver data folder, *or* inproperly renamed the save in the steeldiver data folder; the name of the `.sav` file should be `00000001.sav` , **and nothing else**. (If you have trouble remembering the path where the `.sav` file is supposed to go, it's in `Nintendo 3DS` > ID0 > ID1 > `title` > `00040000` > regionId > `data`, where regionid for EU is `000d7e00`, US is `000d7d00`, JP is `000d7c00`)

### If the game exits with an error message saying "an error occured, causing this app to forcibly close, the system will now restart"

- Check your payload.bin (so the otherapp payload `.bin` file that you got from [here](http://smealum.github.io/3ds/#otherapp) that you renamed to `payload.bin`)

### If the game crashes your system (aka the screen shows black and says to contact nintendo support)

- Your 3ds has trouble reading the `00000001.sav` file, please check if it's named correctly.
If it is named correctly, you didn't use **your** `movable.sed`, which **are not universal**

### If upon launching the game you get a black screen

- You probably are using an OLD payload on your NEW 3ds or vice versa; redownload the payload for the correct model
- It is also possible you already have cfw on your device, which will

### If upon launching the game you get a red screen

- Check if you have `boot.3dsx` on the **root** of the sd card, and that it's named exactly `boot.3dsx`
- If it's there, try copying it to the sd root again

### If upon launching the game you get a yellow screen

### If upon launching the game you get a screen saying "An exception occured"



## Section 2: What can i do with HB only

You can use the following:
- Anemone3ds, A 3ds theming tool
- JKSM, A 3ds save manager
- Playcoin setter, Set your playcoins to 300
- GYTB, A custom badge installer
- Emulators, Like snes9x, mgba, GameYob and VirtualNES. Note: Emulators most likely will be **very** unstable with homebrew only.
- FTPD, A way to wirelessly transfer files to your 3ds
- PKSM, a 3ds pokemon savegame editor

Things you **can't** do:
- Update your system without possibly losing access to homebrew
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

- Some cool programs for hb only can be installed using my easy to use installer
[Download](https://github.com/suchmememanyskill/Sd-File-Installer/releases)

- A big addon onto this guide is Frogminer, which is free cfw. If you'd like to install cfw you can do so via frogminer [here](https://jisagi.github.io/FrogminerGuide/)


[Back to main page](https://suchmememanyskill.github.io/)
