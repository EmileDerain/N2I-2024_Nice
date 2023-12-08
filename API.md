# Socket API
## Server code
| Opcode | Description | Payload |
| ------ | ----------- | ------- |
| 0 | Error event | message |
| 1 | Init event | userId, game |
| 2 | Score event | money, totalMoney, temperature, year |
| 3 | Confirm upgrade event | upgradeId, count |

## Client code
Client code needs an 'userId' parameter.

| Opcode | Description | Payload |
| ------ | ----------- | ------- |
| 10 | Upgrade event | upgradeId |
| 11 | Tick event | / |

## Establish connection with Server
Establish connection with [ws://localhost:8080](ws://localhost:8080)
If the connection is successful, you'll receive an `Hello Event`.

### Example of Init Event
```
{
    "op": 1,
    "d": {
        "userId": "cdf28s6epYXOqyxC",
        "game": {
            "money": 0,
            "totalMoney": 0,
            "temperature": 0,
            "startYear": 1900,
            "endYear": 2100,
            "upgrades": [
                {
                    "id": 1,
                    "name": "Elevage",
                    "cost": 100,
                    "money_generated": 10,
                    "temperature_generated": 0.001,
                    "unlock_year": 1882,
                    "quantity": 0
                },
                {
                    "id": 2,
                    "name": "Pêche",
                    "cost": 120,
                    "money_generated": 12,
                    "temperature_generated": 0.002,
                    "unlock_year": 1882,
                    "quantity": 0
                },
                {
                    "id": 3,
                    "name": "Agriculture",
                    "cost": 150,
                    "money_generated": 15,
                    "temperature_generated": 0.003,
                    "unlock_year": 1882,
                    "quantity": 0
                }
            ]
        }
    }
}
```

### Score Event
Event sent when the server update the score.

#### Example of Score Event
```
{
  "op": 2,
  "d": {
    "money": 140004,
    "totalMoney": 1929392,
    "temperature": 4.32,
    "year": 2087
  }
}
```

### Confirm Upgrade Event
Event sent when the client iterate to the next tick.

#### Example of Tick Event
```
{
  "op": 3,
  "d": {
    "upgradeId": 1,
    "count": 3
  }
}
```

### Tick Event
Event sent when the client iterate to the next tick.

#### Example of Tick Event
```
{
  "op": 11,
  "userId": 101112
}
```


### Upgrade Event
Event sent when the client try to buy an upgrade.

#### Example of Upgrade Event
```
{
  "op": 10,
  "userId": 101112,
  "d": {
    "upgradeId": 1
  }
}
```

### Tick Event
Event sent when the client iterate to the next tick.

#### Example of Tick Event
```
{
  "op": 11,
  "userId": 101112
}
```