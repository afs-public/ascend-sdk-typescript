# TransfersCreditType

The type of the credit being issued

## Example Usage

```typescript
import { TransfersCreditType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TransfersCreditType = TransfersCreditType.Promotional;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Promotional`          | PROMOTIONAL            |
| `WriteOff`             | WRITE_OFF              |
| `Reimbursement`        | REIMBURSEMENT          |
| -                      | `Unrecognized<string>` |