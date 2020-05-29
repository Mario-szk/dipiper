---
title: 快速上手
---

这是一个基于 nodejs 的开源的财经数据接口包，为量化投资提供数据来源，满足金融量化分析师和学习数据分析的人在数据获取方面的需求。

从数据采集到数据可视化都用同一种开发语言——javascript，降低了学习成本，让我们专注于分析模型的研究。

本接口包采用 puppeteer 作为爬虫内核，在安装的时候需要下载 Chromium ，国内请使用淘宝镜像，否则会被墙，导致 puppeteer 无法安装成功

### 安装

`cnpm install dipiper --save`

### 使用方法

```javascript
const dip = require("dipiper");

dip.stock.symbols.getStockList().then((data) => {
    //数据存储、处理逻辑，请自行实现
    console.log(data);
});
```

### 交流反馈

QQ 群：383331051
