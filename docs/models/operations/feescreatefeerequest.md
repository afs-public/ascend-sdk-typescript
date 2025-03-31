# FeesCreateFeeRequest

## Example Usage

```typescript
import { TransfersFeeCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { FeesCreateFeeRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: FeesCreateFeeRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  transfersFeeCreate: {
    amount: {},
    clientTransferId: "179dcd33-49f8-4615-989c-560fb387c4fd",
    type: TransfersFeeCreateType.Platform,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | The account id.                                                                | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                     |
| `transfersFeeCreate`                                                           | [components.TransfersFeeCreate](../../models/components/transfersfeecreate.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |