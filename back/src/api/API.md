# Socket API
## Codes
| Opcode | Description | Payload |
| ------ | ----------- | ------- |
| 0 | Error event | message |
| 1 | Hello event | useId |

## 1 - Establish connection with Server
Establish connection with [ws://localhost:8080](ws://localhost:8080)
If the connection is successful, you'll receive an `Hello Event`.

### Example of Hello Event
```
{
  "op": 1
  "d": {
    "userId": 1203
  }
}
```