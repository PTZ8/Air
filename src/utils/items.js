const array = [{
    name: 'Brownie',
    description: 'Mmmmmm tastes so good. Don\'t eat too much or you\'ll be fat.',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10,
    price: 30,
    keep: false,
    run: async (bot, message, args) => {
        const brownieRandom = [
            'You ate a brownie, and the taste of the chocolate watered in your mouth.',
            'You choked on a brownie and almost died. Be careful!',
            'The brownie tasted great.'
        ];
        const yes = brownieRandom[Math.floor(Math.random() * brownieRandom.length)];
        message.channel.send(`${yes}`);
    }
},
{
    name: 'Wallet Lock',
    description: 'Secure your wallet from those sneaky robbers',
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 2000,
    price: 5000,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'Axe',
    description: 'Chop down trees',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 10000,
    keep: true,
    run: async (bot, message, args) => {
        const logsAmount = Math.floor(Math.random() * 1)+1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You swing your axe and chopped **${logsAmount}** logs`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'log');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'log');
        if (findItem) {
            userInv.push({ name: 'Log', amount: (findItem.amount+logsAmount), description: 'Sell logs to make money.'});
            data.items=userInv;
            await data.save();
        } else {
            userInv.push({ name: 'Log', amount: logsAmount, description: 'Sell logs to make money.'});
            data.items=userInv;
            await data.save();
        }
    }
},
{
    name: 'Log',
    description: 'Sell logs to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 500,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
}
];

module.exports = array;