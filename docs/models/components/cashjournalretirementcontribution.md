# CashJournalRetirementContribution

The retirement contribution details Must be provided when the destination account is a retirement account

## Example Usage

```typescript
import { CashJournalRetirementContribution } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CashJournalRetirementContribution = {};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taxYear`                                                                                                                                             | *number*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format. | 2024                                                                                                                                                  |
| `type`                                                                                                                                                | [components.CashJournalType](../../models/components/cashjournaltype.md)                                                                              | :heavy_minus_sign:                                                                                                                                    | The type of retirement contribution.                                                                                                                  | REGULAR                                                                                                                                               |