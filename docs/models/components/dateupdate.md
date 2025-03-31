# DateUpdate

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:

 * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date

 Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.

## Example Usage

```typescript
import { DateUpdate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DateUpdate = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `day`                                                                                                                                                        | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `month`                                                                                                                                                      | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.                                                                       |
| `year`                                                                                                                                                       | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.                                                                             |