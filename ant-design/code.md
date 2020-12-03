# [component] Button

## 匹配中文的正则

```
/^[\u4e00-\u9fa5]+$/    => 纯中文
```


## 一个疑问？？？

```
const tuple = <T extends string[]>(...args: T) => args;
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
type ButtonType = (typeof ButtonTypes)[number]; // ??

```