/**
 * 间距 token 配置，刻度基于 4px 基准。
 */

export interface SpaceToken {
  token: string;
  value: string;
}

export const spaceScale: SpaceToken[] = [
  { token: '--space-1', value: '4px' },
  { token: '--space-2', value: '8px' },
  { token: '--space-3', value: '12px' },
  { token: '--space-4', value: '16px' },
  { token: '--space-6', value: '24px' },
  { token: '--space-8', value: '32px' },
  { token: '--space-12', value: '48px' },
];
