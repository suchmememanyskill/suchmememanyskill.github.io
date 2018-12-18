# Home Menu Theming

### Console keys needed!
You need your console keys dumped for this
	
### Windows only!
This guide requires windows apps to work.

### Switch theme example:
![ExampleSwitchTheme](https://raw.githubusercontent.com/suchmememanyskill/SwitchThemeGuide/master/ThemingExample.jpg)


	

## What you need 

- The latest release of [NX-ThemesBeta](https://cdn.discordapp.com/attachments/522066540741394452/523467764711817216/NXThemesInstallerBeta6.7z) //Needs to go out of beta kthx
- The latest release of [Switch Theme Injector](https://cdn.discordapp.com/attachments/522066540741394452/523254673902141460/SwitchThemesInjector3.4Beta2.7z)
- Your `prod.keys` keyset file
	
## Dumping required files

1. Place `SwitchThemesNX.nro` in the switch folder on your sd card.
2. Boot switch CFW, launch the homebrew launcher and launch `NXThemes`.
3. Navigate to `Dump NCA` and press + to dump the home nca.
4. Turn your switch off and put the sd card back into the pc.
5. Launch the `Switch Theme Injector` app, navigate to `extract NCA`. Select your keyset file from your pc and the `themes/systemData` folder on your sd card.
6. All .szs files required for theming are now located in `themes/systemData` on your sd card. Copy them to your pc.

## Compatible theme files

### For 4.x and 5.x the following files are avalable to be themed via NXThemes:
	- Residentmenu.szs, The home menu of the switch. (This will also theme settings, news and all apps on 5.x)
	- Entrance.szs, The lockscreen of the switch.
	
### For 6.x the following files are avalable to be themed via NXThemes:
	- Residentmenu.szs, The home menu of the switch.
	- Entrance.szs, The lockscreen of the switch.
	- Notification.szs, The news section of the switch.
	- set.szs, The settings app of the switch.
	- Flaunch.szs, The All software menu of the switch.

## Making a theme

1. Open up the `Switch Theme Injector` app. On the top click `Open szs`, Open a compatible szs file you copied from step 6. (See above for compatible files)
2. Navigate to `Inject & Patch`.
3. Open a 720P image (very important!!), This image will become the background for the .szs you're modifying. Select a layout if you want a layout to be added to your theme.
4. Click `Build Theme Pack`, then fill out the details in the window that pops up. After filling out this window and clicking ok, you'll get asked where to save the file.
5. Put this new `(Name).nxtheme` file in the `themes` folder on your sd card.
6. Repeat these steps for every element of the switch you want to modify.
	
## Installing a theme

1. Boot switch CFW, launch the homebrew launcher and launch `NXThemes`.
2. Navigate to `Themes`, Your theme file('s) should be listed here. You can install them one by one.
3. Reboot your switch to see the changes.

## Sharing a theme
The `(name).nxtheme` files are completely legal to share! On the flipside, the .szs files are **illegal** to share, as they contain coprighted content. 