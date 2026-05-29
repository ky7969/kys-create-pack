ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [Item.of("farmersdelight:fried_rice")],
        [
            'farmersdelight:rice',
            'minecraft:carrot',
            'farmersdelight:onion',
            'minecraft:bowl',
            'minecraft:egg'
        ]
        ).heated()
//     event.remove(
//         { input: '#minecraft:planks', output:'woodenhopper:wooden_hopper' }
//     )
//     event.replaceOutput(
//         { output: 'minecraft:hopper' },
//         'minecraft:hopper',
//         'woodenhopper:wooden_hopper'
//     )
//     event.replaceInput(
//         { input: 'minecraft:hopper' },
//         'minecraft:hopper',
//         'woodenhopper:wooden_hopper'
//     )
//     event.shapeless(
//         Item.of('woodenhopper:wooden_hopper'),
//         'minecraft:hopper'
//     )
})
// ItemEvents.modifyTooltips(event => {
//     event.add(['minecraft:hopper'],Text.red("Lags the server, use wooden hopper instead. Exchange for wooden hopper in crafting grid."))
// })
// ItemEvents.canPickUp('minecraft:hopper', event => {
//     event.player.give('woodenhopper:wooden_hopper'),
//     event.itemEntity.remove(),
//     event.cancel()
// })
