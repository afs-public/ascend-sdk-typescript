# EnrollmentWithholdingType

A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale

## Example Usage

```typescript
import { EnrollmentWithholdingType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentWithholdingType = EnrollmentWithholdingType.Backup;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `WithholdingTypeUnspecified`  | WITHHOLDING_TYPE_UNSPECIFIED  |
| `Backup`                      | BACKUP                        |
| `BackupProceeds`              | BACKUP_PROCEEDS               |
| `BackupDividendsAndInterest`  | BACKUP_DIVIDENDS_AND_INTEREST |
| `Ira`                         | IRA                           |
| -                             | `Unrecognized<string>`        |