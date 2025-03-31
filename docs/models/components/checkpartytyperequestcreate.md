# CheckPartyTypeRequestCreate

Request to determine if a potential cash journal will be considered first party or third party

## Example Usage

```typescript
import { CheckPartyTypeRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CheckPartyTypeRequestCreate = {
  destinationAccount: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  sourceAccount: "accounts/01H8FM6EXVH77SAW3TC8KAWMES",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `destinationAccount`                                  | *string*                                              | :heavy_check_mark:                                    | The destination account of the potential cash journal | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y                   |
| `sourceAccount`                                       | *string*                                              | :heavy_check_mark:                                    | The source account of the potential cash journal      | accounts/01H8FM6EXVH77SAW3TC8KAWMES                   |