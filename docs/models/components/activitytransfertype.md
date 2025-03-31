# ActivityTransferType

Provides more granular detail on the purpose of transfer

## Example Usage

```typescript
import { ActivityTransferType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityTransferType = ActivityTransferType.Deconversion;
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