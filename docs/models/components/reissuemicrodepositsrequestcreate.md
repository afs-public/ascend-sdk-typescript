# ReissueMicroDepositsRequestCreate

Request to reissue micro deposits for bank relationship verification.

## Example Usage

```typescript
import { ReissueMicroDepositsRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ReissueMicroDepositsRequestCreate = {
  name:
    "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of the relationship to reissue micro deposits on.                     | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e |