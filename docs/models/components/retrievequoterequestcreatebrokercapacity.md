# RetrieveQuoteRequestCreateBrokerCapacity

Capacity used in determining bid and ask prices. If not specified, defaults to the capacity configured for the correspondent by Apex.

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