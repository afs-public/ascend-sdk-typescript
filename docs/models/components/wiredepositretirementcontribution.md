# WireDepositRetirementContribution

The retirement contribution details

## Example Usage

```typescript
import { WireDepositRetirementContribution } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireDepositRetirementContribution = {};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taxYear`                                                                                                                                             | *number*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format. | 2024                                                                                                                                                  |
| `type`                                                                                                                                                | [components.WireDepositType](../../models/components/wiredeposittype.md)                                                                              | :heavy_minus_sign:                                                                                                                                    | The type of retirement contribution.                                                                                                                  | REGULAR                                                                                                                                               |