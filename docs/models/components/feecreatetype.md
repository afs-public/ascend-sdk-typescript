# FeeCreateType

The type of fee being specified. Only the type of "BROKER_FEE" is supported.

## Example Usage

```typescript
import { FeeCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FeeCreateType = FeeCreateType.BrokerFee;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `FeeTypeUnspecified`   | FEE_TYPE_UNSPECIFIED   |
| `BrokerFee`            | BROKER_FEE             |
| `ContractFee`          | CONTRACT_FEE           |
| -                      | `Unrecognized<string>` |