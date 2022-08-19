import { dirname, resolve } from 'path'
import { cwd, exit } from 'process'
import url from 'url'
import fs from 'fs-extra'
import consola from 'consola'
import { getHash, validateCamelCase } from '../utils'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const root = resolve(cwd(), './src/components')
const pagesPath = resolve(cwd(), './src/pages')
const templatePath = resolve(__dirname, '../template')

function create(name: string) {
  if (!validateCamelCase(name)) {
    consola.error('文件名必须为大驼峰')
    return exit(1)
  }
  isExistFolder()

  const floderPath = resolve(root, name)
  const page = resolve(pagesPath, name)
  consola.info('组件创建中...')
  createFolder(name, floderPath)

  createPages(name, page)
  consola.success(`${name} 组件创建成功`)
}

// 创建目录
function createFolder(folderName: string, _path: string) {
  const isExist = fs.existsSync(_path)
  if (isExist) {
    consola.error(`${folderName} 组件已经存在`)
    return exit(1)
  }

  const hash = getHash(Buffer.from(_path))

  try {
    fs.mkdirSync(_path)
    // 将文件copy到新目录
    fs.copySync(templatePath, _path)
    const className = `${folderName}-wrapper-${hash}`
    const toLowerClassName = className?.replace(className[0], className[0].toLocaleLowerCase())
    fs.writeFileSync(
      resolve(_path, 'index.tsx'),
      `import './style.scss';

import React from 'react';

import type { IProps } from './interface';

const ${folderName}: React.FC<IProps> = (props) => {
  return <div className='${toLowerClassName}'></div>;
};

export default  ${folderName};`,
    )

    fs.writeFileSync(
      resolve(_path, 'style.scss'),
      `.${toLowerClassName} {
 
  
      }
      `,
    )
  }
  catch (e) {
    consola.error(e)
  }
}

// 创建pages
function createPages(name: string, _path: string) {
  const isExist = fs.existsSync(_path)
  const routePages = resolve(_path, 'index.tsx')
  if (isExist) {
    consola.error(`${name}目录已经存在`)
    return exit(1)
  }

  try {
    fs.mkdirSync(_path)
    fs.createFileSync(routePages)
    fs.writeFileSync(
      routePages,
      `import ${name} from '@components/${name}';

export default () => {
  return <${name} />;
};`,
      'utf8',
    )
  }
  catch (e) {
    consola.error(e)
  }
}

// 判断目录是否存在
function isExistFolder() {
  if (!fs.existsSync(root)) {
    consola.warn('【/src/components】目录不存在，无法创建组件')
    return exit(1)
  }
  if (!fs.existsSync(pagesPath)) {
    consola.warn('【/src/pages】目录不存在，无法创建组件')
    return exit(1)
  }
}

export default create
