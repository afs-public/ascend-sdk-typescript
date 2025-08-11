# ForeignIndividualAccountEnrollmentMetadataCreate

## Example Usage

```typescript
import {
  ForeignIndividualAccountEnrollmentMetadataCreate,
  PrimaryAccountActivityType,
  WithdrawalFrequency,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForeignIndividualAccountEnrollmentMetadataCreate = {
  foreignNaturalPersonAccountEnrollmentMetadata: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                | Example                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dividendReinvestmentPlan`                                                                                                                                                                 | [components.ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlan](../../models/components/foreignindividualaccountenrollmentmetadatacreatedividendreinvestmentplan.md) | :heavy_minus_sign:                                                                                                                                                                         | Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL                                                                                                   | DIVIDEND_REINVESTMENT_ENROLL                                                                                                                                                               |
| `fdicCashSweep`                                                                                                                                                                            | [components.ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweep](../../models/components/foreignindividualaccountenrollmentmetadatacreatefdiccashsweep.md)                       | :heavy_minus_sign:                                                                                                                                                                         | Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL                                                                                                               | FDIC_CASH_SWEEP_ENROLL                                                                                                                                                                     |
| `foreignNaturalPersonAccountEnrollmentMetadata`                                                                                                                                            | [components.ForeignNaturalPersonAccountEnrollmentMetadataCreate](../../models/components/foreignnaturalpersonaccountenrollmentmetadatacreate.md)                                           | :heavy_check_mark:                                                                                                                                                                         | Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.                                                                                                           |                                                                                                                                                                                            |