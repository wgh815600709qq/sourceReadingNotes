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