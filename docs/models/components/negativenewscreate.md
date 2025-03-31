# NegativeNewsCreate

Negative News detail.

## Example Usage

```typescript
import { NegativeNewsCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: NegativeNewsCreate = {
  negativeNewsAgainstRelatedParties: true,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `negativeNewsAgainstRelatedParties`                                                                                   | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Indicates whether there is negative news against related parties                                                      | true                                                                                                                  |
| `negativeNewsAgainstRelatedPartiesDescription`                                                                        | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Description of the negative news against related parties                                                              | Juan was indicated in numerous publications but not involved with Japan's misappropriation of taxpayer funds in 2013. |