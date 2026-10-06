// Dedicated alternative-investments test account. Created 2026-08 (after the
// Monark update that routes SPV orders through Apex when the correspondent
// isn't registered for the SPV), funded, and accredited. Pre-update accounts
// like the shared withdrawal account get their SPV orders rejected by Monark.
export const alts_account_id =
  process.env["ALTS_ACCOUNT_ID"] ?? "01M0DMB41SQR6SYZDQYZN3CJY2";

// An alternative order placed on alts_account_id, used by get/settle tests.
export const alts_order_id =
  process.env["ALTS_ORDER_ID"] ?? "01M0DMH6QGPHZGFD4T1CJMABEM";
