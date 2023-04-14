---
order: 7
title:
  zh-CN: 带图标的标签
  en-US: Icon
---

## zh-CN

可通过设置 `icon` 在标签中加入图标。

## en-US

An icon can be added to the label by setting `icon`.

```js
import { Tag, Space } from '@adminium/arco-design';
import { IconGitlab, IconTwitter, IconGithub, IconFacebook } from '@adminium/arco-design/icon';

const App = () => {
  return (
    <Space size="large">
      <Tag color="gray" icon={<IconGithub />}>
        Github
      </Tag>
      <Tag color="orangered" icon={<IconGitlab />}>
        Gitlab
      </Tag>
      <Tag color="blue" icon={<IconTwitter />}>
        Twitter
      </Tag>
      <Tag color="arcoblue" icon={<IconFacebook />}>
        Facebook
      </Tag>
    </Space>
  );
};

export default App;
```
