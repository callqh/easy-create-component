# 快速生成组件目录

![](https://img.shields.io/bundlephobia/minzip/@liuqh/easy-create-component)
![](https://img.shields.io/github/package-json/v/liuqh0609/easy-create-component)
![](https://img.shields.io/github/issues/liuqh0609/easy-create-component)
![](https://img.shields.io/github/license/liuqh0609/easy-create-component)


**一个团队内统一的风格比正确的更重要**
该 cli 是为了在项目中快速生成统一标准的项目文件目录。

需要确保项目中具有`src`目录，及其以下子目录

- `src/components`
- `src/pages`

## 安装

- `npm`

  `npm install -D @liuqh/easy-create-component`

- `yarn`

  `yarn add -D @liuqh/easy-create-component`

- `pnpm`

  `pnpm add -D @liuqh/easy-create-component`

## 使用

1. `npx store create [component_name]`


## 更新日志
- 2022年08月19日17:29:16
  - 增加文件名的大驼峰格式验证
  - 增加组件的容器样式名（增加hash值为后缀，防止污染全局样式）
  - 修复组件样式文件没有正确引入的问题
