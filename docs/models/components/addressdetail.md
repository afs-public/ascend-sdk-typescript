# AddressDetail

Address detail used for Dow Jones Profile details

## Example Usage

```typescript
import { AddressDetail } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AddressDetail = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `addressCity`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Dow Jones persons address city                                                                     | Dallas                                                                                             |
| `addressLine`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Dow Jones persons address line                                                                     | 350 N. St. Paul St.                                                                                |
| `administrativeArea`                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Dow Jones persons address administrative area                                                      | TX                                                                                                 |
| `postalCode`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Dow Jones persons address postal code                                                              | 75201                                                                                              |
| `regionCode`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA" | US                                                                                                 |