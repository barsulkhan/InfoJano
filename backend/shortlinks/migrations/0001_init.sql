-- InfoJano Short Link API — D1 initial schema
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS links (
  code TEXT PRIMARY KEY,
  destination_url TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'disabled')),
  clicks_total INTEGER NOT NULL DEFAULT 0 CHECK (clicks_total >= 0)
);

CREATE INDEX IF NOT EXISTS idx_links_status_expiry
  ON links(status, expires_at);

CREATE TABLE IF NOT EXISTS daily_clicks (
  code TEXT NOT NULL,
  click_date TEXT NOT NULL,
  referrer_domain TEXT NOT NULL DEFAULT 'direct',
  device_type TEXT NOT NULL DEFAULT 'desktop' CHECK (device_type IN ('mobile', 'tablet', 'desktop')),
  clicks INTEGER NOT NULL DEFAULT 0 CHECK (clicks >= 0),
  PRIMARY KEY (code, click_date, referrer_domain, device_type),
  FOREIGN KEY (code) REFERENCES links(code) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_daily_clicks_date
  ON daily_clicks(click_date DESC);
