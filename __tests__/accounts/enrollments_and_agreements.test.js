"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const index_1 = require("./index");
const vitest_2 = require("vitest");
let lnp_id;
let account_id;
let enrollment_ids;
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
    enrollment_ids = await (0, index_1.enrollAccount)(account_id);
    if (typeof enrollment_ids !== "object") {
        throw new Error("enrollment_ids is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Enrollments & Agreements Accounts Enroll Account Enroll Account1", async () => {
    (0, vitest_1.expect)(enrollment_ids).not.toBe(undefined);
});
(0, vitest_1.test)("Enrollments & Agreements Accounts List Available Enrollments List Available Enrollments1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const result = await sdk_1.sdk.enrollmentsAndAgreements.listAvailableEnrollments(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Enrollments & Agreements Accounts List Enrollments List Enrollments1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const result = await sdk_1.sdk.enrollmentsAndAgreements.listEnrollments(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Enrollments & Agreements Accounts Affirm Agreements Affirm Agreements1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof enrollment_ids !== "object") {
        throw new Error("enrollment_ids is undefined.");
    }
    const request = {
        accountAgreementIds: enrollment_ids,
    };
    const result = await sdk_1.sdk.enrollmentsAndAgreements.affirmAgreements(request, account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Enrollments & Agreements Accounts List Agreements List Agreements1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const result = await sdk_1.sdk.enrollmentsAndAgreements.listAgreements(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Enrollments & Agreements Accounts List Entitlements List Entitlements1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const result = await sdk_1.sdk.enrollmentsAndAgreements.listEntitlements(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Enrollments & Agreements Accounts Deactivate Enrollment Deactivate Enrollment1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    let deactivate_enrollment_id = await (0, index_1.getEnrollmentToDeactivate)(account_id);
    if (typeof deactivate_enrollment_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const request = {
        enrollmentId: deactivate_enrollment_id,
    };
    const result = await sdk_1.sdk.enrollmentsAndAgreements.deactivateEnrollment(request, account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Enrollments And Agreements Accounts List Available Enrollments By Account Group Accounts List Available Enrollments By Account Group1 accounts_ListAvailableEnrollmentsByAccountGroup", async () => {
    const result = await sdk_1.sdk.enrollmentsAndAgreements.accountsListAvailableEnrollmentsByAccountGroup(process.env["ACCOUNT_GROUP_ID"] ?? "");
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=enrollments_and_agreements.test.js.map