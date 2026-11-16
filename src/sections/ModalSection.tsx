import {
  accentDialogs,
  confirmDialogs,
  confirmRules,
  generalRules,
  modalOverview,
  sizeSpacingRules,
  typographyRules,
  type DialogExample,
} from '@/content/modal';

/** 弹窗规范页，1:1 复刻 Figma GEAK NAS DS_Mobile 设计稿 859:5325 */
export function ModalSection() {
  return (
    <div
      style={{
        padding: '56px 44px 64px',
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
      }}
    >
      {/* 文档标题区 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h1
          style={{
            color: '#181819',
            fontSize: '36px',
            lineHeight: '54px',
            fontWeight: 700,
            margin: 0,
          }}
        >
          {modalOverview.title}
        </h1>
        <p
          style={{
            color: '#5C647A',
            fontSize: '18px',
            lineHeight: '29.7px',
            fontWeight: 300,
            margin: 0,
          }}
        >
          {modalOverview.description}
        </p>
      </div>

      {/* 1. 通用规则 */}
      <Section title="通用规则" rules={generalRules} />

      {/* 2. 带强调主按钮的弹窗样式 */}
      <Section
        index="2."
        title="带强调主按钮的弹窗样式"
        subtitle="主标题+副标题、仅主标题、双按钮与单按钮的组合形式。"
      />

      {/* 2-A/B: 单按钮类型 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
        {accentDialogs.slice(0, 2).map((d) => (
          <ExampleCard key={d.key} dialog={d} />
        ))}
      </div>

      {/* 2-C/D/E: 双按钮类型 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '24px' }}>
        {accentDialogs.slice(2).map((d) => (
          <ExampleCard key={d.key} dialog={d} />
        ))}
      </div>

      {/* 3. 确认弹窗样式 */}
      <Section
        index="3."
        title="确认弹窗样式（底部分割线文字按钮）"
        marginTop="56px"
        rules={confirmRules}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
        {confirmDialogs.map((d) => (
          <ExampleCard key={d.key} dialog={d} />
        ))}
      </div>

      {/* 4. 尺寸与间距规范 */}
      <Section
        index="4."
        title="尺寸与间距规范"
        marginTop="56px"
        rules={sizeSpacingRules}
      />

      {/* 结构示意 */}
      <div
        style={{
          marginTop: '24px',
          backgroundColor: '#F4F4F7',
          padding: '40px',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <AccentDialog dialog={accentDialogs[0]} />
      </div>

      {/* 5. 文字样式规范 */}
      <Section
        index="5."
        title="文字样式规范"
        marginTop="56px"
        rules={typographyRules}
      />
    </div>
  );
}

/** 章节标题 + 规则列表 + 可选副标题 */
function Section({
  index,
  title,
  subtitle,
  rules,
  marginTop = '48px',
}: {
  index?: string;
  title: string;
  subtitle?: string;
  rules?: string[];
  marginTop?: string;
}) {
  return (
    <section style={{ marginTop, display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2
          style={{
            color: '#121736',
            fontSize: '28px',
            lineHeight: '35px',
            fontWeight: 500,
            margin: 0,
          }}
        >
          {index ? `${index} ${title}` : title}
        </h2>
        {subtitle && (
          <p
            style={{
              color: '#5C647A',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 300,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {rules && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            paddingLeft: '20px',
          }}
        >
          {rules.map((r, i) => (
            <p
              key={i}
              style={{
                color: '#121736',
                fontSize: '15px',
                lineHeight: '19.9px',
                fontWeight: 300,
                margin: 0,
              }}
            >
              {`• ${r}`}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

/** 示例卡片：灰底 + 标签 + 居中弹窗 */
function ExampleCard({ dialog }: { dialog: DialogExample }) {
  return (
    <div
      style={{
        backgroundColor: '#F4F4F7',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          alignSelf: 'flex-start',
          color: '#121736',
          fontSize: '18px',
          lineHeight: '24px',
          fontWeight: 450,
        }}
      >
        {dialog.key} · {dialog.label}
      </span>
      {dialog.type === 'confirm' ? (
        <ConfirmDialog dialog={dialog} />
      ) : (
        <AccentDialog dialog={dialog} />
      )}
    </div>
  );
}

/** 带强调主按钮的弹窗：330px 宽，16px 圆角，24px 内边距 */
function AccentDialog({ dialog }: { dialog: DialogExample }) {
  const { type, title, subtitle, primaryText, secondaryText, showClose, mainText16, mainTextOnly } = dialog;

  // 计算弹窗高度（近似）
  const hasSubtitle = !!subtitle;
  const titleOnlyMultiLine = mainTextOnly;
  const contentHeight = titleOnlyMultiLine ? '48px' : hasSubtitle ? '76px' : '44px';

  return (
    <div
      style={{
        width: '330px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      {/* 内容区 */}
      <div style={{ width: '282px', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
        {/* 关闭按钮（E 类型） */}
        {showClose && (
          <span
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#C8C9CC',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            ✕
          </span>
        )}

        <div style={{ height: contentHeight, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p
            style={{
              color: '#171719',
              fontSize: mainText16 ? '16px' : '18px',
              lineHeight: mainText16 ? '22px' : '24px',
              fontWeight: mainText16 ? 500 : 600,
              margin: 0,
              textAlign: titleOnlyMultiLine || hasSubtitle ? 'center' : 'center',
            }}
          >
            {title}
          </p>
          {subtitle && (
            <p
              style={{
                color: '#5C5C61',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 400,
                margin: 0,
                textAlign: 'center',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* 按钮区 */}
      <div style={{ marginTop: '24px' }}>
        {type === 'single' ? (
          <div
            style={{
              width: '282px',
              height: '44px',
              backgroundColor: '#3379FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '16px',
              lineHeight: '22px',
              fontWeight: 500,
            }}
          >
            {primaryText}
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '12px', width: '282px', height: '44px' }}>
            <div
              style={{
                flex: 1,
                backgroundColor: '#F4F4F7',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5C5C61',
                fontSize: '16px',
                lineHeight: '22px',
                fontWeight: 500,
              }}
            >
              {secondaryText}
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: '#3379FF',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '16px',
                lineHeight: '22px',
                fontWeight: 500,
              }}
            >
              {primaryText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** 确认弹窗：330px 宽，16px 圆角，24px 内边距，底部分割线文字按钮 */
function ConfirmDialog({ dialog }: { dialog: DialogExample }) {
  const { type, title, subtitle, confirmCancelText, confirmOkText, mainTextOnly } = dialog;

  return (
    <div
      style={{
        width: '330px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      {/* 内容区：24px 内边距 */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div style={{ width: '282px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p
            style={{
              color: '#171719',
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: 600,
              margin: 0,
              textAlign: mainTextOnly ? 'center' : 'left',
            }}
          >
            {title}
          </p>
          {subtitle && (
            <p
              style={{
                color: '#9B99AA',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 400,
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* 水平分割线 */}
      <div style={{ height: '1px', backgroundColor: '#E5E5E5' }} />

      {/* 按钮区：48px 高，无背景 */}
      <div style={{ display: 'flex', height: '48px' }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#181819',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 400,
          }}
        >
          {confirmCancelText}
        </div>
        {/* 垂直分割线 */}
        <div style={{ width: '1px', backgroundColor: '#E5E5E5' }} />
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3379FF',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 400,
          }}
        >
          {confirmOkText}
        </div>
      </div>
    </div>
  );
}
