import * as React from 'react';
import { ScreenHelmet } from 'karrotframe';

const Detail = () => {
  return (
    <>
      <ScreenHelmet
        title="상세페이지"
        customBackButton={<div>이전</div>}
        customCloseButton={<div>닫기</div>}
      />
      <div>상세화면</div>
    </>
  );
};

export default Detail;
