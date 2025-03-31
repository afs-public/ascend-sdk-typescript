# Domicile

Indicates if the account is `DOMESTIC` or `FOREIGN`

## Example Usage

```typescript
import { Domicile } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Domicile = Domicile.Foreign;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `DomicileUnspecified`  | DOMICILE_UNSPECIFIED   |
| `Domestic`             | DOMESTIC               |
| `Foreign`              | FOREIGN                |
| -                      | `Unrecognized<string>` |