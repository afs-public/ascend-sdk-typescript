# IDDocumentUploadRequestCreateDocumentType

Describes the contents of a document and how it is used; Required for all identity documents

## Example Usage

```typescript
import { IDDocumentUploadRequestCreateDocumentType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IDDocumentUploadRequestCreateDocumentType =
  IDDocumentUploadRequestCreateDocumentType.Passport;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                 | Value                                |
| ------------------------------------ | ------------------------------------ |
| `IdDocumentTypeUnspecified`          | ID_DOCUMENT_TYPE_UNSPECIFIED         |
| `BirthCertificate`                   | BIRTH_CERTIFICATE                    |
| `CustomerIdentificationProcess`      | CUSTOMER_IDENTIFICATION_PROCESS      |
| `DeathCertificate`                   | DEATH_CERTIFICATE                    |
| `DrivingLicense`                     | DRIVING_LICENSE                      |
| `EmployerConsentForm407Letter`       | EMPLOYER_CONSENT_FORM_407_LETTER     |
| `MarriageCertificate`                | MARRIAGE_CERTIFICATE                 |
| `Passport`                           | PASSPORT                             |
| `ProofOfTaxId`                       | PROOF_OF_TAX_ID                      |
| `SocialSecurityDocument`             | SOCIAL_SECURITY_DOCUMENT             |
| `ThirdPartyCipResults`               | THIRD_PARTY_CIP_RESULTS              |
| `StateIdCard`                        | STATE_ID_CARD                        |
| `NationalIdCard`                     | NATIONAL_ID_CARD                     |
| `PermanentResidentVisa`              | PERMANENT_RESIDENT_VISA              |
| `IrisItinLetter`                     | IRIS_ITIN_LETTER                     |
| `UtilityBill`                        | UTILITY_BILL                         |
| `MilitaryIdCard`                     | MILITARY_ID_CARD                     |
| `MortgageStatement`                  | MORTGAGE_STATEMENT                   |
| `LeaseAgreement`                     | LEASE_AGREEMENT                      |
| `ExecutorCertification`              | EXECUTOR_CERTIFICATION               |
| `TrusteeCertification`               | TRUSTEE_CERTIFICATION                |
| `Selfie`                             | SELFIE                               |
| `ArticlesOfOrganisation`             | ARTICLES_OF_ORGANISATION             |
| `CertOfSoleOfficer`                  | CERT_OF_SOLE_OFFICER                 |
| `CertificationCorrespondentAccounts` | CERTIFICATION_CORRESPONDENT_ACCOUNTS |
| `CertificationForeignBanks`          | CERTIFICATION_FOREIGN_BANKS          |
| `CharterArticlesOfIncorporation`     | CHARTER_ARTICLES_OF_INCORPORATION    |
| `DivorceDecree`                      | DIVORCE_DECREE                       |
| `ProofOfResidence`                   | PROOF_OF_RESIDENCE                   |
| `BoReportingExemptionProof`          | BO_REPORTING_EXEMPTION_PROOF         |
| `OperatingAgreement`                 | OPERATING_AGREEMENT                  |
| `RegisterOfMembers`                  | REGISTER_OF_MEMBERS                  |
| `BoardResolution`                    | BOARD_RESOLUTION                     |
| `TrustDeedsAgreement`                | TRUST_DEEDS_AGREEMENT                |
| `CorporateBylaws`                    | CORPORATE_BYLAWS                     |
| `ShareholderAgreement`               | SHAREHOLDER_AGREEMENT                |
| `CorporateRecords`                   | CORPORATE_RECORDS                    |
| -                                    | `Unrecognized<string>`               |