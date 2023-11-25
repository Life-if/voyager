---
lang: zh-CN
title: 主要功能与配置演示
shortTitle: python主
date: 2022-11-01
description: 页面的描述
index: true
icon: laptop-code
category:
  - 使用指南
  - 使用示例
tag:
  - Markdown
timeline: true
isOriginal: true
star: true
sticky: 1
article: true
---



::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

::: info 自定义标题

一个有 `代码` 和 [链接](#演示) 的信息容器。

```js
const a = 1;
```

:::

::: note 自定义标题

一个有 `代码` 和 [链接](#演示) 的注释容器。

```js
const a = 1;
```

:::

::: tip 自定义标题

一个有 `代码` 和 [链接](#演示) 的提示容器。

```js
const a = 1;
```

:::

::: warning 自定义标题

一个有 `代码` 和 [链接](#演示) 的警告容器。

```js
const a = 1;
```

:::

::: danger 自定义标题

一个有 `代码` 和 [链接](#演示) 的危险容器。

```js
const a = 1;
```

:::

::: details 自定义标题

一个有 `代码` 和 [链接](#演示) 的详情容器。

```js
const a = 1;
```

:::

::: info 自定义信息
:::

::: note 自定义注释
:::

::: tip 自定义提示
:::

::: warning 自定义警告
:::

::: danger 自定义危险
:::


```ts {1,6-8}
import type { UserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";

export const config: UserConfig = {
  title: "你好， VuePress",

  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
  }),
};
```
::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

https://github.com/ikatyang/emoji-cheat-sheet
