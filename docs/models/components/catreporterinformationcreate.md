# CatReporterInformationCreate

A single record representing the originating_fdid and originating_cat_reporter_crd

## Example Usage

```typescript
import { CatReporterInformationCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CatReporterInformationCreate = {
  originatingCatReporterCrd: "12345678",
  originatingFdid: "12345678",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `originatingCatReporterCrd`                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The prior CAT reporter's 7 digit CRD number; Must be provided with an `ORIGINATING_FDID`                          | 12345678                                                                                                          |
| `originatingFdid`                                                                                                 | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The previous FDID associated with the account; Must be unique and provided with an `ORIGINATING_CAT_REPORTER_CRD` | 12345678                                                                                                          |