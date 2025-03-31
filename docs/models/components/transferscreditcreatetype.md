# TransfersCreditCreateType

The type of the credit being issued

## Example Usage

```typescript
import { TransfersCreditCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TransfersCreditCreateType = TransfersCreditCreateType.Promotional;
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