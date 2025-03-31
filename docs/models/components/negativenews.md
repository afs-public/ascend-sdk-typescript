# NegativeNews

Information about any negative news against the client, or any immediate family members, close associates, or related entities

## Example Usage

```typescript
import { NegativeNews } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: NegativeNews = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `negativeNewsAgainstRelatedParties`                                                                                   | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | Indicates whether there is negative news against related parties                                                      | true                                                                                                                  |
| `negativeNewsAgainstRelatedPartiesDescription`                                                                        | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Description of the negative news against related parties                                                              | Juan was indicated in numerous publications but not involved with Japan's misappropriation of taxpayer funds in 2013. |