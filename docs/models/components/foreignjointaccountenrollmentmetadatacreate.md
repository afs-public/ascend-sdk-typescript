# ForeignJointAccountEnrollmentMetadataCreate

Enrollment metadata for the FOREIGN_JOINT_WROS enrollment type

## Example Usage

```typescript
import {
  ForeignJointAccountEnrollmentMetadataCreate,
  PrimaryAccountActivityType,
  WithdrawalFrequency,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForeignJointAccountEnrollmentMetadataCreate = {
  foreignNaturalPersonAccountEnrollmentMetadata: {
    depositedFunds: {
      initialDepositAmount: {},
      initialDepositSource: "Product Revenue",
    },
    financialProfile: {
      bankingRelationships: [
        "<value>",
      ],
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

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      | Example                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dividendReinvestmentPlan`                                                                                                                                                       | [components.ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlan](../../models/components/foreignjointaccountenrollmentmetadatacreatedividendreinvestmentplan.md) | :heavy_minus_sign:                                                                                                                                                               | Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL                                                                                         | DIVIDEND_REINVESTMENT_ENROLL                                                                                                                                                     |
| `fdicCashSweep`                                                                                                                                                                  | [components.ForeignJointAccountEnrollmentMetadataCreateFdicCashSweep](../../models/components/foreignjointaccountenrollmentmetadatacreatefdiccashsweep.md)                       | :heavy_minus_sign:                                                                                                                                                               | Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL                                                                                                     | FDIC_CASH_SWEEP_ENROLL                                                                                                                                                           |
| `foreignNaturalPersonAccountEnrollmentMetadata`                                                                                                                                  | [components.ForeignNaturalPersonAccountEnrollmentMetadataCreate](../../models/components/foreignnaturalpersonaccountenrollmentmetadatacreate.md)                                 | :heavy_check_mark:                                                                                                                                                               | Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.                                                                                                 |                                                                                                                                                                                  |