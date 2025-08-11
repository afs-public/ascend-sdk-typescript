"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_account_transfer_id = create_account_transfer_id;
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const crypto_1 = __importDefault(require("crypto"));
const transfers_1 = require("../transfers");
async function create_account_transfer_id(account_id) {
    const account = await sdk_1.sdk.accountCreation.getAccount(account_id);
    if (!account || !account.account) {
        throw new Error("Account not found or invalid response.");
    }
    const account_number = account.account.accountNumber;
    if (!account_number) {
        throw new Error("Account number is undefined or empty.");
    }
    // Fund Account
    const fundingRequest = {
        amount: {
            value: "1000",
        },
        clientTransferId: crypto_1.default.randomUUID(),
        description: "Credit given as promotion",
        type: components.TransfersCreditCreateType.Promotional,
    };
    await sdk_1.sdk.feesAndCredits.createCredit(fundingRequest, account_id);
    await (0, sdk_1.timeout)(5000);
    const request = {
        assets: [
            {
                identifier: "USD",
                position: {
                    quantity: {
                        value: "1",
                    },
                },
                type: components.AssetCreateType.CurrencyCode,
            },
        ],
        deliverer: {
            externalAccount: {
                accountNumber: account_number,
                participantNumber: "158",
            },
        },
    };
    const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
    if (!correspondentId) {
        throw new Error("CORRESPONDENT_ID is undefined or empty.");
    }
    const result = await sdk_1.sdk.accountTransfers.createTransfer(request, correspondentId, transfers_1.withdrawal_account_id);
    if (result?.acatsTransfer?.name) {
        return result.acatsTransfer.name.split("/").pop();
    }
    return undefined;
}
//# sourceMappingURL=index.js.map