# EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails

The foreign bond trading countries details

## Example Usage

```typescript
import { EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails } from "@apexfintechsolutions/ascend-sdk/models/components";

let value:
  EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `foreignBondTrading`                                                                         | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Does the account anticipate trading in foreign bonds                                         | true                                                                                         |
| `foreignBondTradingDetail`                                                                   | [components.ForeignBondTradingDetail](../../models/components/foreignbondtradingdetail.md)[] | :heavy_minus_sign:                                                                           | The foreign bond trading countries details. If yes, than please provide details              |                                                                                              |