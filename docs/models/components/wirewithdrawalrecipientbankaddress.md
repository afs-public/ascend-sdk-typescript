# WireWithdrawalRecipientBankAddress

The address of the recipient bank / financial institution

## Example Usage

```typescript
import { WireWithdrawalRecipientBankAddress } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalRecipientBankAddress = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `city`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Required: Describes the city in which the entity is located.                                           |
| `country`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Required: The country code used for geolocation, identity verification, and/or mail delivery purposes. |
| `postalCode`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Required: The postal code used for geolocation, identity verification, and/or mail delivery purposes.  |
| `state`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Required: The state code used for geolocation, identity verification, and/or mail delivery purposes.   |
| `streetAddress`                                                                                        | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | The street name and number relating to a party's legal or mailing address.                             |