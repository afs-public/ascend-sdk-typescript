# CatReporterInformation

The CAT reporter information for the account

## Example Usage

```typescript
import { CatReporterInformation } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CatReporterInformation = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `originatingCatReporterCrd`                                                                                       | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The prior CAT reporter's 7 digit CRD number; Must be provided with an `ORIGINATING_FDID`                          | 12345678                                                                                                          |
| `originatingFdid`                                                                                                 | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The previous FDID associated with the account; Must be unique and provided with an `ORIGINATING_CAT_REPORTER_CRD` | 12345678                                                                                                          |