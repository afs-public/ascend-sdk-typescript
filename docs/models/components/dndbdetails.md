# DndbDetails

Dndb details

## Example Usage

```typescript
import { DndbDetails } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DndbDetails = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `businessNm`                                                     | *string*                                                         | :heavy_minus_sign:                                               | DNDB persons business name                                       | Dough Inc                                                        |
| `comments`                                                       | *string*                                                         | :heavy_minus_sign:                                               | reason why person exists in DNDB list                            | Fraud                                                            |
| `createUser`                                                     | *string*                                                         | :heavy_minus_sign:                                               | person that created this record for the DNDB list                | JDough                                                           |
| `createdDate`                                                    | [components.CreatedDate](../../models/components/createddate.md) | :heavy_minus_sign:                                               | date this person was added to the DNDB list                      | 2020-01-01 00:00:00 +0000 UTC                                    |
| `dob`                                                            | [components.Dob](../../models/components/dob.md)                 | :heavy_minus_sign:                                               | DNDB persons date of birth                                       | 1990-01-01 00:00:00 +0000 UTC                                    |
| `email`                                                          | *string*                                                         | :heavy_minus_sign:                                               | DNDB persons email address                                       | jdough@domain.com                                                |
| `endDate`                                                        | [components.EndDate](../../models/components/enddate.md)         | :heavy_minus_sign:                                               | date this person will be removed from the DNDB list              | 2025-01-01 00:00:00 +0000 UTC                                    |
| `firstNm`                                                        | *string*                                                         | :heavy_minus_sign:                                               | DNDB persons first name                                          | Jane                                                             |
| `id`                                                             | *number*                                                         | :heavy_minus_sign:                                               | DNDB profile person id                                           | 123456                                                           |
| `lastNm`                                                         | *string*                                                         | :heavy_minus_sign:                                               | DNDB persons last name                                           | Dough                                                            |
| `middleNm`                                                       | *string*                                                         | :heavy_minus_sign:                                               | DNDB persons middle name                                         | Juliet                                                           |
| `ssn`                                                            | *string*                                                         | :heavy_minus_sign:                                               | DNDB persons ssn number                                          | 666-12-3456                                                      |
| `telephone`                                                      | *string*                                                         | :heavy_minus_sign:                                               | DNDB persons telephone number                                    | 214-765-1010                                                     |
| `tin`                                                            | *string*                                                         | :heavy_minus_sign:                                               | DNDB persons tin number                                          | 98-7654321                                                       |