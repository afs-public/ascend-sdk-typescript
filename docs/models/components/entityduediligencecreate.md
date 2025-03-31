# EntityDueDiligenceCreate

Due Diligence for Legal Entities required when a Legal Entity is the Primary Owner on an Account.

## Example Usage

```typescript
import { EntityDueDiligenceCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntityDueDiligenceCreate = {
  entityIssuesBearerShares: false,
  negativeNews: {
    negativeNewsAgainstRelatedParties: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `entityIssuesBearerShares`                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | Indicates whether the entity issues bearer shares                              | false                                                                          |
| `negativeNews`                                                                 | [components.NegativeNewsCreate](../../models/components/negativenewscreate.md) | :heavy_check_mark:                                                             | Negative News detail.                                                          |                                                                                |