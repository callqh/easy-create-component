import sade from 'sade'
import { name, version } from '../package.json'
import create from './command/create'

const prog = sade(name)

prog.version(version)

prog
  .command('create <name>')
  .describe('生成组件目录')
  .action((name) => {
    create(name)
  })

prog.parse(process.argv)
