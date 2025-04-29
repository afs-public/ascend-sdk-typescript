import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";

const large_trader_id = "123456789100";
export async function createLegalNaturalPerson(): Promise<string | undefined> {
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
  const result = await sdk.personManagement.createLegalNaturalPerson(request);
  if (result?.legalNaturalPerson?.legalNaturalPersonId) {
    return result.legalNaturalPerson.legalNaturalPersonId;
  }
  return undefined;
}

export async function assignLargeTrader(
  lnp_id: string,
): Promise<string | undefined> {
  const request = {
    largeTraderId: large_trader_id,
  };
  const result = await sdk.personManagement.assignLargeTrader(request, lnp_id);
  if (result?.largeTrader?.largeTraderId) {
    return result.largeTrader.largeTraderId;
  }
  return undefined;
}

export async function createLegalEntity(): Promise<string | undefined> {
  const request: components.LegalEntityCreate = {
    accreditedInvestor: false,
    adviser: false,
    brokerDealer: false,
    correspondentId: process.env["CORRESPONDENT_ID"] ?? "",
    entityName: "AcmeInc",
    entityType: components.EntityType.Estate,
    exemptVerifyingBeneficialOwners: false,
    foreignFinancialInstitution: false,
    legalAddress: {
      locality: "Portland",
      regionCode: "US",
      postalCode: "97035",
      administrativeArea: "OR",
      addressLines: ["19409 Sherilyn Courts"],
    },
    leiCode: "12340012345678911000",
    operatingRegions: ["US"],
    registrationRegion: "US",
    taxId: "874-45-6789",
    taxIdType: components.LegalEntityCreateTaxIdType.TaxIdTypeSsn,
    taxProfile: {
      federalTaxClassification: components.FederalTaxClassification.TrustEstate,
      usTinStatus: components.UsTinStatus.Passing,
      irsFormType: components.IrsFormType.W9,
      legalTaxRegionCode: "US",
    },
  };
  const result = await sdk.personManagement.createLegalEntity(request);
  if (result?.legalEntity?.legalEntityId) {
    return result.legalEntity.legalEntityId;
  }
  return undefined;
}

export async function createAccount(
  lnp_id: string,
): Promise<string | undefined> {
  const request: components.AccountRequestCreate = {
    accountGroupId: process.env["ACCOUNT_GROUP_ID"] ?? "",
    correspondentId: process.env["CORRESPONDENT_ID"] ?? "",
    parties: [
      {
        legalNaturalPersonId: lnp_id,
        relationType: components.RelationType.PrimaryOwner,
        emailAddress: "mail@example.com",
        phoneNumber: {
          e164Number: "+14155552671",
          extension: "123",
        },
        mailingAddress: {
          addressLines: ["1 Main Street"],
          regionCode: "US",
          postalCode: "12345",
          administrativeArea: "NY",
          locality: "New York",
        },
      },
    ],
  };
  const result = await sdk.accountCreation.createAccount(request);
  if (result?.account?.accountId) {
    return result.account.accountId;
  }
  return undefined;
}

export async function addParty(
  account_id: string,
  legalEntityId: string,
): Promise<string | undefined> {
  const request: components.AddPartyRequestCreate = {
    authorizedByPartyIds: [
      "8096110d-fb55-4f9d-b883-b84f0b70d3ea",
      "8096110d-fb55-4f9d-b883-b84f0b70d3rb",
    ],
    parent: "accounts/" + account_id,
    party: {
      emailAddress: "example@domain.com",
      mailingAddress: {
        addressLines: ["123 Main Street"],
        regionCode: "US",
        postalCode: "12345",
        administrativeArea: "CA",
        locality: "San Francisco",
      },
      phoneNumber: {
        e164Number: "+14155552671",
      },
      legalEntityId: legalEntityId,
      relationType: components.RelationType.PrimaryOwner,
    },
  };
  const result = await sdk.accountManagement.addParty(request, account_id);
  if (result?.party?.partyId) {
    return result.party.partyId;
  }
  return undefined;
}

