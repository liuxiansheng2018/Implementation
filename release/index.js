const chalk = require('chalk')
// shell和本地外部程序的javascript封装
const execa = require('execa')
const {
    prompt
} = require('enquirer')


const setup = msg => console.log(chalk.cyan(msg))

const run = (bin, args, opts={}) => 
execa(bin, args, {
    stdio: 'inherit',
    ...opts
})

async function main () {
    console.log('欢迎使用发版小助手脚本')
    setup('\n 验证是否提交代码...')
    const { yes } = await prompt({
        type: 'confirm',
        name: 'yes',
        message: `确定已经提交代码并将代码push到develop分支了吗?`
      })
    
    if( !yes ) {
        return 
    }
    await run('git', ['checkout', 'develop'])
    await run ('git', ['pull', 'origin', 'develop'])

    await run('git', ['checkout', 'release'])
    await run('git', ['pull', 'origin', 'release'])

    await run('git', ['merge', 'develop'])
    await run('git', ['push', 'origin', 'release'])
}

main().catch(err => {
    console.log(err)
})