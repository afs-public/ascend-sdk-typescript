# CftcOwnerType

Indicates the CFTC (Commodity Futures Trading Commission) owner type of the account. This enum only applies to accounts regulated by the CFTC

## Example Usage

```typescript
import { CftcOwnerType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CftcOwnerType = CftcOwnerType.Customer;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `CftcOwnerTypeUnspecified`  | CFTC_OWNER_TYPE_UNSPECIFIED |
| `Customer`                  | CUSTOMER                    |
| `Proprietary`               | PROPRIETARY                 |
| -                           | `Unrecognized<string>`      |