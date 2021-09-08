import * as React from 'react';
import { ScreenHelmet } from 'karrotframe';

const Main = () => {
    return (
        <>
            <ScreenHelmet
                title="메인페이지"
                customBackButton={<div>이전</div>}
                customCloseButton={<div>닫기</div>}
            />
            <div>
                main이예요
            </div>
        </>
    )
}

export default Main;
