const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// 新增lib结构
// |-- ant-design                                |-- 库名称
//       |-- lib.md                              |-- 一些好的第三方库已经相关用法说明
//       |-- code.md                             |-- 代码解析
//       |-- mind.md                             |-- 分析思路

inquirer.prompt({
    type: 'input',
    name: 'libName',
    message: '新增库名'
}).then((data) => {
    const libName = data.libName;
    const packagePath = path.resolve(__dirname, `./${libName}`);
    const isExist = fs.existsSync(packagePath);
    if (isExist) {
        console.warn(`库:[${libName}] is already exist`);
        return
    } else {
        fs.mkdirSync(packagePath);
        fs.writeFileSync(path.resolve(packagePath, `./code.md`),`# 优质代码解析`);
        fs.writeFileSync(path.resolve(packagePath, `./lib.md`), `# 引用的第三方库，以及相关用法`);
        fs.writeFileSync(path.resolve(packagePath, './mind.md'),`# 巧妙的实现思路`);
        console.log(`库：[${libName}] created finish`);
    }   
})