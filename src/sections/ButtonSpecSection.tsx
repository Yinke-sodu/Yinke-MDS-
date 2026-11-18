import {
  buttonSpecOverview,
  section01Definition,
  section02Structure,
  section03Types,
  section04Layout,
  section05SafeArea,
  section06Expand,
  section07Special,
} from '@/content/buttonSpec';

/** 置底按钮设计规范 — 1:1 复刻 Figma 878:9576 */
export function ButtonSpecSection() {
  return (
    <div
      style={{
        padding: '56px 44px 88px',
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '56px',
      }}
    >
      {/* 文档标题 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h1
          style={{
            color: '#181819',
            fontSize: '36px',
            lineHeight: '54px',
            fontWeight: 700,
            margin: 0,
          }}
        >
          {buttonSpecOverview.title}
        </h1>
        <p
          style={{
            color: '#5C647A',
            fontSize: '18px',
            lineHeight: '30px',
            fontWeight: 330,
            margin: 0,
          }}
        >
          {buttonSpecOverview.description}
        </p>
      </div>

      {/* 01 · 组件定义 / 适用场景 */}
      <SectionGroup
        eyebrow={section01Definition.eyebrow}
        title={section01Definition.title}
        subtitle={section01Definition.subtitle}
      >
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {section01Definition.scenarios.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span
                style={{
                  color: '#3379FF',
                  fontSize: '8px',
                  flexShrink: 0,
                  lineHeight: '1',
                }}
              >
                ●
              </span>
              <span
                style={{
                  color: '#121736',
                  fontSize: '15px',
                  lineHeight: '24px',
                  fontWeight: 330,
                }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
      </SectionGroup>

      {/* 02 · 结构与规格 */}
      <SectionGroup
        title={section02Structure.title}
        subtitle={section02Structure.subtitle}
      >
        {/* 4 列规格表 */}
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {section02Structure.specs.map((spec, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span
                style={{
                  color: '#5C647A',
                  fontSize: '15px',
                  lineHeight: '24px',
                  fontWeight: 630,
                }}
              >
                {spec.label}
              </span>
              <span
                style={{
                  color: '#121736',
                  fontSize: '18px',
                  lineHeight: '29px',
                  fontWeight: 630,
                }}
              >
                {spec.value}
              </span>
              <span
                style={{
                  color: '#5C647A',
                  fontSize: '15px',
                  lineHeight: '24px',
                  fontWeight: 330,
                }}
              >
                {spec.note}
              </span>
            </div>
          ))}
        </div>

        {/* 高度说明 */}
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              color: '#5C647A',
              fontSize: '24px',
              lineHeight: '29px',
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            i
          </span>
          <span
            style={{
              color: '#121736',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 330,
            }}
          >
            {section02Structure.heightNote}
          </span>
        </div>
      </SectionGroup>

      {/* 03 · 类型与组合 */}
      <SectionGroup
        title={section03Types.title}
        subtitle={section03Types.subtitle}
      >
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
        >
          {section03Types.types.map((t) => (
            <div
              key={t.code}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  style={{
                    color: '#121736',
                    fontSize: '18px',
                    lineHeight: '29px',
                    fontWeight: 630,
                  }}
                >
                  {t.code} · {t.name}
                </span>
                <span
                  style={{
                    color: '#5C647A',
                    fontSize: '15px',
                    lineHeight: '24px',
                    fontWeight: 330,
                  }}
                >
                  {t.description}
                </span>
              </div>

              {/* iPhone 预览 */}
              <div
                style={{
                  marginTop: '8px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '0',
                  overflow: 'hidden',
                  border: '1px solid #E5E5EA',
                  width: '300px',
                }}
              >
                <IPhonePreview variant={t.preview} />
              </div>
            </div>
          ))}
        </div>
      </SectionGroup>

      {/* 04 · 布局规则 */}
      <SectionGroup
        title={section04Layout.title}
        subtitle={section04Layout.subtitle}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {section04Layout.rules.map((r, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#F4F4F7',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  color: '#121736',
                  fontSize: '15px',
                  lineHeight: '29px',
                  fontWeight: 630,
                  whiteSpace: 'nowrap',
                }}
              >
                {r.title}
              </span>
              <span
                style={{
                  color: '#5C647A',
                  fontSize: '15px',
                  lineHeight: '29px',
                  fontWeight: 330,
                }}
              >
                {r.desc}
              </span>
            </div>
          ))}
        </div>
      </SectionGroup>

      {/* 05 · 安全区与背景 */}
      <SectionGroup
        title={section05SafeArea.title}
        subtitle={section05SafeArea.subtitle}
      >
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
        >
          {section05SafeArea.rules.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <span
                style={{
                  color: '#121736',
                  fontSize: '18px',
                  lineHeight: '29px',
                  fontWeight: 630,
                }}
              >
                {r.title}
              </span>
              <span
                style={{
                  color: '#5C647A',
                  fontSize: '15px',
                  lineHeight: '24px',
                  fontWeight: 330,
                }}
              >
                {r.desc}
              </span>
            </div>
          ))}
        </div>
      </SectionGroup>

      {/* 06 · 扩展内容 */}
      <SectionGroup
        title={section06Expand.title}
        subtitle={section06Expand.subtitle}
      >
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '24px',
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {section06Expand.rules.map((r, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  style={{
                    color: '#121736',
                    fontSize: '18px',
                    lineHeight: '29px',
                    fontWeight: 630,
                  }}
                >
                  {r.title}
                </span>
                <span
                  style={{
                    color: '#5C647A',
                    fontSize: '15px',
                    lineHeight: '24px',
                    fontWeight: 330,
                  }}
                >
                  {r.desc}
                </span>
              </div>
            ))}
          </div>

          {/* 扩展内容 iPhone 预览 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #E5E5EA',
            }}
          >
            <IPhonePreview variant="expand" />
          </div>
        </div>
      </SectionGroup>

      {/* 07 · 特殊组合 */}
      <SectionGroup
        title={section07Special.title}
        subtitle={section07Special.subtitle}
      >
        <div
          style={{
            backgroundColor: '#F4F4F7',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* iPhone 预览 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #E5E5EA',
              width: '300px',
            }}
          >
            <IPhonePreview variant="special" />
          </div>
        </div>
      </SectionGroup>
    </div>
  );
}