export async function replaceParty(
  account_id: string,
  lnp_id: string,
  party_id: string,
): Promise<string | undefined> {
  const request: components.ReplacePartyRequestCreate = {
    authorizedByPartyIds: [
      "8096110d-fb55-4f9d-b883-b84f0b70d3ea",
      "8096110d-fb55-4f9d-b883-b84f0b70d3rb",
    ],
    name: "accounts/" + account_id + "/parties/" + party_id,
    party: {
      emailAddress: "example@domain.com",
      mailingAddress: {
        addressLines: ["123 Main Street"],
        regionCode: "US",
        postalCode: "12345",
        administrativeArea: "CA",
        locality: "San Francisco",
      },
      phoneNumber: {
        e164Number: "+14155552671",
      },
      legalNaturalPersonId: lnp_id,
      relationType: components.RelationType.PrimaryOwner,
    },
  };
  const result = await sdk.accountManagement.replaceParty(
    request,
    account_id,
    party_id,
  );
  if (result?.party?.partyId) {
    return result.party.partyId;
  }
  return undefined;
}

export async function createTrustedContact(
  account_id: string,
): Promise<string | undefined> {
  const request: components.TrustedContactCreate = {
    emailAddress: "example@email.com",
    familyName: "Doe",
    givenName: "John",
    middleNames: "Larry",
    phoneNumber: {
      e164Number: "+14155552671",
    },
  };
  const result = await sdk.accountManagement.createTrustedContact(
    request,
    account_id,
  );
  if (result?.trustedContact?.trustedContactId) {
    return result.trustedContact.trustedContactId;
  }
  return undefined;
}

export async function createInterestedParty(
  account_id: string,
): Promise<string | undefined> {
  const request: components.InterestedPartyCreate = {
    mailingAddress: {
      addressLines: ["123 Main Street"],
      regionCode: "US",
      postalCode: "12345",
      administrativeArea: "CA",
      locality: "San Francisco",
    },
    recipient: "John Dough",
  };
  const result = await sdk.accountManagement.createInterestedParty(
    request,
    account_id,
  );
  if (result?.interestedParty?.interestedPartyId) {
    return result.interestedParty.interestedPartyId;
  }
  return undefined;
}

export async function createRestrictionCode(
  account_id: string,
): Promise<string | undefined> {
  const request: components.RestrictionCreate = {
    createReason: "Some reason for creating",
    endedReason: "Some reason for removing",
    restrictionCode: "TRADING_LIQUIDATION_ONLY_BY_CORRESPONDENT",
  };
  const result = await sdk.accountManagement.createRestriction(
    request,
    account_id,
  );
  if (result?.restriction?.restrictionCode) {
    return result.restriction.restrictionCode;
  }
  return undefined;
}

export async function enrollAccount(
  account_id: string,
): Promise<string[] | undefined> {
  const request: components.EnrollAccountRequestCreate = {
    enrollment: {
      principalApproverId: "01HMESE8WMDNTTWJ2BAEG3TZWA",
      type: components.EnrollmentCreateType.RegistrationIndividual,
      individualEnrollmentMetadata: {
        fdicCashSweep:
          components.IndividualEnrollmentMetadataCreateFdicCashSweep
            .FdicCashSweepDecline,
      },
    },
  };
  const result = await sdk.enrollmentsAndAgreements.enrollAccount(
    request,
    account_id,
  );
  if (
    result?.enrollAccountResponse?.agreements?.[0]?.agreementId &&
    result?.enrollAccountResponse?.agreements?.[1]?.agreementId
  ) {
    return [
      result.enrollAccountResponse.agreements[0].agreementId,
      result.enrollAccountResponse.agreements[1].agreementId,
    ];
  }
  return undefined;
}

export async function getEnrollmentToDeactivate(
  account_id: string,
): Promise<string | undefined> {
  const result = await sdk.enrollmentsAndAgreements.listEnrollments(account_id);
  const enrollments = result.listEnrollmentsResponse?.enrollments;
  if (enrollments) {
    for (const enrollment of enrollments) {
      if (enrollment.type === "DIVIDEND_REINVESTMENT_PLAN") {
        return enrollment.enrollmentId;
      }
    }
  }
  return undefined;
}

export async function affirmAgreement(
  account_id: string,
  enrollment_ids: string[],
) {
  const request: components.AffirmAgreementsRequestCreate = {
    accountAgreementIds: enrollment_ids,
  };
  await sdk.enrollmentsAndAgreements.affirmAgreements(request, account_id);
}
