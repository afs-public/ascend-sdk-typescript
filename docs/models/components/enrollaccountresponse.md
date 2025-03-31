# EnrollAccountResponse

The response for enrolling an account.

## Example Usage

```typescript
import { EnrollAccountResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollAccountResponse = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `agreements`                                                                                    | [components.Agreement](../../models/components/agreement.md)[]                                  | :heavy_minus_sign:                                                                              | The collection of legal agreements that require affirmation to enroll the account in a program. |