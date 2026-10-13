# BrokerCapacity

Defaults to "AGENCY" for all asset types except Fixed Income. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.  If not specified, defaults to the capacity configured for  the correspondent by Apex. For Event Contracts: Only "AGENCY" is allowed.

## Example Usage

```typescript
import { BrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BrokerCapacity = BrokerCapacity.Agency;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `BrokerCapacityUnspecified` | BROKER_CAPACITY_UNSPECIFIED |
| `Agency`                    | AGENCY                      |
| `Principal`                 | PRINCIPAL                   |
| -                           | `Unrecognized<string>`      |