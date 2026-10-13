# AcatsPreviewTransferExternalAccount

The contra-broker account the holdings are transferring from, ready to use as the delivering party of a transfer.

## Example Usage

```typescript
import { AcatsPreviewTransferExternalAccount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsPreviewTransferExternalAccount = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accountNumber`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | The account identifier The account number for external communications | 1234567890                                                            |
| `accountTitle`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | Account owner title                                                   | John Doe & Jane Doe JTWROS                                            |
| `participantNumber`                                                   | *string*                                                              | :heavy_minus_sign:                                                    | The NSCC brokerage / clearing house identifier                        | 987                                                                   |