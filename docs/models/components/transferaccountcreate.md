# TransferAccountCreate

The delivering/receiving party information

## Example Usage

```typescript
import { TransferAccountCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TransferAccountCreate = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `apexAccountId`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | The internal apex account id                                                         | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                           |
| `externalAccount`                                                                    | [components.ExternalAccountCreate](../../models/components/externalaccountcreate.md) | :heavy_minus_sign:                                                                   | The external account information                                                     |                                                                                      |