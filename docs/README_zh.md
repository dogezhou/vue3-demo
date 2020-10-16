# vue3-demo (Vite + Vue3 + Typescript starter)
[ ![CI](https://github.com/dogezhou/vue3-demo/workflows/CI/badge.svg)](https://github.com/dogezhou/vue3-demo/actions?query=workflow%3ACI)
[![codecov](https://codecov.io/gh/dogezhou/vue3-demo/branch/master/graph/badge.svg?token=RKXRX99XPE)](https://codecov.io/gh/dogezhou/vue3-demo)

此项目的主要目的是创建一个 Vite + Vue3 + Typescript 的项目模板，
你可以在此之上构建你的项目。

## 前提依赖
为了在本地运行和构建此项目，你需要一下依赖
- 安装 [Node.js](https://nodejs.org/en/)
- 安装 yarn
```
npm install -g yarn
```

## 开始使用
- 克隆项目
```
git clone https://github.com/dogezhou/vue3-demo.git
```

- 安装依赖
```
cd <project_name>
yarn
```

- 开发项目
```
yarn dev
```

- 打包项目
```
yarn build
```

## 参与贡献
欢迎提建议和 PR 来帮助我一起建立一个更方便的 Vue3 项目模板。
欢迎您 Fork 项目，提 pull request 来提出你的想法。

## TODO
- [x] 支持 sass
- [x] 添加 linter 并且在 pre-commit 运行 linter
- [x] 使用 jest 添加单元测试
- [x] 使用 jest 添加单元测试覆盖率
- [x] 用 github actions 添加 CI，运行测试，linter，更新代码覆盖率