# Conceptual Questions

## Part A1: Git Fundamentals

Q1. what is the difference between git and github?<br>

    Git is a command line tool used to keep track of application version and changes in the project locally whereas github is a cloud based platform meant to store  and access repositories remotely.

Q2. Three working areas of git: working dir, staging and repository.<br>

    working directory refers to the directory in which git was initialized using command 'git init'. Staging is where files are tracked for any changes, here the changes are not saved but only tracked. Files are added to staging by command git add < filename >. Repository refers to the directory stored remotely on github. latest changes can be downloaded using git fetch and added using git pull. Changes can be uploaded using git push.

Q3. What is commit and what info does it store and what is a commit hash?<br>

    commit means saving the changes made to files in the staging area using command git commit -m "< message >". Commit stores author info as well. It is a snapshot of the directory at that point. Each commit has a unique ID which is a hash. This hash can be used to see what changes were made at that point and even go back to the previous state.

Q4. What is the difference in git fetch and git pull?<br>

    git fetch locally downloads the latest changes made to the remote repo on github but does not make those changes to the local files whereas git pull incorporates those changes locally as well.

Q5. What does HEAD point to and what is detached HEAD and how to get out of it?<br>

    Head points to the branch you are in curerntly. Head is in detached state when it points to a commit instead of a branch. To get out of the detached head state you need to checkout the branch you were working in before. 'git checkout < branch name >'.

Q6. What is the purpose of .gitignore and 5 entries to add for a node/react project.<br>

    .gitignore file is used to store names of files or directories that are not meant to be added to the remote repository either because of their size or secret information or build tools that are no longer needed. common additions to gitgnore are: node_moduels, .env, dist/.next, log files