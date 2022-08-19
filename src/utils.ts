import { getHashDigest } from 'loader-utils'
/**
 * 获取哈希值
 * @param str 字符串
 * @param maxLength 最大长度
 * @returns 哈希值
 */
export const getHash = (path: Buffer, maxLength = '5') => {
  return getHashDigest(path, 'md5', 'base64', parseInt(maxLength, 10))
}

/**
 * 验证文件名是否为大驼峰
 * @param filename 文件名
 * @returns boolean
 */
export const validateCamelCase = (filename: string) => {
  const reg = /^([A-Z][a-z0-9]+)+$/
  return reg.test(filename)
}
