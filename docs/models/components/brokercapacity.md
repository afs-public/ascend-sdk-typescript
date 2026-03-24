# BrokerCapacity

Defaults to "AGENCY" if not specified, except for Fixed Income orders from RIA correspondents which default to "PRINCIPAL" when not specified. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.  - RIA correspondents: Defaults to "PRINCIPAL" if not specified.  - Other correspondents: Defaults to "AGENCY" if not specified. For Event Contracts: Only "AGENCY" is allowed.

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