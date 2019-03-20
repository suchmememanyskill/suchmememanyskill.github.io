:begin
@echo off
set /p name=Name of image:
echo Scaling %name%...
magick convert "%name%" -resize 1280 "Done/%name%"
goto begin
