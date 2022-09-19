import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useLocalStorage from '../.';

const App = () => {
  const [user, setUser] = useLocalStorage<string>('username', 'John doe');
  return (
    <div>
      The username is {user}
      <button onClick={() => setUser('Batman')}>Change</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
