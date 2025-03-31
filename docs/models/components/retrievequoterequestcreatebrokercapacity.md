# RetrieveQuoteRequestCreateBrokerCapacity

Capacity used in determining bid and ask prices. Defaults to "AGENCY" if no value specified.

## Example Usage

```typescript
import { RetrieveQuoteRequestCreateBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveQuoteRequestCreateBrokerCapacity =
  RetrieveQuoteRequestCreateBrokerCapacity.Agency;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `BrokerCapacityUnspecified` | BROKER_CAPACITY_UNSPECIFIED |
| `Agency`                    | AGENCY                      |
| `Principal`                 | PRINCIPAL                   |
| -                           | `Unrecognized<string>`      |