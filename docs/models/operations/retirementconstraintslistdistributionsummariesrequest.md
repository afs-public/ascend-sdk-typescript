# RetirementConstraintsListDistributionSummariesRequest

## Example Usage

```typescript
import { RetirementConstraintsListDistributionSummariesRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: RetirementConstraintsListDistributionSummariesRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                               | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The account id.                                                                                                           | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                                |
| `pageSize`                                                                                                                | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Number of distribution summaries to get (partitioned by tax year) Default = 2 (current year and prior year), maximum = 10 | 2                                                                                                                         |
| `pageToken`                                                                                                               | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | When paginating, this is used to retrieve a specific page from the overall response                                       | AbTYnwAkMjIyZDNjYTAtZmVjZS00N2Q5LTgyMDctNzI3MDdkMjFiZ3hh                                                                  |