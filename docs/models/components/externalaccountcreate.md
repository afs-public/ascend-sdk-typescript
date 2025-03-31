# ExternalAccountCreate

The external account information

## Example Usage

```typescript
import { ExternalAccountCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ExternalAccountCreate = {
  accountNumber: "1234567890",
  participantNumber: "987",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accountNumber`                                                       | *string*                                                              | :heavy_check_mark:                                                    | The account identifier The account number for external communications | 1234567890                                                            |
| `participantNumber`                                                   | *string*                                                              | :heavy_check_mark:                                                    | The NSCC brokerage / clearing house identifier                        | 987                                                                   |