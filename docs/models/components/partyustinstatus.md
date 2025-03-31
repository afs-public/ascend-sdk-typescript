# PartyUsTinStatus

United States Individual Taxpayer Identification Number (ITIN) status.

## Example Usage

```typescript
import { PartyUsTinStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyUsTinStatus = PartyUsTinStatus.Passing;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `UsTinStatusUnspecified`  | US_TIN_STATUS_UNSPECIFIED |
| `Passing`                 | PASSING                   |
| `Failing`                 | FAILING                   |
| -                         | `Unrecognized<string>`    |