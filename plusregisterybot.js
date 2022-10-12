

module.exports = {
    conf:{
    name: 'ALENCİA BABAYA İTAAT EDİN LAN',
    aliases: [],
    category: 'Developer Ve Geliştirici Alencia ',
    help:"ALENCİA",
    developer: true
    },
    



    run: async (client, message, args, embed, prefix) => {

        
        message.lineReply(`Eyer İyi Fork Ve Star Gelirse `).then(msg => {

            msg.edit(`
Bot Paylaşılır Bro
            `);

        });

    },
};
