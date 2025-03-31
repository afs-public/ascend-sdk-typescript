# Receiver

The receiving party information

## Example Usage

```typescript
import { Receiver } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Receiver = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `apexAccountId`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The internal apex account id                                                                       | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                         |
| `externalAccount`                                                                                  | [components.AcatsTransferExternalAccount](../../models/components/acatstransferexternalaccount.md) | :heavy_minus_sign:                                                                                 | The external account information                                                                   |                                                                                                    |