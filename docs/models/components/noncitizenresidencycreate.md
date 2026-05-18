# NonCitizenResidencyCreate

Non Citizenship Residency to facilitate non-Citizen lawful US residents to open domestic accounts.

## Example Usage

```typescript
import { NonCitizenResidencyCreate, ResidencyStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: NonCitizenResidencyCreate = {
  residencyStatus: ResidencyStatus.UsPermanentResident,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `residencyStatus`                                                        | [components.ResidencyStatus](../../models/components/residencystatus.md) | :heavy_check_mark:                                                       | The residency status of the non-citizen resident.                        | US_PERMANENT_RESIDENT                                                    |