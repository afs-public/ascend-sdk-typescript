# AcatsTransferConditionReason

Machine-readable condition.

## Example Usage

```typescript
import { AcatsTransferConditionReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsTransferConditionReason =
  AcatsTransferConditionReason.EstimatedMarginCallExceedsThreshold;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `ReasonUnspecified`                     | REASON_UNSPECIFIED                      |
| `PortfolioMarginUnsupported`            | PORTFOLIO_MARGIN_UNSUPPORTED            |
| `EstimatedMarginCallExceedsThreshold`   | ESTIMATED_MARGIN_CALL_EXCEEDS_THRESHOLD |
| `AccountTypeMismatch`                   | ACCOUNT_TYPE_MISMATCH                   |
| `AccountTypeNotSupported`               | ACCOUNT_TYPE_NOT_SUPPORTED              |
| -                                       | `Unrecognized<string>`                  |