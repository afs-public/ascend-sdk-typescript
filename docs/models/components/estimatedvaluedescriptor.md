# EstimatedValueDescriptor

Indicates whether the valuation represents estimate of investors' interest in the net assets of the program or estimate of the value of the security.

## Example Usage

```typescript
import { EstimatedValueDescriptor } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EstimatedValueDescriptor = EstimatedValueDescriptor.Ia;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                   | Value                                  |
| -------------------------------------- | -------------------------------------- |
| `EstimatedValueDescriptorUnspecified`  | ESTIMATED_VALUE_DESCRIPTOR_UNSPECIFIED |
| `Ia`                                   | IA                                     |
| `Sv`                                   | SV                                     |
| -                                      | `Unrecognized<string>`                 |