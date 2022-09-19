<h1 align="center">Welcome to @frankbolviken/localstorage-hook 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />
  <a href="https://github.com/frankbolviken/localstorage-hook#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/frankbolviken/localstorage-hook/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/frankbolviken/localstorage-hook/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/frankbolviken/@frankbolviken/localstorage-hook" />
  </a>
</p>

> React hook which syncs the state to the browsers localstorage. All references to localstorage handled in a way which makes this hook work in nextjs serverside rendered applications.

### 🏠 [Homepage](https://github.com/frankbolviken/localstorage-hook#readme)

## Prerequisites

- node >=10

## Install

```sh
npm install
```

## Usage

```javascript
import useLocalStorage from '@frankbolviken/localstorage-hook';

const App = () => {
  const [user, setUser] = useLocalStorage < string > ('username', 'John doe');
  return (
    <div>
      The username is {user}
      <button onClick={() => setUser('Batman')}>Change</button>
    </div>
  );
};
```

## Run tests

```sh
npm run test
```

## Author

👤 **Frank Bølviken**

- Github: [@frankbolviken](https://github.com/frankbolviken)
- LinkedIn: [@frankbolviken](https://linkedin.com/in/frankbolviken)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Frank Bølviken](https://github.com/frankbolviken).<br />
This project is [MIT](https://github.com/frankbolviken/localstorage-hook/blob/main/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
