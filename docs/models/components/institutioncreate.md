# InstitutionCreate

Institution representing originator or recipient of funds from an Instant Cash Transfer

## Example Usage

```typescript
import { InstitutionCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InstitutionCreate = {
  accountId: "<id>",
  title: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountId`               | *string*                  | :heavy_check_mark:        | Account id at institution |
| `title`                   | *string*                  | :heavy_check_mark:        | Name of the institution   |