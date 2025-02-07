# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 提交修改到github

commitDescInfo=$1

git add .

if [ -z "$commitDesc" ]; then
  git commit -m 'update'
else
  git commit -m "$commitDesc"
fi

git push
