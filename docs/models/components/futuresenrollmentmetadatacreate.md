# FuturesEnrollmentMetadataCreate

Enrollment metadata for the FUTURES enrollment type

## Example Usage

```typescript
import { FuturesEnrollmentMetadataCreate, FuturesInvestmentObjective } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FuturesEnrollmentMetadataCreate = {
  ctfcNfaRegistered: true,
  exchangeMember: true,
  fcmOwnedOrControlled: false,
  fundsOwnedByAccountOwner: true,
  futuresExperience: true,
  futuresInvestmentObjective: FuturesInvestmentObjective.Speculation,
  investmentRetiredFunds: false,
  optionsExperience: false,
  understandFuturesRisks: true,
  understandLossBeyondFunds: true,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctfcNfaRegistered`                                                                            | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the account is registered with the CFTC NFA                                  |                                                                                                |
| `exchangeMember`                                                                               | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the account owner is a member of any exchanges                               |                                                                                                |
| `fcmOwnedOrControlled`                                                                         | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the futures account is owned or controlled by a FCM                          |                                                                                                |
| `fundsOwnedByAccountOwner`                                                                     | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the funds in the futures account are owned by the account owner              |                                                                                                |
| `futuresExperience`                                                                            | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the account owner has prior experience trading futures                       |                                                                                                |
| `futuresInvestmentObjective`                                                                   | [components.FuturesInvestmentObjective](../../models/components/futuresinvestmentobjective.md) | :heavy_check_mark:                                                                             | The primary investment objective for the futures account                                       | SPECULATION                                                                                    |
| `investmentRetiredFunds`                                                                       | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the account will trade investment retired funds                              |                                                                                                |
| `optionsExperience`                                                                            | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the account owner has experience with various trading options and strategies |                                                                                                |
| `understandFuturesRisks`                                                                       | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the account owner understands the risks associated with trading futures      |                                                                                                |
| `understandLossBeyondFunds`                                                                    | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether the account owner understands that losses can exceed deposited funds         |                                                                                                |