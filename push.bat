@set /p msg="Message Update: "

git add .
git commit -m "%msg%"
git push