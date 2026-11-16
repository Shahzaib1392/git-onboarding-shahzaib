## Recovery

### Commands

- git commit --amend -m "chore: add RECOVERY.md"
- git reset --soft HEAD~1 : commit was removed from history and git moved back to staged changes
- Undo on shared branch: git revert HEAD
- wrong branch: git reset --soft HEAD~1, git stash, git switch docs/4-readme, git stash apply, git stash clear
- stash changes: git stash push -m "stash changes drill", git switch main, git switch chore/ci-config, git stash apply stash@{0}, git stash drop
