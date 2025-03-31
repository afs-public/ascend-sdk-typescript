# IctWithdrawalOriginatingInstitution

The name and account id of institution sourcing the funds. Always 'Apex Clearing' and investor account id for ICT withdrawals;

## Example Usage

```typescript
import { IctWithdrawalOriginatingInstitution } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IctWithdrawalOriginatingInstitution = {};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountId`               | *string*                  | :heavy_minus_sign:        | Account id at institution |
| `title`                   | *string*                  | :heavy_minus_sign:        | Name of the institution   |