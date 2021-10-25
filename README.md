# `@iosecret/service`

> 公共服务的处理

## 安装

```bash
$ npm i @iosecret/service
# or
$ yarn add @iosecret/service
```

## 使用

- 公共请求：提供前置与后置钩子，处理入参与出参

```typescript
import { request } from '@iosecret/servic';

// 1. 请求处理
// 前置处理
request.before = (options) => {
  options.method = options.method || 'POST';
};

// 返回解析
request.after = (data, resolve) => {
  // TODO 统一处理请求返回
  resolve(data);
};

// 通用请求
request({ url: '' }).then();
```

- 日期函数
  - 常规格式化： `formatDate(time, 'YYYY-MM-DD')`
  - 格式化起止时间：`formatStartEndTime`
  - 计算距今间隔时间：`formatRemainStartTime`

```typescript
import { formatDate, formatStartEndTime, formatRemainStartTime } from '@iosecret/service';

// 格式化时间
formatDate(new Date());
```

- 工具函数
  - 获取 url 中参数：`getSearchParam(search, paramKey)`

```typescript
import { getSearchParam } from '@iosecret/service';

getSearchParam(window.location.search, 'name');
```

- 校验函数
  - 校验基础手机号：`isValidMobile(mobileNo)`

```typescript
import { isValidMobile } from '@iosecret/service';

isValidMobile('15999299999');
```
