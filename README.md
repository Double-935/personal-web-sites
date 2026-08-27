# 个人简历网站

这是一个纯静态个人简历网站，适合部署到 GitHub Pages、Netlify、Vercel、Cloudflare Pages 或任意静态网站托管服务。

## 网站结构框架

网站当前由 6 个主要模块组成：

1. 首屏介绍
   - 个人照片
   - 个人定位与核心介绍
   - 导航入口
   - 继续下滑 / 回到顶部按钮
2. 教育背景
   - 香港教育大学
   - 华南师范大学
   - 学校背景图、校徽与学历信息
3. AI 学习
   - 项目一
   - 项目二
   - 左侧视觉展示
   - 右侧带边框的可滚动阅读框
4. 工作经历
   - 猿编程
   - 四川焱飞科技有限公司
   - 作业帮
   - 成都市玉林小学
   - 每段经历支持点击展开 / 收起
   - 展开后展示简介、四个重点小模块和必要图片
5. 技能与爱好
   - 快速学习的能力
   - MBTI
   - 潜水
   - 游泳
   - 吃饭
   - 旅行
   - 稳中求进的心态
   - 支持“随机抽一张”交互
6. 联系我
   - 邮箱一键复制
   - 电话 / 微信一键复制
   - 深色结尾卡片视觉

页面是纯前端静态实现，内容通过 `js/content.js` 统一管理，样式通过 `css/style.css` 统一管理，页面骨架在 `index.html`。

## 文件结构

```text
个人简历网站/
├── README.md
├── HANDOFF.md
├── 更新记录.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── content.js
└── assets/
    ├── images/
    │   ├── brand-avatar.png
    │   ├── diving.jpg
    │   ├── eating.jpg
    │   ├── eduhk-logo.jpg
    │   ├── entj-female.png
    │   ├── hobby-interest.jpg
    │   ├── home-photo.png
    │   ├── hk-edu-background.jpg
    │   ├── project-placeholder.svg
    │   ├── scnu-background.jpg
    │   ├── scnu-logo.svg
    │   ├── swimming.jpg
    │   ├── travel.jpg
    │   ├── work-experience-2.jpg
    │   ├── yuancheng-classroom.jpg
    │   ├── yuancheng-dinner.jpg
    │   └── yuancheng-structure.png
    ├── models/
    │   └── 3d-model.glb
    └── docs/
        └── li-jiabei-resume.pdf
```

## 如何维护

- 修改页面内容：编辑 `js/content.js`
- 修改颜色、排版、按钮、卡片、响应式样式：编辑 `css/style.css`
- 修改页面骨架：编辑 `index.html`
- 更换主页照片：替换 `assets/images/home-photo.png`
- 更换头像或其他图片：替换 `assets/images/` 中对应文件
- 更换 AI 学习模块的 3D 模型：替换 `assets/models/3d-model.glb`
- 更换简历 PDF：替换 `assets/docs/li-jiabei-resume.pdf`
- 查看今日修改记录：打开 `更新记录.md`
- 查看交接说明：打开 `HANDOFF.md`

## 部署方式

上传整个 `个人简历网站` 文件夹里的内容即可，保持 `index.html`、`css`、`js` 和 `assets` 在同一级。
这是一个不需要构建步骤的纯静态网站，不需要安装依赖或运行打包命令。

如果你要部署到 GitHub Pages，推荐直接把整个项目根目录推上去，然后在仓库的 `Settings -> Pages` 里选择 `Deploy from a branch`，分支通常选 `main`，目录选 `/root`。

部署后入口文件是：

```text
index.html
```

## 本地预览

普通图片和文字可以直接双击 `index.html` 打开预览。

3D 模型建议通过本地静态服务器或 GitHub Pages 预览，因为部分浏览器会限制 `file://` 页面读取 GLB 模型资源。

如需使用本地服务器预览，可以在项目文件夹内运行静态服务器，然后访问：

```text
http://localhost:8000/
```

## 上线前检查

- 确认 `index.html` 可以正常打开。
- 确认桌面端、平板端、手机端都没有横向滚动条。
- 确认 375px 和 390px 宽度下，导航、标题、按钮和卡片都能正常显示。
- 确认主页照片、头像、兴趣爱好配图和简历 PDF 都能正常加载。
- 确认 `assets/models/3d-model.glb` 已随项目一起上传。
- 确认桌面端、平板端和手机端的布局没有溢出。
- 发布时上传整个项目目录，不要只上传 `index.html`。
