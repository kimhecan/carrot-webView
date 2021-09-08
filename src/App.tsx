import * as React from 'react';
import { Navigator, Screen } from 'karrotframe'
import Main from './screens/Main';
const App: React.FC = () => {
    return (
        <Navigator
        theme="Cupertino"
        onClose={() => {
          console.log('닫기버튼이 눌렸습니다')
        }}
      >
   <Screen path="/" component={Main} />
   
      </Navigator>
    )
};
export default App;
