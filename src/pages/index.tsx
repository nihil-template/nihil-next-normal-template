import React from 'react';
import tw, { css } from 'twin.macro';

export default function index() {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <div css={style.default}>content</div>
    </>
  );
}
