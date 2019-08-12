# Emummc (emunand) manual guide
guide was written for windows users

-----

!!!danger "Guide is not finished"
	This guide is unfinished and may contain errors. Continue at your own risk! This guide is more as something you can hold onto while doing this. Report any errors in the guide to Such Meme, Many Skill#2921 on discord.

## What you need:

- a microsd card of at least 64gb
- an unpatched switch
- lots of spare time
- Minitool partition wizard free (or any other decent partition manager)
- atmosphere 0.9.0 or later
- [MakeEmu](https://github.com/exelix11/MakeEmu/releases)

## Instructions:

### Part 1: The backups

!!!warning "Before you start:"
	Make sure you've deleted all your wifi connections on your switch beforehand. It's not a good idea to connect to the internet in emunand. You can add the wifi networks back on sysnand after following this guide.

1. Boot into hekate and make a boot0/1 and raw gpp backup
2. Copy these backups to your pc into a folder
3. If your backup files are split, combine them using the [hekate combiner scripts](https://github.com/CTCaer/hekate/releases/download/v4.10.1/joiner_scripts_for_windows_linux_macos.zip)
4. Copy the MakeEmu.exe to the folder containing the nand backup + boot0/1 backup

-----

### Part 2: The formatting

1. Open Minitool and go to `Disk & Partition Management`
2. Locate your sd card and partition it as follows:
	- Make 2 partitions
	- The last partition needs to be 29.2GB in size, the first partition you can fill the rest of the space with
	- Both partitions should be fat32
	- Both partitions should be primary partitions

-----

### Part 3: The flashing

1. Open an administrator command prompt and navigate to the folder containing your nand backup
2. Make sure your boot0 is called `BOOT0`, your boot1 is called `BOOT1` and your rawnand is called `rawnand.bin`
3. Find the drive letter for the 29.2 GB partition on your sd card
4. Type the following into cmd: `MakeEmu BOOT0 BOOT1 rawnand.bin <drive letter>`
	- Replace `<drive letter>` with your drive letter, followed by `:`, so for example `K:`
5. While this is copying, note down the emummc_sector displayed inside the app. You'll need this later.

-----

### Part 4: Setup ini

1. Create a folder on the root of the sd card called `emummc`
2. Create a file in the emummc folder called `emummc.ini`. Put the following into that ini:
```
[emummc]
emummc_enabled = 1
emummc_sector = 0x00000000
```
Replace `0x00000000` with the offset you got from part 3 in MakeEmu!

-----

Now if you boot fusee-primary.bin, you'll instead boot into emunand. You'll see the new black and white atmosphere logo if you did it successfully.

Your emunand's Nintendo folder can be found in your `emummc` folder. It will be called something like `Nintendo_0000`.