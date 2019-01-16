



# Steelminer Issues FAQ

## Section 1: Errors while installing homebrew via steelminer

### If the game boots normally

- Check if you have any updates installed on steeldiver, you can check this at system settings>data management>3ds>add-on content/downloadable content. If steeldiver is listed in this menu, you have an update for steeldiver installed, delete it.
- You haven't actually placed the modified save in the steeldiver data folder, *or* inproperly renamed the save in the steeldiver data folder; the name of the `.sav` file should be `00000001.sav` , **and nothing else**. (If you have trouble remembering the path where the `.sav` file is supposed to go, it's in `Nintendo 3DS` > ID0 > ID1 > `title` > `00040000` > regionId > `data`, where regionid for EU is `000d7e00`, US is `000d7d00`, JP is `000d7c00`)

### If the game boots with a message saying that corrupted save data has been deleted

- You may have selected the incorrect region when generating `00000001.sav`. All that matters in determining which region you should select is the letter at the end of your system version, not where you physically are. Go back [here](http://steelminer.jisagi.net/injector) and download the file again, then copy it into the appropriate folder. (If you have trouble remembering the path where the `.sav` file is supposed to go, it's in `Nintendo 3DS` > ID0 > ID1 > `title` > `00040000` > regionId > `data`, where regionid for EU is `000d7e00`, US is `000d7d00`, JP is `000d7c00`)
- If you selected the correct region and are still getting the message, you did not use *your* `movable.sed`; they are **not** universal.

### If the game exits with an error message saying "an error occured, causing this app to forcibly close, the system will now restart"

- Check your `payload.bin` (so the otherapp payload `.bin` file that you got from [here](http://smealum.github.io/3ds/#otherapp) that you renamed to `payload.bin`). Make sure it's in the `steelhax` folder, and make sure you have file extensions on when you rename it.  - - Make sure that the `steelhax` folder is on the **root** of the sd card.

### If the game crashes your system (aka the screen shows black and says to contact nintendo support)

- Your 3ds has trouble reading the `00000001.sav` file, please check if it's present and named exactly `00000001.sav`. (If you have trouble remembering the path where the `.sav` file is supposed to go, it's in `Nintendo 3DS` > ID0 > ID1 > `title` > `00040000` > regionId > `data`, where regionid for EU is `000d7e00`, US is `000d7d00`, JP is `000d7c00`)

### If upon launching the game you get a black screen

- You probably are using an OLD payload on your NEW 3ds or vice versa; redownload the payload for the correct model
- It is also possible you already have cfw on your device. To test this, power off your console, hold select, then power on while still holding select. If you get a luma configuration screen, you have cfw.

### If upon launching the game you get a red screen

- Check if you have `boot.3dsx` on the **root** of the sd card, and that it's named exactly `boot.3dsx`.
- If it's there, try copying it to the sd root again.

### If upon launching the game you get a yellow screen

- This is just a random crash; reboot and try opening the game again. It can take a few tries.

### If upon launching the game the system returns to the home menu without an error

- You probably are using an OLD payload on your NEW 3ds or vice versa; redownload the payload for the correct model

### If upon launching the game you get a screen saying "An exception occured"

- You already have cfw on your device, so steelhax will not work.

## Section 2: What can i do with HB only

You can use the following:
- Anemone3ds, A 3ds theming tool
- JKSM, A 3ds save manager
- Playcoin setter, Set your playcoins to 300
- GYTB, A custom badge installer
- Emulators, Like snes9x, mgba, GameYob and VirtualNES. Note: Most emulators will be **very** unstable with homebrew only.
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

Q = I have a `.3dsx` file i'd like to use, how do i use it?
A = You put any `.3dsx` files in the `3ds` folder so hblauncher can see them

Q = I see this steelhax installer in my homebrew launcher, should i install it?
A = NO

- Some cool programs for hb only can be installed using my easy to use installer
[Download](https://github.com/suchmememanyskill/Sd-File-Installer/releases)

- A big addon onto this guide is Frogminer, which is free cfw. If you'd like to install cfw you can do so via frogminer [here](https://jisagi.github.io/FrogminerGuide/)


[Back to main page](https://suchmememanyskill.github.io/)