/** 章节分组容器 — 统一章节标题行 */
function SectionGroup({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {eyebrow && (
          <span
            style={{
              color: '#5C647A',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 630,
            }}
          >
            {eyebrow}
          </span>
        )}
        <span
          style={{
            color: '#121736',
            fontSize: '28px',
            lineHeight: '35px',
            fontWeight: 630,
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: '#5C647A',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 330,
          }}
        >
          {subtitle}
        </span>
      </div>
      {children}
    </section>
  );
}

/** iPhone 底部区域预览（300×自适应高） */
function IPhonePreview({ variant }: { variant: string }) {
  // 屏幕宽度 300px，按钮区水平 padding=16px → 按钮宽 268px
  const SCREEN_W = 300;
  const PAD = 16;
  const BTN_W = SCREEN_W - PAD * 2;

  // 主按钮底
  const primaryBtn: React.CSSProperties = {
    width: `${BTN_W}px`,
    height: '52px',
    backgroundColor: '#3379FF',
    color: '#FFFFFF',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '25.2px',
  };

  const secondaryBtn: React.CSSProperties = {
    width: `${BTN_W}px`,
    height: '44px',
    backgroundColor: '#FFFFFF',
    color: '#5C5C61',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '22px',
  };

  // 底部安全区条（Home Indicator 区域模拟）
  const safeAreaBar = (
    <div
      style={{
        width: `${SCREEN_W}px`,
        height: '20px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '120px',
          height: '5px',
          backgroundColor: '#121736',
          borderRadius: '3px',
          opacity: 0.6,
        }}
      />
    </div>
  );

  switch (variant) {
    case 'single-primary':
      // 375×110 对应 300×88
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: `${SCREEN_W}px`,
              padding: '12px 16px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={primaryBtn}>主按钮</div>
          </div>
          {safeAreaBar}
        </div>
      );

    case 'dual-horizontal':
      // 375×102 对应 300×82
      // 两个按钮横排，各约 (BTN_W - 12) / 2
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: `${SCREEN_W}px`,
              padding: '12px 16px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                ...secondaryBtn,
                width: `${(BTN_W - 12) / 2}px`,
                height: '44px',
              }}
            >
              次要按钮
            </div>
            <div
              style={{
                ...primaryBtn,
                width: `${(BTN_W - 12) / 2}px`,
                height: '44px',
              }}
            >
              主按钮
            </div>
          </div>
          {safeAreaBar}
        </div>
      );

    case 'expand':
      // 扩展内容：已选择 全部/N 项 + 主按钮
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: `${SCREEN_W}px`,
              padding: '12px 16px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <span
              style={{
                color: '#121736',
                fontSize: '14px',
                lineHeight: '16px',
                fontWeight: 400,
                textAlign: 'center',
              }}
            >
              已选择 全部/N 项
            </span>
            <div style={primaryBtn}>确定</div>
          </div>
          {safeAreaBar}
        </div>
      );

    case 'special':
      // 上下双按钮（文案过长时），高度 44pt
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: `${SCREEN_W}px`,
              padding: '12px 16px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div
              style={{
                ...primaryBtn,
                height: '44px',
                fontSize: '15px',
              }}
            >
              Trust and Continue
            </div>
            <div
              style={{
                ...secondaryBtn,
                height: '44px',
                color: '#5C5C61',
              }}
            >
              Cancel
            </div>
          </div>
          {safeAreaBar}
        </div>
      );

    default:
      return null;
  }
}
