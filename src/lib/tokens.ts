/**
 * 纯函数：把 design token 名称转换成可直接用于 style 的 CSS 表达式。
 * 例：cssVar('--color-primary') => 'var(--color-primary)'
 */
export function cssVar(token: string): string {
  return `var(${token})`;
}
