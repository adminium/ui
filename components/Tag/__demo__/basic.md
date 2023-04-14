---
order: 0
title:
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

标签的基础用法。

## en-US

Basic usage of tags.

```js
import { Tag, Space } from '@adminium/arco-design';
import { IconCheckCircleFill } from '@adminium/arco-design/icon';

const App = () => {
  return (
    <Space size="large">
      <Tag>Default</Tag>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag icon={<IconCheckCircleFill />}>Complete</Tag>
    </Space>
  );
};

export default App;
```
