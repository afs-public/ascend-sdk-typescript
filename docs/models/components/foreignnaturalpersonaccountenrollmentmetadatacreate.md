# ForeignNaturalPersonAccountEnrollmentMetadataCreate

Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.

## Example Usage

```typescript
import {
  ForeignNaturalPersonAccountEnrollmentMetadataCreate,
  PrimaryAccountActivityType,
  WithdrawalFrequency,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForeignNaturalPersonAccountEnrollmentMetadataCreate = {
  depositedFunds: {
    initialDepositAmount: {},
    initialDepositSource: "Product Revenue",
  },
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
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `depositedFunds`                                                                                                                                                                     | [components.DepositedFundsCreate](../../models/components/depositedfundscreate.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                   | The initial amount of money placed into the account by the entity upon or after the account's establishment.                                                                         |
| `financialProfile`                                                                                                                                                                   | [components.FinancialProfileCreate](../../models/components/financialprofilecreate.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                   | Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile                        |
| `plannedActivity`                                                                                                                                                                    | [components.PlannedActivityCreate](../../models/components/plannedactivitycreate.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                                   | Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection |
| `relatedPepDetails`                                                                                                                                                                  | [components.RelatedPepDetailsCreate](../../models/components/relatedpepdetailscreate.md)                                                                                             | :heavy_check_mark:                                                                                                                                                                   | Details surrounding the related politically exposed persons                                                                                                                          |