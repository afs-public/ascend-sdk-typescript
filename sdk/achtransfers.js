"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACHTransfers = void 0;
const achTransfersCancelACHDeposit_js_1 = require("../funcs/achTransfersCancelACHDeposit.js");
const achTransfersCancelACHWithdrawal_js_1 = require("../funcs/achTransfersCancelACHWithdrawal.js");
const achTransfersCreateACHDeposit_js_1 = require("../funcs/achTransfersCreateACHDeposit.js");
const achTransfersCreateACHWithdrawal_js_1 = require("../funcs/achTransfersCreateACHWithdrawal.js");
const achTransfersGetACHDeposit_js_1 = require("../funcs/achTransfersGetACHDeposit.js");
const achTransfersGetACHWithdrawal_js_1 = require("../funcs/achTransfersGetACHWithdrawal.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class ACHTransfers extends sdks_js_1.ClientSDK {
    /**
     * Create ACH Deposit
     *
     * @remarks
     * Creates an ACH deposit.
     */
    async createAchDeposit(achDepositCreate, accountId, options) {
        return (0, fp_js_1.unwrapAsync)((0, achTransfersCreateACHDeposit_js_1.achTransfersCreateACHDeposit)(this, achDepositCreate, accountId, options));
    }
    /**
     * Get ACH Deposit
     *
     * @remarks
     * Gets an existing ACH deposit.
     */
    async getAchDeposit(accountId, achDepositId, options) {
        return (0, fp_js_1.unwrapAsync)((0, achTransfersGetACHDeposit_js_1.achTransfersGetACHDeposit)(this, accountId, achDepositId, options));
    }
    /**
     * Cancel ACH Deposit
     *
     * @remarks
     * Cancels an existing ACH deposit.
     */
    async cancelAchDeposit(cancelAchDepositRequestCreate, accountId, achDepositId, options) {
        return (0, fp_js_1.unwrapAsync)((0, achTransfersCancelACHDeposit_js_1.achTransfersCancelACHDeposit)(this, cancelAchDepositRequestCreate, accountId, achDepositId, options));
    }
    /**
     * Create ACH Withdrawal
     *
     * @remarks
     * Creates an ACH withdrawal.
     */
    async createAchWithdrawal(achWithdrawalCreate, accountId, options) {
        return (0, fp_js_1.unwrapAsync)((0, achTransfersCreateACHWithdrawal_js_1.achTransfersCreateACHWithdrawal)(this, achWithdrawalCreate, accountId, options));
    }
    /**
     * Get ACH Withdrawal
     *
     * @remarks
     * Gets an existing ACH withdrawal.
     */
    async getAchWithdrawal(accountId, achWithdrawalId, options) {
        return (0, fp_js_1.unwrapAsync)((0, achTransfersGetACHWithdrawal_js_1.achTransfersGetACHWithdrawal)(this, accountId, achWithdrawalId, options));
    }
    /**
     * Cancel ACH Withdrawal
     *
     * @remarks
     * Cancels an existing ACH withdrawal.
     */
    async cancelAchWithdrawal(cancelAchWithdrawalRequestCreate, accountId, achWithdrawalId, options) {
        return (0, fp_js_1.unwrapAsync)((0, achTransfersCancelACHWithdrawal_js_1.achTransfersCancelACHWithdrawal)(this, cancelAchWithdrawalRequestCreate, accountId, achWithdrawalId, options));
    }
}
exports.ACHTransfers = ACHTransfers;
//# sourceMappingURL=achtransfers.js.map