# RetirementContributionCreate

A contribution to a retirement account.

## Example Usage

```typescript
import { RetirementContributionCreate, RetirementContributionCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetirementContributionCreate = {
  taxYear: 2024,
  type: RetirementContributionCreateType.Regular,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taxYear`                                                                                                                                             | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format. | 2024                                                                                                                                                  |
| `type`                                                                                                                                                | [components.RetirementContributionCreateType](../../models/components/retirementcontributioncreatetype.md)                                            | :heavy_check_mark:                                                                                                                                    | The type of retirement contribution.                                                                                                                  | REGULAR                                                                                                                                               |