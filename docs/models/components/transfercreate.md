# TransferCreate

An account transfer which contains the receiving and delivering party information, assets being transferred, NSCC status information, etc.

## Example Usage

```typescript
import { TransferCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TransferCreate = {
  deliverer: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assets`                                                                             | [components.AssetCreate](../../models/components/assetcreate.md)[]                   | :heavy_minus_sign:                                                                   | The assets being transferred (Cash, Equities, etc.)                                  |                                                                                      |
| `comment`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | User supplied comment                                                                | From XYZ Brokerage                                                                   |
| `deliverer`                                                                          | [components.TransferAccountCreate](../../models/components/transferaccountcreate.md) | :heavy_check_mark:                                                                   | The delivering/receiving party information                                           |                                                                                      |
| `originalControlNumber`                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | An associated NSCC transfer identifier, if applicable                                | 20240201123456                                                                       |