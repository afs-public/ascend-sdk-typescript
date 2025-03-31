# IdentifierCreate

An identifier associated with an account

## Example Usage

```typescript
import { IdentifierCreate, IdentifierCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentifierCreate = {
  type: IdentifierCreateType.OriginatingAccountId,
  value: "12345678",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [components.IdentifierCreateType](../../models/components/identifiercreatetype.md) | :heavy_check_mark:                                                                 | The type of identifier                                                             | ORIGINATING_ACCOUNT_ID                                                             |
| `value`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The value of the identifier                                                        | 12345678                                                                           |