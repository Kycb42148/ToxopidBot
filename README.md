# Setup
1. Clone this repository
2. Add token (and filter) to `config.json`
3. Use `node index` to launch bot

# Config
Config file contains 2 fields:
### token
A string that stores your token
### filter
An array that stores blacklist regex, example:
```json
{
    "token": "...",
    "filter": [
        ["fuck", "gi"]
    ]
}
```
This will mute any user who sent a message containing word "fuck" for five minutes.