# EntryTransferType

Provides more detail on the type of transfer

## Example Usage

```typescript
import { EntryTransferType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryTransferType = EntryTransferType.Migration;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `TransferTypeUnspecified` | TRANSFER_TYPE_UNSPECIFIED |
| `TransferConversion`      | TRANSFER_CONVERSION       |
| `Deconversion`            | DECONVERSION              |
| `Migration`               | MIGRATION                 |
| `ManualAdjustment`        | MANUAL_ADJUSTMENT         |
| `InternalConversion`      | INTERNAL_CONVERSION       |
| -                         | `Unrecognized<string>`    |