# 中国传统图戏

Xingchen Zhang (Ian) 的研究与展览工作笔记。静态页面在 `docs/`。这不是已发表的论文。

本地预览（在仓库根目录）：

```bash
python3 -m http.server 8734 --directory docs --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:8734/`。站内链接都是相对路径，换目录名或挂在项目子路径下仍然可用。

## GitHub Pages

站点从 `main` 分支的 `/docs` 发布：

https://xingchen-ian.github.io/chinese-traditional-board-game/

`docs/.nojekyll` 用来跳过 Jekyll。页面不要改成以 `/` 开头的绝对路径。
