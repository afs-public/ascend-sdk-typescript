# ValuationSource

Indicates whether the valuation was provided by management of program, third part firm conducting independent valuation or by broker/dealer.

## Example Usage

```typescript
import { ValuationSource } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ValuationSource = ValuationSource.Mgt;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `ValuationSourceUnspecified` | VALUATION_SOURCE_UNSPECIFIED |
| `Mgt`                        | MGT                          |
| `Iv`                         | IV                           |
| `Bd`                         | BD                           |
| -                            | `Unrecognized<string>`       |