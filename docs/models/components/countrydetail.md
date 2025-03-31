# CountryDetail

Country detail used for Dow Jones Profile details

## Example Usage

```typescript
import { CountryDetail } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CountryDetail = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `countryType`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Dow Jones persons country type                                                                     | Resident of                                                                                        |
| `regionCode`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA" | US                                                                                                 |