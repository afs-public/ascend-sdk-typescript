# AchDepositScheduleTemporalTaxYear

A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.

## Example Usage

```typescript
import { AchDepositScheduleTemporalTaxYear } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AchDepositScheduleTemporalTaxYear =
  AchDepositScheduleTemporalTaxYear.CurrentCalendarYear;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `TemporalTaxYearUnspecified`  | TEMPORAL_TAX_YEAR_UNSPECIFIED |
| `CurrentCalendarYear`         | CURRENT_CALENDAR_YEAR         |
| `MinimumTaxYear`              | MINIMUM_TAX_YEAR              |
| -                             | `Unrecognized<string>`        |