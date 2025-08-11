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
exports.createLegalNaturalPerson = createLegalNaturalPerson;
exports.assignLargeTrader = assignLargeTrader;
exports.createLegalEntity = createLegalEntity;
exports.createAccount = createAccount;
exports.addParty = addParty;
exports.replaceParty = replaceParty;
exports.createTrustedContact = createTrustedContact;
exports.createInterestedParty = createInterestedParty;
exports.createRestrictionCode = createRestrictionCode;
exports.enrollAccount = enrollAccount;
exports.getEnrollmentToDeactivate = getEnrollmentToDeactivate;
exports.affirmAgreement = affirmAgreement;
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const large_trader_id = "123456789100";
async function createLegalNaturalPerson() {
    const request = {
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
            federalTaxClassification: components.FederalTaxClassification.IndivSolepropOrSinglememberllc,
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
    const result = await sdk_1.sdk.personManagement.createLegalNaturalPerson(request);
    if (result?.legalNaturalPerson?.legalNaturalPersonId) {
        return result.legalNaturalPerson.legalNaturalPersonId;
    }
    return undefined;
}
async function assignLargeTrader(lnp_id) {
    const request = {
        largeTraderId: large_trader_id,
    };
    const result = await sdk_1.sdk.personManagement.assignLargeTrader(request, lnp_id);
    if (result?.largeTrader?.largeTraderId) {
        return result.largeTrader.largeTraderId;
    }
    return undefined;
}
async function createLegalEntity() {
    const request = {
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
    const result = await sdk_1.sdk.personManagement.createLegalEntity(request);
    if (result?.legalEntity?.legalEntityId) {
        return result.legalEntity.legalEntityId;
    }
    return undefined;
}
async function createAccount(lnp_id) {
    const request = {
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
    const result = await sdk_1.sdk.accountCreation.createAccount(request);
    if (result?.account?.accountId) {
        return result.account.accountId;
    }
    return undefined;
}
async function addParty(account_id, legalEntityId) {
    const request = {
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
    const result = await sdk_1.sdk.accountManagement.addParty(request, account_id);
    if (result?.party?.partyId) {
        return result.party.partyId;
    }
    return undefined;
}
async function replaceParty(account_id, lnp_id, party_id) {
    const request = {
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
    const result = await sdk_1.sdk.accountManagement.replaceParty(request, account_id, party_id);
    if (result?.party?.partyId) {
        return result.party.partyId;
    }
    return undefined;
}
async function createTrustedContact(account_id) {
    const request = {
        emailAddress: "example@email.com",
        familyName: "Doe",
        givenName: "John",
        middleNames: "Larry",
        phoneNumber: {
            e164Number: "+14155552671",
        },
    };
    const result = await sdk_1.sdk.accountManagement.createTrustedContact(request, account_id);
    if (result?.trustedContact?.trustedContactId) {
        return result.trustedContact.trustedContactId;
    }
    return undefined;
}
async function createInterestedParty(account_id) {
    const request = {
        mailingAddress: {
            addressLines: ["123 Main Street"],
            regionCode: "US",
            postalCode: "12345",
            administrativeArea: "CA",
            locality: "San Francisco",
        },
        recipient: "John Dough",
    };
    const result = await sdk_1.sdk.accountManagement.createInterestedParty(request, account_id);
    if (result?.interestedParty?.interestedPartyId) {
        return result.interestedParty.interestedPartyId;
    }
    return undefined;
}
async function createRestrictionCode(account_id) {
    const request = {
        createReason: "Some reason for creating",
        endedReason: "Some reason for removing",
        restrictionCode: "TRADING_LIQUIDATION_ONLY_BY_CORRESPONDENT",
    };
    const result = await sdk_1.sdk.accountManagement.createRestriction(request, account_id);
    if (result?.restriction?.restrictionCode) {
        return result.restriction.restrictionCode;
    }
    return undefined;
}
async function enrollAccount(account_id) {
    const request = {
        enrollment: {
            principalApproverId: "01HMESE8WMDNTTWJ2BAEG3TZWA",
            type: components.EnrollmentCreateType.RegistrationIndividual,
            individualEnrollmentMetadata: {
                fdicCashSweep: components.IndividualEnrollmentMetadataCreateFdicCashSweep
                    .FdicCashSweepDecline,
            },
        },
    };
    const result = await sdk_1.sdk.enrollmentsAndAgreements.enrollAccount(request, account_id);
    if (result?.enrollAccountResponse?.agreements?.[0]?.agreementId &&
        result?.enrollAccountResponse?.agreements?.[1]?.agreementId) {
        return [
            result.enrollAccountResponse.agreements[0].agreementId,
            result.enrollAccountResponse.agreements[1].agreementId,
        ];
    }
    return undefined;
}
async function getEnrollmentToDeactivate(account_id) {
    const result = await sdk_1.sdk.enrollmentsAndAgreements.listEnrollments(account_id);
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
async function affirmAgreement(account_id, enrollment_ids) {
    const request = {
        accountAgreementIds: enrollment_ids,
    };
    await sdk_1.sdk.enrollmentsAndAgreements.affirmAgreements(request, account_id);
}
//# sourceMappingURL=index.js.map