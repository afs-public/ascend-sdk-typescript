# IdentityReportedDeceased

Whether or not the identity has been reported as deceased This is determined by parsing the vendor response for deceased indicators from the SSA Death Master File Equifax-specific indicators: reason codes "90" (SSN Death Indicator) or "SQ" (SSN reported as deceased) null/unset = not checked or unable to determine, false = checked and not deceased, true = deceased

## Example Usage

```typescript
import { IdentityReportedDeceased } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentityReportedDeceased = IdentityReportedDeceased.NotDeceased;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `DeceasedUnspecified`  | DECEASED_UNSPECIFIED   |
| `Deceased`             | DECEASED               |
| `NotDeceased`          | NOT_DECEASED           |
| `Unknown`              | UNKNOWN                |
| -                      | `Unrecognized<string>` |