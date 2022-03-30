
create account on github and heroku

sudo apt-get install git

sudo apt update

sudo add-apt-repository ppa:git-core/ppa


*********************************************************

heroku login //open heroku 

git init   //initialize git

git status    //check status of git files

git add src/app.js //To add specific file after changes

git status

git add .  //To add all files in working directory

git commit -m 'First commit'     //Author identity unknown -Fail

git config --global user.email "username@gmail.com"   //add git user

git commit -m 'First commit'     //commit file with specific message

ls -a -l ~/.ssh           //create . and ..

ssh-keygen -t rsa -b 4096 -C "username@gmail.com"   //create ssh key using cmd

ls -a -l ~/.ssh  //To detect changes in .ssh directory

git config --list     //Check info about user

git status 

eval "$(ssh-agent -s)"   //To check agent pid