"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashBalances = void 0;
const cashBalancesCalculateCashBalance_js_1 = require("../funcs/cashBalancesCalculateCashBalance.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class CashBalances extends sdks_js_1.ClientSDK {
    /**
     * Get Cash Balance
     *
     * @remarks
     * Calculates the cash balance for an account.
     */
    async calculateCashBalance(accountId, mechanism, options) {
        return (0, fp_js_1.unwrapAsync)((0, cashBalancesCalculateCashBalance_js_1.cashBalancesCalculateCashBalance)(this, accountId, mechanism, options));
    }
}
exports.CashBalances = CashBalances;
//# sourceMappingURL=cashbalances.js.map