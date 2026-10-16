# JimmyWang0417.github.io

王君睿（Junrui Wang）的个人主页：中英双语静态单页（默认英文，页首 `EN | 中文` 切换）。

- 线上地址：<https://jimmywang0417.github.io/>
- 源码分支：`master`
- 部署方式：GitHub Actions + GitHub Pages Artifact（对齐团队主页 [clyzcst.github.io](https://github.com/clyzcst/clyzcst.github.io) 的思路）
- 不露脸：无头像 / 照片

## 部署架构

```text
推送 master
    │
    ▼
GitHub Actions
    ├─ bash scripts/build.sh   → 生成 public/
    └─ 上传 public/ 为 Pages Artifact
                    │
                    ▼
              GitHub Pages 发布
```

`master` 只保留源码与工作流。构建产物在 `public/`，已被 Git 忽略，**不会**再向 `gh-pages` 分支推送站点内容。

另有工作流 [`.github/workflows/sync-password-generator.yml`](.github/workflows/sync-password-generator.yml) 从上游同步密码工具到 `password-generator/`（写入 `master`）；同步提交会再次触发上面的部署流水线。

## 本地开发

```bash
# 直接预览源码树
python3 -m http.server 8080

# 或按 CI 方式构建后再预览
npm run preview
# → http://127.0.0.1:8080/
```

语言：`?lang=en` / `?lang=zh`，或页首切换（写入 `localStorage`）。

## 内容板块

About → Education → Experience → Projects / Open Source → Awards → Links。

事实口径对齐简历仓库 `cv/`；项目级 Stars / Forks 标注为项目整体指标。

## Password generator 镜像

托管路径仍可用，但**不在个人主页的 Projects / Links 中展示**。

- 本站路径：[`/password-generator/`](./password-generator/)
- 上游： [zoegea/password-generator](https://github.com/zoegea/password-generator)（Apache-2.0）
- 参考站：<https://zoegea.github.io/password-generator/>

| 触发 | 行为 |
| --- | --- |
| 每周一 06:00 UTC | 从上游 `master` rsync 到 `password-generator/`，有变更则提交并推送 |
| `workflow_dispatch` | 同上，可手动跑 |
| 修改 sync 工作流或 `password-generator/UPSTREAM.md` | 再跑一遍同步 |

## 启用 Pages

1. 将本仓库推送到 `JimmyWang0417/JimmyWang0417.github.io`（默认分支 `master`）。
2. Repository → Settings → Pages → **Source: GitHub Actions**。
3. 确认 <https://jimmywang0417.github.io/> 与 <https://jimmywang0417.github.io/password-generator/>。
