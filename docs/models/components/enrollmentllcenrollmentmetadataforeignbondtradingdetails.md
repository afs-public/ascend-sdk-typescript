# EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails

The foreign bond trading countries details

## Example Usage

```typescript
import { EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `foreignBondTrading`                                                                         | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Does the account anticipate trading in foreign bonds                                         | true                                                                                         |
| `foreignBondTradingDetail`                                                                   | [components.ForeignBondTradingDetail](../../models/components/foreignbondtradingdetail.md)[] | :heavy_minus_sign:                                                                           | The foreign bond trading countries details. If yes, than please provide details              |                                                                                              |