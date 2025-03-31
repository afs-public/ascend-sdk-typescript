# SpRating

Standard & Poor's (S&P) rating of the creditworthiness of borrowers. Correspondents must be configured to view this field.

## Example Usage

```typescript
import { SpRating } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SpRating = SpRating.Aaa;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SpRatingUnspecified`  | SP_RATING_UNSPECIFIED  |
| `Aaa`                  | AAA                    |
| `AaPlus`               | AA_PLUS                |
| `Aa`                   | AA                     |
| `AaMinus`              | AA_MINUS               |
| `APlus`                | A_PLUS                 |
| `A`                    | A                      |
| `AMinus`               | A_MINUS                |
| `BbbPlus`              | BBB_PLUS               |
| `Bbb`                  | BBB                    |
| `BbbMinus`             | BBB_MINUS              |
| `BbPlus`               | BB_PLUS                |
| `Bb`                   | BB                     |
| `BbMinus`              | BB_MINUS               |
| `BPlus`                | B_PLUS                 |
| `B`                    | B                      |
| `BMinus`               | B_MINUS                |
| `CccPlus`              | CCC_PLUS               |
| `Ccc`                  | CCC                    |
| `CccMinus`             | CCC_MINUS              |
| `Cc`                   | CC                     |
| `C`                    | C                      |
| `D`                    | D                      |
| `Nr`                   | NR                     |
| `Sp1Plus`              | SP_1_PLUS              |
| `Sp1`                  | SP_1                   |
| `Sp1Minus`             | SP_1_MINUS             |
| `A1Plus`               | A_1_PLUS               |
| `A1`                   | A_1                    |
| `A1Minus`              | A_1_MINUS              |
| -                      | `Unrecognized<string>` |