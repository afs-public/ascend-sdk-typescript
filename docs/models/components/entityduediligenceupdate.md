# EntityDueDiligenceUpdate

Due Diligence for Legal Entities required when a Legal Entity is the Primary Owner on an Account.

## Example Usage

```typescript
import { EntityDueDiligenceUpdate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntityDueDiligenceUpdate = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `entityIssuesBearerShares`                                                     | *boolean*                                                                      | :heavy_minus_sign:                                                             | Indicates whether the entity issues bearer shares                              | false                                                                          |
| `negativeNews`                                                                 | [components.NegativeNewsUpdate](../../models/components/negativenewsupdate.md) | :heavy_minus_sign:                                                             | Negative News detail.                                                          |                                                                                |