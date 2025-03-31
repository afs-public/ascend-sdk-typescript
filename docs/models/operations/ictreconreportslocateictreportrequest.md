# IctReconReportsLocateIctReportRequest

## Example Usage

```typescript
import { IctReconReportsLocateIctReportRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IctReconReportsLocateIctReportRequest = {
  correspondentId: "01H8MCDXH4HYJJAV921BDKCC83",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                          | *string*                                                                                   | :heavy_check_mark:                                                                         | The correspondent id.                                                                      | 01H8MCDXH4HYJJAV921BDKCC83                                                                 |
| `batchId`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | The id of the ICT batch for which to locate the report.                                    | 24114.108.2b2c1.001                                                                        |
| `programDateFilterProgram`                                                                 | [operations.ProgramDateFilterProgram](../../models/operations/programdatefilterprogram.md) | :heavy_minus_sign:                                                                         | The ICT program for which to locate the report.                                            | BROKER_PARTNER                                                                             |
| `programDateFilterProcessDate`                                                             | [components.DateCreate](../../models/components/datecreate.md)                             | :heavy_minus_sign:                                                                         | The process date for which to locate the report.                                           | {<br/>"process_date": {<br/>"day": 30,<br/>"month": 9,<br/>"year": 2023<br/>}<br/>}        |