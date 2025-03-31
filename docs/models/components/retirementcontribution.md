# RetirementContribution

The retirement contribution details.

## Example Usage

```typescript
import { RetirementContribution } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetirementContribution = {};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taxYear`                                                                                                                                             | *number*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format. | 2024                                                                                                                                                  |
| `type`                                                                                                                                                | [components.AchDepositType](../../models/components/achdeposittype.md)                                                                                | :heavy_minus_sign:                                                                                                                                    | The type of retirement contribution.                                                                                                                  | REGULAR                                                                                                                                               |