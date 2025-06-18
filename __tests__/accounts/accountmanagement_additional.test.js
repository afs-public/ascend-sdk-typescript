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
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const index_1 = require("./index");
const vitest_2 = require("vitest");
let lnp_id;
let account_id;
let legal_entity_id;
let party_id;
let replace_party_id;
let trusted_contact_id;
let interested_party_id;
let restriction_code_id;
(0, vitest_2.beforeAll)(async () => {
    lnp_id = await (0, index_1.createLegalNaturalPerson)();
    if (typeof lnp_id !== "string") {
        throw new Error("lnp_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    account_id = await (0, index_1.createAccount)(lnp_id);
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    legal_entity_id = await (0, index_1.createLegalEntity)();
    if (typeof legal_entity_id !== "string") {
        throw new Error("legal_entity_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    party_id = await (0, index_1.addParty)(account_id, legal_entity_id);
    if (typeof party_id !== "string") {
        throw new Error("party_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    replace_party_id = await (0, index_1.replaceParty)(account_id, lnp_id, party_id);
    if (typeof replace_party_id !== "string") {
        throw new Error("replace_party_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    trusted_contact_id = await (0, index_1.createTrustedContact)(account_id);
    if (typeof trusted_contact_id !== "string") {
        throw new Error("trusted_contact_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    interested_party_id = await (0, index_1.createInterestedParty)(account_id);
    if (typeof interested_party_id !== "string") {
        throw new Error("interested_party_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    restriction_code_id = await (0, index_1.createRestrictionCode)(account_id);
    if (typeof restriction_code_id !== "string") {
        throw new Error("restriction_code_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Account Management Accounts Update Account Update Account1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const request = {
        catAccountHolderType: components.AccountRequestUpdateCatAccountHolderType.IIndividual,
    };
    const result = await sdk_1.sdk.accountManagement.updateAccount(request, account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts Add Party Add Party1", async () => {
    (0, vitest_1.expect)(party_id).not.toBe(undefined);
});
(0, vitest_1.test)("Account Management Accounts Update Party Update Party1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof party_id !== "string") {
        throw new Error("party_id is undefined.");
    }
    const request = {
        emailAddress: "email@example.com",
    };
    const result = await sdk_1.sdk.accountManagement.updateParty(request, account_id, party_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts Replace Party Replace Party1", async () => {
    (0, vitest_1.expect)(replace_party_id).not.toBe(undefined);
});
(0, vitest_1.test)("Account Management Accounts Remove Party Remove Party1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof replace_party_id !== "string") {
        throw new Error("replace_party_id is undefined.");
    }
    const request = {
        authorizedByPartyIds: [
            "8096110d-fb55-4f9d-b883-b84f0b70d3ea",
            "8096110d-fb55-4f9d-b883-b84f0b70d3rb",
        ],
        name: "accounts/" + account_id + "/parties/" + replace_party_id,
    };
    const result = await sdk_1.sdk.accountManagement.removeParty(request, account_id, replace_party_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts Create Trusted Contact Create Trusted Contact1", async () => {
    (0, vitest_1.expect)(trusted_contact_id).not.toBe(undefined);
});
(0, vitest_1.test)("Account Management Accounts Update Trusted Contact Update Trusted Contact1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof trusted_contact_id !== "string") {
        throw new Error("trusted_contact_id is undefined.");
    }
    const request = {
        emailAddress: "email@email.com",
    };
    const result = await sdk_1.sdk.accountManagement.updateTrustedContact(request, account_id, trusted_contact_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts Delete Trusted Contact Delete Trusted Contact1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof trusted_contact_id !== "string") {
        throw new Error("trusted_contact_id is undefined.");
    }
    const result = await sdk_1.sdk.accountManagement.deleteTrustedContact(account_id, trusted_contact_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts Create Interested Party Create Interested Party1", async () => {
    (0, vitest_1.expect)(interested_party_id).not.toBe(undefined);
});
(0, vitest_1.test)("Account Management Accounts Update Interested Party Update Interested Party1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof interested_party_id !== "string") {
        throw new Error("interested_party_id is undefined.");
    }
    const request = {
        recipient: "John Doe",
    };
    const result = await sdk_1.sdk.accountManagement.updateInterestedParty(request, account_id, interested_party_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts Delete Interested Party Delete Interested Party1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof interested_party_id !== "string") {
        throw new Error("interested_party_id is undefined.");
    }
    const result = await sdk_1.sdk.accountManagement.deleteInterestedParty(account_id, interested_party_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts List Available Restrictions List Available Restrictions1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const result = await sdk_1.sdk.accountManagement.listAvailableRestrictions(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts Create Restriction Code Create Restriction Code1", async () => {
    (0, vitest_1.expect)(restriction_code_id).not.toBe(undefined);
});
(0, vitest_1.test)("Account Management Accounts End Restriction Code End Restriction Code1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof restriction_code_id !== "string") {
        throw new Error("restriction_code_id is undefined.");
    }
    const request = {
        reason: "Some reason for removing",
    };
    const result = await sdk_1.sdk.accountManagement.endRestriction(request, account_id, restriction_code_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Management Accounts Close Account Close Account1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const request = {};
    const result = await sdk_1.sdk.accountManagement.closeAccount(request, account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=accountmanagement_additional.test.js.map