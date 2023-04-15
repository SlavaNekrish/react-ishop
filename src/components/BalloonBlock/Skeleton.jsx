import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={0}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="6" y="312" rx="10" ry="10" width="265" height="45" />
    <rect x="7" y="379" rx="10" ry="10" width="77" height="30" />
    <rect x="135" y="372" rx="20" ry="20" width="137" height="45" />
    <rect x="168" y="497" rx="0" ry="0" width="0" height="1" />
    <rect x="123" y="1" rx="0" ry="0" width="1" height="0" />
    <rect x="4" y="1" rx="10" ry="10" width="266" height="260" />
    <rect x="49" y="274" rx="10" ry="10" width="183" height="20" />
  </ContentLoader>
);

export default Skeleton;
