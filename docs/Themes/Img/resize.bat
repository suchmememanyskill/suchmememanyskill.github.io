:begin
@echo off
set /p name=Name of image:
echo Scaling %name%...
move %name% Original
magick convert "Original/%name%" -resize 1280 "%name%"
goto begin
