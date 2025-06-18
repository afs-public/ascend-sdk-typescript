# AcceptTransferResponseExternalAccount

The external account information

## Example Usage

```typescript
import { AcceptTransferResponseExternalAccount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcceptTransferResponseExternalAccount = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accountNumber`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | The account identifier The account number for external communications | 1234567890                                                            |
| `accountTitle`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | Account owner title                                                   | John Doe & Jane Doe JTWROS                                            |
| `participantNumber`                                                   | *string*                                                              | :heavy_minus_sign:                                                    | The NSCC brokerage / clearing house identifier                        | 987                                                                   |