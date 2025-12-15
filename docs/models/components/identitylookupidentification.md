# IdentityLookupIdentification

Identification document for verification

## Example Usage

```typescript
import { IdentityLookupIdentification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentityLookupIdentification = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `regionCode`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | CLDR format                                                                    | US                                                                             |
| `type`                                                                         | [components.IdentityLookupType](../../models/components/identitylookuptype.md) | :heavy_minus_sign:                                                             | The type of identification document                                            | SSN                                                                            |
| `value`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The value of the identification document                                       | 123-45-6789                                                                    |