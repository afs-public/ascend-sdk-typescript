# PreIpoCompanyFundingRoundClosing

Closing details of a Pre IPO Company Funding Round.

## Example Usage

```typescript
import { PreIpoCompanyFundingRoundClosing } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PreIpoCompanyFundingRoundClosing = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `issuePrice`                                                                                  | [components.IssuePrice](../../models/components/issueprice.md)                                | :heavy_minus_sign:                                                                            | The issue price of the closing.                                                               | {<br/>"value": "695.44"<br/>}                                                                 |
| `issueTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time shares were issued.                                                                  | 2025-09-30T04:00:00Z                                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the closing.                                                                      | Series E-5                                                                                    |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the closing was updated.                                                             | 2025-09-28T10:00:46.611232Z                                                                   |