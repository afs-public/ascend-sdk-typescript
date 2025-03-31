# DistributionConstraints

Retirement distribution constraints when withdrawing money from an Apex account

## Example Usage

```typescript
import { DistributionConstraints } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DistributionConstraints = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `fullDistributionAllowed`                                                                                                          | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether a full distribution withdrawal is allowed                                                                                  | true                                                                                                                               |
| `validTypes`                                                                                                                       | [components.DistributionConstraintsDistributionTypeInfo](../../models/components/distributionconstraintsdistributiontypeinfo.md)[] | :heavy_minus_sign:                                                                                                                 | Valid distribution types                                                                                                           |                                                                                                                                    |