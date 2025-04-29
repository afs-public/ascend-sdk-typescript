# LocateIctReportResponse

A response containing recon report descriptors and a file download link for the report.

## Example Usage

```typescript
import { LocateIctReportResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LocateIctReportResponse = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `batchId`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The id of the batch associated with the report.                                                        | 24114.108.2b2c1.001                                                                                    |
| `createTime`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The timestamp when the report was created.                                                             | 2023-09-30 10:30:05 +0000 UTC                                                                          |
| `downloadUri`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The signed file download uri. The link will expire after a set period of time.                         | https://storage.googleapis.com/download_link                                                           |
| `processDate`                                                                                          | [components.ProcessDate](../../models/components/processdate.md)                                       | :heavy_minus_sign:                                                                                     | The process date of the batch associated with the report.                                              | {<br/>"day": 30,<br/>"month": 9,<br/>"year": 2023<br/>}                                                |
| `program`                                                                                              | [components.LocateIctReportResponseProgram](../../models/components/locateictreportresponseprogram.md) | :heavy_minus_sign:                                                                                     | The ICT program associated with the report.                                                            | BROKER_PARTNER                                                                                         |