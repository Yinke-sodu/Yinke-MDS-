import type { Config } from 'tailwindcss';

/**
 * Tailwind 只负责把 token 映射成工具类，
 * 所有具体数值都来自 src/styles/tokens.css，禁止在此处新增硬编码数值。
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          muted: 'var(--color-surface-muted)',
          strong: 'var(--color-surface-strong)',
        },
        hover: 'var(--color-hover)',
        fg: {
          DEFAULT: 'var(--color-fg)',
          muted: 'var(--color-fg-muted)',
          subtle: 'var(--color-fg-subtle)',
          disabled: 'var(--color-fg-disabled)',
        },
        'on-primary': 'var(--color-on-primary)',
        border: {
          DEFAULT: 'var(--color-border)',
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          soft: 'var(--color-primary-soft)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          soft: 'var(--color-success-soft)',
          base: 'var(--color-success-base)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          soft: 'var(--color-warning-soft)',
          base: 'var(--color-warning-base)',
        },
        danger: {
          DEFAULT: 'var(--color-danger)',
          soft: 'var(--color-danger-soft)',
          base: 'var(--color-danger-base)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          soft: 'var(--color-info-soft)',
          base: 'var(--color-info-base)',
        },
        focus: 'var(--color-focus)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        '12': ['var(--font-size-12)', { lineHeight: 'var(--line-height-12)' }],
        '14': ['var(--font-size-14)', { lineHeight: 'var(--line-height-14)' }],
        '15': ['var(--font-size-15)', { lineHeight: 'var(--line-height-15)' }],
        '16': ['var(--font-size-16)', { lineHeight: 'var(--line-height-16)' }],
        '18': ['var(--font-size-18)', { lineHeight: 'var(--line-height-18)' }],
        '20': ['var(--font-size-20)', { lineHeight: 'var(--line-height-20)' }],
        '24': ['var(--font-size-24)', { lineHeight: 'var(--line-height-24)' }],
        '28': ['var(--font-size-28)', { lineHeight: 'var(--line-height-28)' }],
        '32': ['var(--font-size-32)', { lineHeight: 'var(--line-height-32)' }],
        '40': ['var(--font-size-40)', { lineHeight: 'var(--line-height-40)' }],
        '52': ['var(--font-size-52)', { lineHeight: 'var(--line-height-52)' }],
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },
      letterSpacing: {
        tight: 'var(--letter-spacing-tight)',
        normal: 'var(--letter-spacing-normal)',
        wide: 'var(--letter-spacing-wide)',
      },
      spacing: {
        '0': 'var(--space-0)',
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '9': 'var(--space-9)',
        '10': 'var(--space-10)',
        '12': 'var(--space-12)',
        '14': 'var(--space-14)',
        '16': 'var(--space-16)',
        '20': 'var(--space-20)',
        '24': 'var(--space-24)',
      },
      maxWidth: {
        content: 'var(--layout-content-width)',
        shell: 'var(--layout-shell-width)',
      },
      width: {
        sidebar: 'var(--layout-sidebar-width)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
      },
      transitionTimingFunction: {
        out: 'var(--easing-out)',
      },
    },
  },
  plugins: [],
};

export default config;
