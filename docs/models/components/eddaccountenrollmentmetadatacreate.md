# EddAccountEnrollmentMetadataCreate

Enrollment metadata for Entity Accounts

## Example Usage

```typescript
import {
  DeterminedAccountRiskRating,
  EddAccountEnrollmentMetadataCreate,
  PrimaryAccountActivityType,
  WithdrawalFrequency,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EddAccountEnrollmentMetadataCreate = {
  depositedFunds: {
    initialDepositAmount: {},
    initialDepositSource: "Product Revenue",
  },
  determinedAccountRiskRating: DeterminedAccountRiskRating.High,
  financialProfile: {
    bankingRelationships: [],
    otherAccounts: {
      ownerHasOtherAccountsAtApex: true,
    },
  },
  plannedActivity: {
    foreignBondTradingDetails: {
      foreignBondTrading: true,
    },
    lowPricedSecurities: {
      lowPricedSecurities: true,
    },
    primaryAccountActivityType: PrimaryAccountActivityType.ActiveTrading,
    withdrawalFrequency: WithdrawalFrequency.Frequent,
  },
  relatedPepDetails: {
    directOrIndirectRelatedPeps: true,
  },
  scopeOfBusiness: "Financial Services",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          | Example                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `depositedFunds`                                                                                                                                                                     | [components.DepositedFundsCreate](../../models/components/depositedfundscreate.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                   | The initial amount of money placed into the account by the entity upon or after the account's establishment.                                                                         |                                                                                                                                                                                      |
| `determinedAccountRiskRating`                                                                                                                                                        | [components.DeterminedAccountRiskRating](../../models/components/determinedaccountriskrating.md)                                                                                     | :heavy_check_mark:                                                                                                                                                                   | The client determined account risk rating of the entity customer                                                                                                                     | HIGH                                                                                                                                                                                 |
| `financialProfile`                                                                                                                                                                   | [components.FinancialProfileCreate](../../models/components/financialprofilecreate.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                   | Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile                        |                                                                                                                                                                                      |
| `plannedActivity`                                                                                                                                                                    | [components.PlannedActivityCreate](../../models/components/plannedactivitycreate.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                                   | Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection |                                                                                                                                                                                      |
| `relatedPepDetails`                                                                                                                                                                  | [components.RelatedPepDetailsCreate](../../models/components/relatedpepdetailscreate.md)                                                                                             | :heavy_check_mark:                                                                                                                                                                   | Details surrounding the related politically exposed persons                                                                                                                          |                                                                                                                                                                                      |
| `scopeOfBusiness`                                                                                                                                                                    | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The scope of the business for the entity customer                                                                                                                                    | Financial Services                                                                                                                                                                   |