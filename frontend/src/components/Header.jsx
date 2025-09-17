import { useMemo } from 'react';

export function Header({ theme, onToggleTheme, email }) {
  const buttonLabel = useMemo(() => (theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'), [theme]);

  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand__monogram">OH</div>
        <div className="brand__meta">
          <p className="brand__name">Oliver Harrison</p>
          <p className="brand__role">Full-stack Developer</p>
        </div>
      </div>
      <div className="header__actions">
        <a className="link-pill" href={`mailto:${email}`}>
          {email}
        </a>
        <button className="mode-toggle" type="button" onClick={onToggleTheme} aria-label={buttonLabel}>
          <span className={`mode-toggle__icon ${theme === 'light' ? 'is-light' : ''}`} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
