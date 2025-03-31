# ReserveClass

The Reserve Class associated with the account

## Example Usage

```typescript
import { ReserveClass } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ReserveClass = ReserveClass.Customer;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `ReserveClassUnspecified` | RESERVE_CLASS_UNSPECIFIED |
| `Customer`                | CUSTOMER                  |
| `Pab`                     | PAB                       |
| `Firm`                    | FIRM                      |
| `Street`                  | STREET                    |
| `GL`                      | G_L                       |
| -                         | `Unrecognized<string>`    |