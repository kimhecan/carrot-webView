import * as React from 'react';
import { ScreenHelmet, useNavigator } from 'karrotframe';

const Main = () => {
  const { push } = useNavigator();

  const handleClick = () => {
    push('/detail');
  };
  return (
    <>
      <ScreenHelmet
        title="메인페이지"
        customBackButton={<div>이전</div>}
        customCloseButton={<div>닫기</div>}
      />
      <div>메인화면</div>
      <button onClick={handleClick}>디테일로 push</button>
    </>
  );
};

export default Main;
