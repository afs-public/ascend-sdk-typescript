# EntityDueDiligence

Due Diligence for Legal Entities

## Example Usage

```typescript
import { EntityDueDiligence } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntityDueDiligence = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `entityIssuesBearerShares`                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Indicates whether the entity issues bearer shares                                        | false                                                                                    |
| `negativeNews`                                                                           | [components.LegalEntityNegativeNews](../../models/components/legalentitynegativenews.md) | :heavy_minus_sign:                                                                       | Information about any negative news against related parties and entities                 |                                                                                          |