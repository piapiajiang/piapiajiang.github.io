---
title: 同步更新别人的仓库
author: JuPeiqi
top: false
cover: false
toc: true
mathjax: false
date: 2022-12-05 19:35:34
ategories:
tags:
summary:
img:
coverImg:
password:
keywords:
reprintPolicy:
---

### 删除重新 fork
fork 别人的仓库后，别人更新时，可以直接删除自己的仓库，然后重新 fork ，简单粗暴。

### 使用命令行
也可以打开 github 的 Codespaces ，使用下面的命令来同步更新仓库

- 设置别人仓库为我的upstream（此步骤近第一次需要）
```git remote add upstream https://github.com/jupeiqi/jupeiqi.github.io.git```

- 抓取 jupeiqi 原仓库的更新
```git fetch upstream```

- 合并远程的master分支
```git merge upstream/master```

- 把本地仓库向github仓库（你fork到自己名下的仓库）推送修改
```git push```


- 其他可能用到到命令

- 查看你的远程仓库的路径
```git remote -v```

- 检查本地是否有为提交的修改
```git status```

- 提交更新
```
git add -A 或者git add filename
git commit -m "note"
git push origin master
git status
```

- 切换分支
```git checkout master```