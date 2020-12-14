# 第三方库


> colorful

## About
```
it's everything colorful in terminal
```

## Link

[npm-link](https://www.npmjs.com/package/colorful)

[github-link](https://github.com/lepture/colorful#readme)


## Usage

```
require('colorful').colorful()
'hello'.to.red.color
'hello'.to.underline.bold.red.color
'hello'.to.underline.bold.red.style

```

```
var Color = require('colorful').Color;
 
var s = new Color('colorful');
s.fgcolor = 13;
s.bgcolor = 61;
```



> raf


## About
```
requestAnimationFrame polify for node and browser
```

## Link

[npm-link](https://www.npmjs.com/package/raf)
[github-link](https://github.com/chrisdickinson/raf)

## Usage

```
var raf = require('raf')

raf(function tick() {
  // Animation logic
  raf(tick)
})

```

> react-lifecycles-compat

## About
```
React版本17将弃用几类组件API生命周期：componentWillMount，componentWillReceiveProps，和componentWillUpdate。（请阅读更新异步渲染博客文章[https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html]，以了解更多原因。）为了更好地支持异步渲染模式，还添加了两个新的生命周期。

通常，这种类型的更改将要求第三方库发布新的主要版本，以便遵守semver。但是，react-lifecycles-compatpolyfill提供了一种将新生命周期也与旧版本的React（0.14.9+）一起使用的方法，因此不需要中断版本。这使共享库可以同时支持旧版本和新版本的React。

```


## Link

[npm-link](https://www.npmjs.com/package/react-lifecycles-compat)

[github](https://github.com/reactjs/react-lifecycles-compat#readme)


> @ant-design/create-react-context

## About

```
Polyfill for the proposed React context API
```

## Link

[github](https://github.com/jamiebuilds/create-react-context)

## Usage

```
import React, { type Node } from 'react';
import createReactContext, { type Context } from 'create-react-context';

type Theme = 'light' | 'dark';
// Pass a default theme to ensure type correctness
const ThemeContext: Context<Theme> = createReactContext('light');

class ThemeToggler extends React.Component<
  { children: Node },
  { theme: Theme }
> {
  state = { theme: 'light' };
  render() {
    return (
      // Pass the current context value to the Provider's `value` prop.
      // Changes are detected using strict comparison (Object.is)
      <ThemeContext.Provider value={this.state.theme}>
        <button
          onClick={() => {
            this.setState(state => ({
              theme: state.theme === 'light' ? 'dark' : 'light'
            }));
          }}
        >
          Toggle theme
        </button>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

class Title extends React.Component<{ children: Node }> {
  render() {
    return (
      // The Consumer uses a render prop API. Avoids conflicts in the
      // props namespace.
      <ThemeContext.Consumer>
        {theme => (
          <h1 style={{ color: theme === 'light' ? '#000' : '#fff' }}>
            {this.props.children}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}

```

> css-animation/lib/Event


```
    TransitionEvents.addStartEventListener(node, this.onTransitionStart);

    TransitionEvents.addEndEventListener(node, this.onTransitionEnd);
```


> is-windows

https://github.com/jonschlinkert/is-windows

>