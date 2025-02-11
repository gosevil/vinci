const { commandModule, CommandType } = require('@sern/handler');
import { publish } from "../src/plugins/publish";

export default commandModule({
	name: 'ping',
    type: CommandType.Both,
	plugins: [publish(['1000400148289036298'])],
	description: 'A ping command',
	//alias : [],
	execute: async (ctx, args) => {
		await ctx.reply('Hello World!');
	},
});