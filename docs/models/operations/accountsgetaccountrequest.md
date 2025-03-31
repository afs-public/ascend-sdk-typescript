# AccountsGetAccountRequest

## Example Usage

```typescript
import { AccountsGetAccountRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsGetAccountRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accountId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The account id.                                                        | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                             |
| `view`                                                                 | [operations.QueryParamView](../../models/operations/queryparamview.md) | :heavy_minus_sign:                                                     | The view to return. Defaults to `FULL`.                                | FULL                                                                   |