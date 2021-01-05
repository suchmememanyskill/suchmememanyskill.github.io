# Extract your user saves via RCM

## Step 1: Getting the saves

### What you need:
- The latest release of [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases)
- A payload injector (Example: [TegraRcmGui](https://github.com/eliboa/TegraRcmGUI/releases))

### Instructions:
1. Launch TegraExplorer via your chosen payload injector
2. Navigate to `Browse EMMC` or `Browse EMUMMC`, depending on your needs
3. Navigate to `USER`
4. Navigate to `save`
5. Navigate to `Current folder options`
6. Select `Copy to clipboard`
7. Back out to the main menu
8. Go to `Browse SD`
9. Press `Clipboard -> Current folder`
10. The `save` folder is now located on the root of the sd

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