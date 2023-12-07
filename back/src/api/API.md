# Socket API
## Server code
| Opcode | Description | Payload |
| ------ | ----------- | ------- |
| 0 | Error event | message |
| 1 | Hello event | userId |
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

### Example of Hello Event
```
{
  "op": 1
  "d": {
    "userId": 101112
  }
}
```

### Score Event
Event sent when the client iterate to the next tick.

#### Example of Invoke Event
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