# Handoff

## Current Goal
Keep polishing the personal resume website so it is clean, deployment-friendly, and readable across desktop, tablet, and mobile.

## What Is Already Done
- The site is now structured as a maintainable static setup with separated HTML, CSS, and JS:
  - `index.html`
  - `css/style.css`
  - `js/content.js`
- Assets are stored locally inside `assets/`, including:
  - `assets/images/home-photo.png`
  - `assets/docs/li-jiabei-resume.pdf`
  - `assets/images/brand-avatar.png`
  - `assets/images/entj-female.png`
- Top navigation order is:
  - `教育背景`
  - `AI学习`
  - `工作经历`
  - `其他`
  - `联系我`
- The former `个人作品` module has been removed.
- `技能与标签` has been renamed to `其他`.
- The `AI学习` section is now organized into:
  - `项目一`
  - `项目二`
  - each project contains:
    - `项目基本介绍`
    - `学习到的新知识`
    - `遇到的问题及解决方案`
    - `下次可以改进的`
    - `有待思考和完善的`
- The `其他` module currently contains:
  - `MBTI`
  - `自我评价`
  - `兴趣爱好`
  - `我想说...`
- The `工作经历` section now uses expandable cards that show time, company, and role first, then reveal the detailed content after a click.
- The `猿编程` work item now contains:
  - `课程研发`
  - `课堂支持`
  - `跨团队协作`
  - `内容表达`
  - a left-right expanded layout with the four modules on the left and a stacked image gallery on the right
  - a small hover hint under the gallery
- The `其他` section now uses expandable cards that show only the short preview first and reveal the detailed introduction after a click.
- `MBTI` is filled with:
  - `ENTJ-A`
  - role: `分析家`
  - a progress-bar layout for:
    - 外向 63%
    - 天马行空 53%
    - 理性思考 67%
    - 运筹帷幄 97%
    - 自信果断 83%
  - the image asset `assets/images/entj-female.png`
- The `兴趣爱好` card now includes:
  - a local image asset `assets/images/hobby-interest.jpg`
  - expanded copy covering diving, travel, photography, and food
- The top-left brand mark now uses the avatar image in `assets/images/brand-avatar.png` instead of the `李` character.
- The hero eyebrow text is now `在线`.
- The hero intro file text has been cleaned up so it fills the box naturally instead of breaking in odd places.
- The footer text is simplified to:
  - `李佳蓓 · Education Technology`
- Contact cards now support one-click copy for:
  - email
  - phone / WeChat
- The separate fixed copy widget at the bottom-right has been removed.
- The contact section keeps only:
  - email copy card
  - phone / WeChat copy card
  - `回到顶部`
- The `回到顶部` button keeps its hover-to-black behavior.
- The desktop portrait has a yellow outline, while mobile keeps the original look.

## Current State
- The website is usable and visually consistent.
- Desktop styling has the latest portrait/avatar updates.
- Mobile layout was adjusted repeatedly for narrow screens, especially:
  - 375px
  - 390px
- The homepage content is currently focused on:
  - AI learning
  - education background
  - work experience
  - other
  - contact
- The AI learning section now reads as two project cards instead of a summary/facts split.
- The work experience section now uses expandable cards that initially show only time, company name, and role, then reveal the detailed content after a click.
- The work experience cards now show company name and role on the same line in the collapsed state.
- The `猿编程` work item now contains:
  - `课程研发`
  - `课堂支持`
  - `跨团队协作`
  - `内容表达`
  - a left-right expanded layout with the four modules on the left and a stacked image gallery on the right
  - a small hover hint under the gallery
- The `其他` section summary now reads:
  - `垂直之外的眷恋`

## Current Blockers
- None critical.
- The `其他` module copy is now filled out, including:
  - `自我评价`
  - `兴趣爱好`
  - `我想说...`

## Next Step
- If desired, do one final pass on desktop and mobile spacing after any future copy updates.
