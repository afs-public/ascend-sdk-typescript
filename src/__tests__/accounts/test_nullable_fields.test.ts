import { expect, test } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import { ResponseValidationError } from "@apexfintechsolutions/ascend-sdk/models/errors";

/**
 * Documents (buggy) SDK behavior for nullable protobuf wrapper fields.
 *
 * For a W-9, the API leaves `tax_profile.treaty_benefits_requested` unset. It is
 * a `google.protobuf.BoolValue`, so an unset value is serialized as JSON `null`
 * (EmitUnpopulated marshaling). However, protoc-gen-openapi's NewBooleanSchema()
 * drops `nullable: true`, so the generated response schema is
 * `z.boolean().optional()` — which rejects `null`. The SDK therefore throws a
 * ResponseValidationError instead of returning the created person.
 *
 * This test asserts that failure so the behavior is pinned. Once the plugin is
 * fixed to emit `nullable: true` for wrapper types (schema becomes
 * `z.nullable(z.boolean()).optional()`) and the SDK is regenerated, this test
 * will start failing — that is the signal to update it to assert a 200 response.
 */
test("test CreateLNP validator W9", async () => {
  const request: components.LegalNaturalPersonCreate = {
    birthDate: {
      year: 1981,
      month: 3,
      day: 13,
    },
    citizenshipCountries: ["US"],
    correspondentId: process.env["CORRESPONDENT_ID"] ?? "",
    familyName: "Jacob",
    givenName: "Bob",
    personalAddress: {
      locality: "Portland",
      regionCode: "US",
      postalCode: "97035",
      administrativeArea: "OR",
      addressLines: ["19409 Sherilyn Courts"],
    },
    politicallyExposedImmediateFamilyNames: [],
    taxId: "874-45-6789",
    taxIdType: components.TaxIdType.TaxIdTypeSsn,
    taxProfile: {
      federalTaxClassification:
        components.FederalTaxClassification.IndivSolepropOrSinglememberllc,
      usTinStatus: components.UsTinStatus.Passing,
      irsFormType: components.IrsFormType.W9,
      legalTaxRegionCode: "US",
    },
    employment: {
      occupation: "fisherman",
      employmentStatus: components.EmploymentStatus.Employed,
      employerAddress: {
        administrativeArea: "OR",
        regionCode: "US",
        postalCode: "97209",
        locality: "Portland",
        addressLines: ["123 Street"],
      },
    },
    identityVerificationResult: {
      addressVerified: true,
      birthDateVerified: true,
      executionDate: {
        year: 2021,
        month: 3,
        day: 13,
      },
      nameVerified: true,
      taxIdVerified: true,
      externalCaseId: "6526280",
      vendor: "Super Security Service",
      rawVendorDataDocumentId: "04eb923b-793d-481d-98c4-bb16f17378ea",
    },
  };
  let caught: unknown;
  try {
    await sdk.personManagement.createLegalNaturalPerson(request);
  } catch (e) {
    caught = e;
  }

  // Current behavior: the SDK rejects the response instead of returning it.
  expect(caught).toBeInstanceOf(ResponseValidationError);
  const err = caught as ResponseValidationError;

  // The server did return the person; the null wrapper is what tripped validation.
  const raw = err.rawValue as {
    LegalNaturalPerson?: { tax_profile?: { treaty_benefits_requested?: unknown } };
  };
  expect(raw?.LegalNaturalPerson?.tax_profile?.treaty_benefits_requested).toBeNull();

  // Pin the exact Zod failure: a null value where a boolean was expected.
  const issues = (err.cause as { issues?: unknown[] })?.issues ?? [];
  expect(issues).toContainEqual(
    expect.objectContaining({
      code: "invalid_type",
      expected: "boolean",
      received: "null",
      path: ["LegalNaturalPerson", "tax_profile", "treaty_benefits_requested"],
    }),
  );
}, 60000);
