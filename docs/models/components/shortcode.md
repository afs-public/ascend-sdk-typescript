# ShortCode

A short code.

 Reference(s):
 - https://en.wikipedia.org/wiki/Short_code

## Example Usage

```typescript
import { ShortCode } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ShortCode = {};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number`                                                                                                                                                                                          | *string*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | Required. The short code digits, without a leading plus ('+') or country calling code, e.g. "611".                                                                                                |
| `regionCode`                                                                                                                                                                                      | *string*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | Required. The BCP-47 region code of the location where calls to this short code can be made, such as "US" and "BB".<br/><br/> Reference(s):<br/> - http://www.unicode.org/reports/tr35/#unicode_region_subtag |