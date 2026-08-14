import { expect, test } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";

/**
 * Verifies SDK handling of nullable protobuf wrapper fields.
 *
 * For a W-9, the API leaves `tax_profile.treaty_benefits_requested` unset. It is
 * a `google.protobuf.BoolValue`, so an unset value is serialized as JSON `null`
 * (EmitUnpopulated marshaling). protoc-gen-openapi now emits `nullable: true`
 * for wrapper types, so the generated response schema is
 * `z.nullable(z.boolean()).optional()`, which accepts `null`. The SDK therefore
 * returns the created person instead of throwing a ResponseValidationError.
 *
 * This test asserts the created person is returned and that the null wrapper
 * field round-trips as `null`.
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
  const response =
    await sdk.personManagement.createLegalNaturalPerson(request);

  // The SDK now accepts the null wrapper and returns the created person.
  expect(response.legalNaturalPerson).toBeDefined();

  // The unset BoolValue wrapper round-trips as null (not a validation error).
  expect(response.legalNaturalPerson?.taxProfile?.treatyBenefitsRequested).toBeNull();
}, 60000);
