# OrderDate

The date on which the order will go to the market.

 When provided, the date must be either today or the next valid trading day (Eastern time):
 - If today is not a valid trading day, specify the next valid market day.
 - If the current time is after market close but before midnight Eastern, specify the next valid market day.
 - Otherwise, specify the current Eastern trading day.

 Required for all orders except event contract orders with a non-DAY time_in_force
 (GTC, GTD, IOC, FOK). When omitted for those orders, defaults to the current Eastern trading day.

## Example Usage

```typescript
import { OrderDate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderDate = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `day`                                                                                                                                                        | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `month`                                                                                                                                                      | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.                                                                       |
| `year`                                                                                                                                                       | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.                                                                             |