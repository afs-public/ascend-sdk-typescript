# CashJournalConstraints

Retirement constraints for cash journal transfers

## Example Usage

```typescript
import { CashJournalConstraints } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CashJournalConstraints = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `contributionConstraints`                                                                                                            | [components.CashJournalConstraintsContributionConstraints](../../models/components/cashjournalconstraintscontributionconstraints.md) | :heavy_minus_sign:                                                                                                                   | Contribution constraints for the destination account                                                                                 |
| `distributionConstraints`                                                                                                            | [components.CashJournalConstraintsDistributionConstraints](../../models/components/cashjournalconstraintsdistributionconstraints.md) | :heavy_minus_sign:                                                                                                                   | Distribution constraints for the source account                                                                                      |