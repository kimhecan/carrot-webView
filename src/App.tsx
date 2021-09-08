import * as React from 'react';
import { Navigator, Screen } from 'karrotframe';
import Main from './screens/Main';
import Detail from './screens/Detail';
const App: React.FC = () => {
  return (
    <Navigator
      theme="Cupertino"
      onClose={() => {
        console.log('닫기버튼이 눌렸습니다');
      }}
    >
      <Screen path="/" component={Main} />
      <Screen path="/detail" component={Detail} />
    </Navigator>
  );
};
export default App;
