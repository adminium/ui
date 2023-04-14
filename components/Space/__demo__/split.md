---
order: 5
title:
  zh-CN: 分隔符
  en-US: Split
---

## zh-CN

为相邻子元素设置分隔符。

## en-US

Set separators for adjacent child elements.

```js
import { Space, Link, Divider } from '@adminium/arco-design';

const App = () => {
  return (
    <Space split={<Divider type="vertical" />}>
      <Link>Link 1</Link>
      <Link>Link 2</Link>
      <Link>Link 3</Link>
    </Space>
  );
};

export default App;
```
