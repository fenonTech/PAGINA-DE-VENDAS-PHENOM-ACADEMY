const ICON_PROPS = { width: 34, height: 34, viewBox: '0 0 40 40' };

export function ValidationIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="20" cy="20" r="17" fill="none" stroke="#f4f4f2" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="8" fill="none" stroke="#f4f4f2" strokeWidth="1.4" />
    </svg>
  );
}

export function StoreIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="5" y="8" width="24" height="24" fill="none" stroke="#f4f4f2" strokeWidth="1.4" />
      <rect x="12" y="15" width="24" height="24" fill="#0e0e0e" stroke="#f4f4f2" strokeWidth="1.4" />
    </svg>
  );
}

export function TrafficIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M6 30 L18 14 L26 22 L34 8" fill="none" stroke="#f4f4f2" strokeWidth="1.6" />
      <path d="M27 8 L34 8 L34 15" fill="none" stroke="#f4f4f2" strokeWidth="1.6" />
    </svg>
  );
}

export function AutomationIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="20" cy="20" r="13" fill="none" stroke="#f4f4f2" strokeWidth="1.4" />
      <line x1="20" y1="20" x2="20" y2="11" stroke="#f4f4f2" strokeWidth="1.6" />
      <line x1="20" y1="20" x2="26" y2="24" stroke="#f4f4f2" strokeWidth="1.6" />
    </svg>
  );
}
