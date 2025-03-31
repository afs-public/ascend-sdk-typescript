import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "../../models/components";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  getEnrollmentToDeactivate,
} from "./index";
import { beforeAll } from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  await timeout(5000);
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  await timeout(5000);
  enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  await timeout(5000);
}, 60000);

test("Enrollments & Agreements Accounts Enroll Account Enroll Account1", async () => {
  expect(enrollment_ids).not.toBe(undefined);
});

test("Enrollments & Agreements Accounts List Available Enrollments List Available Enrollments1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const result =
    await sdk.enrollmentsAndAgreements.listAvailableEnrollments(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Enrollments & Agreements Accounts List Enrollments List Enrollments1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const result = await sdk.enrollmentsAndAgreements.listEnrollments(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Enrollments & Agreements Accounts Affirm Agreements Affirm Agreements1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  const request: components.AffirmAgreementsRequestCreate = {
    accountAgreementIds: enrollment_ids,
  };
  const result = await sdk.enrollmentsAndAgreements.affirmAgreements(
    request,
    account_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Enrollments & Agreements Accounts List Agreements List Agreements1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const result = await sdk.enrollmentsAndAgreements.listAgreements(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Enrollments & Agreements Accounts List Entitlements List Entitlements1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const result =
    await sdk.enrollmentsAndAgreements.listEntitlements(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Enrollments & Agreements Accounts Deactivate Enrollment Deactivate Enrollment1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  let deactivate_enrollment_id = await getEnrollmentToDeactivate(account_id);
  if (typeof deactivate_enrollment_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const request: components.DeactivateEnrollmentRequestCreate = {
    enrollmentId: deactivate_enrollment_id,
  };
  const result = await sdk.enrollmentsAndAgreements.deactivateEnrollment(
    request,
    account_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Enrollments And Agreements Accounts List Available Enrollments By Account Group Accounts List Available Enrollments By Account Group1 accounts_ListAvailableEnrollmentsByAccountGroup", async () => {
  const result =
    await sdk.enrollmentsAndAgreements.accountsListAvailableEnrollmentsByAccountGroup(
      process.env["ACCOUNT_GROUP_ID"] ?? "",
    );
  expect(result.httpMeta.response.status).toBe(200);
});
