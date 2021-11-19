var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
    
    details : "Les Madrazo recute !",
    
    state : "Tu es intérresé ? Rejoin le discord !",
assets : {
large_image : "sans_titre4",
large_text : "Les Bg des madrazo" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Discord" , url : "https://discord.gg/mQCrguqpjP"}, {label : "Discord ifive" , url : "https://discord.gg/Ifive"}]

}
})
})
client.login({ clientId : "910966000206348359" }).catch(console.error);
client.login(process.env.TOKEN);