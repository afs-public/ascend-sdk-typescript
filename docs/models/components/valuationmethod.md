# ValuationMethod

Indicates the methodology used to determine the asset's value. Different valuation methods require different data sources and calculation workflows.

## Example Usage

```typescript
import { ValuationMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ValuationMethod = ValuationMethod.Ind;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `ValuationMethodUnspecified` | VALUATION_METHOD_UNSPECIFIED |
| `Ind`                        | IND                          |
| `Gpc`                        | GPC                          |
| `Gpu`                        | GPU                          |
| `Bkv`                        | BKV                          |
| `Rep`                        | REP                          |
| `Sec`                        | SEC                          |
| `Par`                        | PAR                          |
| `Mkt`                        | MKT                          |
| `Av`                         | AV                           |
| `Gps`                        | GPS                          |
| `Tc`                         | TC                           |
| `Ato`                        | ATO                          |
| `Ito`                        | ITO                          |
| `Ni`                         | NI                           |
| `Nid`                        | NID                          |
| `Lbr`                        | LBR                          |
| `NA`                         | N_A                          |
| -                            | `Unrecognized<string>`       |