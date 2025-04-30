# SettlementMethod

Specifies how an option is settled at expiration, either Physical (delivery of the underlying asset) or Cash (payment of the cash difference).

## Example Usage

```typescript
import { SettlementMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SettlementMethod = SettlementMethod.Physical;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `SettlementMethodUnspecified` | SETTLEMENT_METHOD_UNSPECIFIED |
| `Cash`                        | CASH                          |
| `Physical`                    | PHYSICAL                      |
| -                             | `Unrecognized<string>`        |