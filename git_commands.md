# checkout branch
git checkout <branch_name>

# create new branch and switch to it
git checkout -b <new_branch_name>

# list remotes
git remote -v

# push to remote
git push <remote_name> <branch_name>

# setup branch from remote locally
git fetch <remote_name> <remote_branch_name>:<new_branch_name>

# pull changes from remote branch to current branch
git pull <remote_name> <remote_branch_name>

# check branches & current branch
git branch

# check status
git status

# stash changes
git stash

# unstash changes
git stash pop