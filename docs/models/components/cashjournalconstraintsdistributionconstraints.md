# CashJournalConstraintsDistributionConstraints

Distribution constraints for the source account

## Example Usage

```typescript
import { CashJournalConstraintsDistributionConstraints } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CashJournalConstraintsDistributionConstraints = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `fullDistributionAllowed`                                                                                                          | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether a full distribution withdrawal is allowed                                                                                  | true                                                                                                                               |
| `validTypes`                                                                                                                       | [components.DistributionConstraintsDistributionTypeInfo](../../models/components/distributionconstraintsdistributiontypeinfo.md)[] | :heavy_minus_sign:                                                                                                                 | Valid distribution types                                                                                                           |                                                                                                                                    |