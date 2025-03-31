# InvestigationExecutionDate

The date identity verification was performed. Must be formatted as an ISO-8601 YYYY-MM-DD

## Example Usage

```typescript
import { InvestigationExecutionDate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestigationExecutionDate = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `day`                                                                                                                                                        | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `month`                                                                                                                                                      | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.                                                                       |
| `year`                                                                                                                                                       | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.                                                                             |