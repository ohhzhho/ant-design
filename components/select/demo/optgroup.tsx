import React from 'react';
import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
    options={[
      {
        label: <span>manager</span>,
        title: '人保小时',
        options: [
          { label: <span>Jack</span>, value: '大风小时' },
          { label: <span>Lucy</span>, value: '暴雨小时' },
        ],
      },
      {
        label: <span>engineer</span>,
        title: '人保日',
        options: [
          { label: <span>Chloe</span>, value: '大风日' },
          { label: <span>Lucas</span>, value: '暴雨日' },
          { label: <span>Lucas</span>, value: '霜冻日' },

        ],
      },
    ]}
  />
);

export default App;
