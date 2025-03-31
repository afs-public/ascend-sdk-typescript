# Identifier

An identifier associated with an account

## Example Usage

```typescript
import { Identifier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Identifier = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [components.IdentifierType1](../../models/components/identifiertype1.md) | :heavy_minus_sign:                                                       | The type of identifier                                                   | ORIGINATING_ACCOUNT_ID                                                   |
| `value`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | The value of the identifier                                              | 12345678                                                                 |