import React from 'react';
import { Result, Button, Typography } from '@adminium/arco-design';
import { IconHome } from '@adminium/arco-design/icon';

function NotFound() {
  return (
    <div className="not-found">
      <Typography.Title>404 Not Found</Typography.Title>
      <Result
        className="not-found-result"
        status="404"
        subTitle="Sorry, we can't find that page!"
        extra={[
          <Button icon={<IconHome />} href="/" key="home">
            Back to home page
          </Button>,
        ]}
      />
    </div>
  );
}

export default NotFound;
