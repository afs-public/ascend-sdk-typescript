# SanctionsListDetail

Sanctions list detail used for Dow Jones Profile details

## Example Usage

```typescript
import { SanctionsListDetail } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SanctionsListDetail = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `endDay`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Dow Jones day persons will be taken off sanctions list   | 1                                                        |
| `endMonth`                                               | *string*                                                 | :heavy_minus_sign:                                       | Dow Jones month persons will be taken off sanctions list | June                                                     |
| `endYear`                                                | *string*                                                 | :heavy_minus_sign:                                       | Dow Jones year persons will be taken off sanctions list  | 2025                                                     |
| `sanctionsReferenceDescription`                          | *string*                                                 | :heavy_minus_sign:                                       | Dow Jones persons sanctions ref id                       | OFAC - Specially Designated National List                |
| `startDay`                                               | *string*                                                 | :heavy_minus_sign:                                       | Dow Jones day persons were added to the sanctions list   | 1                                                        |
| `startMonth`                                             | *string*                                                 | :heavy_minus_sign:                                       | Dow Jones month persons were added to the sanctions list | June                                                     |
| `startYear`                                              | *string*                                                 | :heavy_minus_sign:                                       | Dow Jones year persons were added to the sanctions list  | 2020                                                     |