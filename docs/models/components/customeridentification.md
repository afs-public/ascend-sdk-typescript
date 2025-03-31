# CustomerIdentification

CustomerIdentification includes the details of a customer identification check

## Example Usage

```typescript
import { CustomerIdentification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CustomerIdentification = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `checkTypes`                                                                                            | [components.CheckTypes](../../models/components/checktypes.md)[]                                        | :heavy_minus_sign:                                                                                      | The types of checks being requested                                                                     | [<br/>"DATABASE",<br/>"DOCUMENTARY"<br/>]                                                               |
| `name`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | required format: correspondents/{correspondent_id}/customerIdentifications/{customer_identification_id} | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/customerIdentifications/01HEWVF4ZSNKYRP293J53ASJCJ            |
| `results`                                                                                               | [components.CustomerIdentificationResult](../../models/components/customeridentificationresult.md)[]    | :heavy_minus_sign:                                                                                      | The results of the identity verification check(s)                                                       |                                                                                                         |