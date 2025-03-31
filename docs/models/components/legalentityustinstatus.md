# LegalEntityUsTinStatus

United States Individual Taxpayer Identification Number (ITIN) status.

## Example Usage

```typescript
import { LegalEntityUsTinStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalEntityUsTinStatus = LegalEntityUsTinStatus.Passing;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `UsTinStatusUnspecified`  | US_TIN_STATUS_UNSPECIFIED |
| `Passing`                 | PASSING                   |
| `Failing`                 | FAILING                   |
| -                         | `Unrecognized<string>`    |