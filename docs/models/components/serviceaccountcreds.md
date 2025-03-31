# ServiceAccountCreds

## Example Usage

```typescript
import { ServiceAccountCreds } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ServiceAccountCreds = {
  privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
  name: "FinFirm",
  organization: "correspondents/00000000-0000-0000-0000-000000000000",
  type: "serviceAccount",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `privateKey`                                        | *string*                                            | :heavy_check_mark:                                  | N/A                                                 | -----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}       |
| `name`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 | FinFirm                                             |
| `organization`                                      | *string*                                            | :heavy_check_mark:                                  | N/A                                                 | correspondents/00000000-0000-0000-0000-000000000000 |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 | serviceAccount                                      |