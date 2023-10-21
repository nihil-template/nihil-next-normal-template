import React from 'react';
import tw, { css } from 'twin.macro';

const NotPound404 = () => {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <div css={style.default}>페이지를 찾을 수 없습니다.</div>
    </>
  );
};

export default NotPound404;
