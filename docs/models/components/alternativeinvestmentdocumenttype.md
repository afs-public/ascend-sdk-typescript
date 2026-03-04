# AlternativeInvestmentDocumentType

The investment document’s type.

## Example Usage

```typescript
import { AlternativeInvestmentDocumentType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeInvestmentDocumentType =
  AlternativeInvestmentDocumentType.OfferingDocument;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `TypeUnspecified`       | TYPE_UNSPECIFIED        |
| `OfferingDocument`      | OFFERING_DOCUMENT       |
| `SubscriptionAgreement` | SUBSCRIPTION_AGREEMENT  |
| `K1`                    | K1                      |
| `RiskFactors`           | RISK_FACTORS            |
| `KeyTerms`              | KEY_TERMS               |
| -                       | `Unrecognized<string>`  |