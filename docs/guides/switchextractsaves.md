# Extract your user saves via RCM

## Step 1: Getting the saves

### What you need:
- The latest release of [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases)
- <a href="https://suchmememanyskill.github.io/TegraScript/scripts/savedumper.te" download>savedumper.te</a>
- A payload injector (Example: [TegraRcmGui](https://github.com/eliboa/TegraRcmGUI/releases))

### Instructions:
1. Place `savedumper.te` somewhere on your sd card and insert your sd card into your switch afterwards
2. Launch TegraExplorer via your chosen payload injector
3. Navigate to `SD:/`, navigate to the `savedumper.te` script, select it, and select `Launch Script`. Follow the script file. When asked to pick between system and user saves, pick user. This will take a while
4. Go back to the main menu. Navigate to `Unmount SD` and select it. Pull your sd card out of your switch and put it into your pc

## Step 2: Extracting the saves
These saves aren't done yet! these are still packed up.

### What you need:
- Your prod.keys file (Extracted by [Lockpick_RCM](https://github.com/shchmue/Lockpick_RCM))
- Python 3.6+ (Install with `Add to Path` checked otherwise this will fail! Download [python](https://www.python.org/downloads/) here)
- the [HactoolNet](https://github.com/Thealexbarney/LibHac/releases)-win.zip release
- Your `save` folder acquired from Step 1
- [SaveExtract](Img/SaveExtract.zip)

### Instructions:

1. Extract the `SaveExtract` folder out of the SaveExtract.zip to somewhere on your pc
2. Place your `prod.keys` and `HacToolNet.exe` (extracted from it's zip) in the `SaveExtract` folder
3. Place your `save` folder from your sd card (SD:/tegraexplorer/save) in the `SaveExtract` folder
4. Double click `run.bat` to start the save extraction. Your saves should be located now in the `out` folder, ordered by titleid

(Optional: Put your sd card back into your switch, select `Mount SD`, go to `Exit`, and hit either `Reboot to Hekate` or `Reboot to Atmosphere`)