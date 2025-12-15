# Identification

Represents an identification document

## Example Usage

```typescript
import { Identification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Identification = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `regionCode`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | CLDR format                                                                    | US                                                                             |
| `type`                                                                         | [components.IdentificationType](../../models/components/identificationtype.md) | :heavy_minus_sign:                                                             | The type of identification document                                            | SSN                                                                            |
| `value`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The value of the identification document                                       | 123-45-6789                                                                    |