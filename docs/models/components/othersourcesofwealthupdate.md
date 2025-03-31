# OtherSourcesOfWealthUpdate

Applicant's other source of wealth

## Example Usage

```typescript
import { OtherSourcesOfWealthUpdate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OtherSourcesOfWealthUpdate = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `applicantHasOtherSourcesOfWealth`                                                                                             | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Indicates whether the applicant has other sources of wealth.                                                                   | true                                                                                                                           |
| `otherSourcesOfWealth`                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The applicant's other source of wealth description. If the applicant has no other sources of wealth, they must specify "N/A."  | I also have a small business selling handmade jewelry.                                                                         |
| `otherSourcesOfWealthVerification`                                                                                             | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The applicant's other source of wealth verification. If the applicant has no other sources of wealth, they must specify "N/A." | I have a business license and tax returns to verify my business.                                                               |