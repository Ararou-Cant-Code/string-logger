# string-logger

Specially built console logger for my projects extending Sapphire's logger.

- How to use:

ESM:

```typescript
import { StringLogger } from 'string-logger';

const logger = new StringLogger(20, 'string');
```

CJS:

```js
const { StringLogger } = require('string-logger');

const logger = new StringLogger(20, 'string');
```

- To use this logger with sapphire, add `instance: new StringLogger(<level>, <name>)` to your logger options.

- Demo of logging with sapphire framework:

```typescript
import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';

@ApplyOptions<Command.Options>({
  name: 'test',
  description: 'test!'
})
export class TestCommand extends Command {
  public registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand({
      name: this.name,
      description: this.description
    });
  }

  public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    return this.container.logger.info('Test!');
  }
}
```
