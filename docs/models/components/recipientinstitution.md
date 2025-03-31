# RecipientInstitution

The name and account id of institution receiving the funds. Always 'Apex Clearing' and investor account id for ICT deposits;

## Example Usage

```typescript
import { RecipientInstitution } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RecipientInstitution = {};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountId`               | *string*                  | :heavy_minus_sign:        | Account id at institution |
| `title`                   | *string*                  | :heavy_minus_sign:        | Name of the institution   |