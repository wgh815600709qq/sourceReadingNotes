# fixes exit code from sub-commands not propagating

[link] https://github.com/tj/commander.js/pull/260

```
const proc = program.runningCommand;
if (proc) {
  proc.on('close', process.exit.bind(process));
  proc.on('error', () => {
    process.exit(1);
  });
}
```

# Nodejs 时间精度

process.hrtime > performance.now > Date.now

## Usage

```

  const start = process.hrtime();

  const duration = process.hrtime(start);

```

#  gulp调用 [非命令行]

```

  const taskInstance = gulp.task(task_A);

  taskInstance.apply(gulp); // rk: 类似于调用 glup task_A命令

```


# require.resolve

```
  * path.resolve
    	
  -> fs.readFileSync(path.join(__dirname, './assets/some-file.txt'));

  * require.resolve

  -> fs.readFileSync(require.resolve('./assets/some-file.txt'));

  好处：
  require.resolve 还会在拼接好路径之后检查该路径是否存在, 
  如果 resolve 的目标路径不存在, 就会抛出 Cannot find module './some-file.txt' 的异常.
  省略了一道检查文件是否存在的工序 (fs.exists)
```