# OwnershipStructure

Describes the legal entity structure of the alternative investment. Critical for tax treatment, regulatory compliance, and operational procedures.

## Example Usage

```typescript
import { OwnershipStructure } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OwnershipStructure = OwnershipStructure.UsLlc;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `OwnershipStructureUnspecified`   | OWNERSHIP_STRUCTURE_UNSPECIFIED   |
| `LimitedPartnership`              | LIMITED_PARTNERSHIP               |
| `UsLlc`                           | US_LLC                            |
| `UsSCorp`                         | US_S_CORP                         |
| `UsCCorp`                         | US_C_CORP                         |
| `CaymanOrdinaryResident`          | CAYMAN_ORDINARY_RESIDENT          |
| `CaymanExempted`                  | CAYMAN_EXEMPTED                   |
| `CaymanOrdinaryNonresident`       | CAYMAN_ORDINARY_NONRESIDENT       |
| `CaymanLimitedDurationExempted`   | CAYMAN_LIMITED_DURATION_EXEMPTED  |
| `CaymanForeign`                   | CAYMAN_FOREIGN                    |
| `CaymanTrust`                     | CAYMAN_TRUST                      |
| `BviGuaranteeNoShares`            | BVI_GUARANTEE_NO_SHARES           |
| `BviGuaranteeMayIssueShares`      | BVI_GUARANTEE_MAY_ISSUE_SHARES    |
| `BviUnlimitedNoShares`            | BVI_UNLIMITED_NO_SHARES           |
| `BviUnlimitedMayIssueShares`      | BVI_UNLIMITED_MAY_ISSUE_SHARES    |
| `BermudaLimitedByShares`          | BERMUDA_LIMITED_BY_SHARES         |
| `BermudaLimitedByGuarantee`       | BERMUDA_LIMITED_BY_GUARANTEE      |
| `BermudaUnlimitedLiability`       | BERMUDA_UNLIMITED_LIABILITY       |
| `LuxembourgSa`                    | LUXEMBOURG_SA                     |
| `LuxembourgSarl`                  | LUXEMBOURG_SARL                   |
| `LuxembourgSnc`                   | LUXEMBOURG_SNC                    |
| `LuxembourgLimitedPartnership`    | LUXEMBOURG_LIMITED_PARTNERSHIP    |
| `LuxembourgSc`                    | LUXEMBOURG_SC                     |
| `IrishPrivateLimited`             | IRISH_PRIVATE_LIMITED             |
| `IrishPublicLimited`              | IRISH_PUBLIC_LIMITED              |
| `IrishLimitedByGuarantee`         | IRISH_LIMITED_BY_GUARANTEE        |
| `JerseyLlp`                       | JERSEY_LLP                        |
| `JerseyPublic`                    | JERSEY_PUBLIC                     |
| `JerseyPrivate`                   | JERSEY_PRIVATE                    |
| `IsleOfManLlc`                    | ISLE_OF_MAN_LLC                   |
| `IsleOfManTrust`                  | ISLE_OF_MAN_TRUST                 |
| `MauritiusDomestic`               | MAURITIUS_DOMESTIC                |
| `MauritiusCategoryIGbl`           | MAURITIUS_CATEGORY_I_GBL          |
| `MauritiusCategoryIiGbl`          | MAURITIUS_CATEGORY_II_GBL         |
| `MauritiusSocieteCommerciale`     | MAURITIUS_SOCIETE_COMMERCIALE     |
| `MauritiusSocieteEnNom`           | MAURITIUS_SOCIETE_EN_NOM          |
| `MauritiusSocieteCivile`          | MAURITIUS_SOCIETE_CIVILE          |
| `OtherOwnership`                  | OTHER_OWNERSHIP                   |
| `DelawareBusinessTrust`           | DELAWARE_BUSINESS_TRUST           |
| `MassachusettsBusinessTrust`      | MASSACHUSETTS_BUSINESS_TRUST      |
| `MarylandReit`                    | MARYLAND_REIT                     |
| `CaymanExemptLimitedPartnership`  | CAYMAN_EXEMPT_LIMITED_PARTNERSHIP |
| `BviLimitedByShares`              | BVI_LIMITED_BY_SHARES             |
| `DelawareStatutoryTrust`          | DELAWARE_STATUTORY_TRUST          |
| -                                 | `Unrecognized<string>`            |