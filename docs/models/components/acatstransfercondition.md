# AcatsTransferCondition

AcatsTransferCondition is a condition affecting the transfer or account as a whole rather than a single holding. Some are hard blocks (e.g. account status), others are advisories that need review (e.g. margin impact); it does not change the eligible/ineligible split of the holdings.

## Example Usage

```typescript
import { AcatsTransferCondition } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsTransferCondition = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `message`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Human-readable explanation.                                                                        | Estimated margin impact requires manual review.                                                    |
| `reason`                                                                                           | [components.AcatsTransferConditionReason](../../models/components/acatstransferconditionreason.md) | :heavy_minus_sign:                                                                                 | Machine-readable condition.                                                                        | ESTIMATED_MARGIN_CALL_EXCEEDS_THRESHOLD                                                            |