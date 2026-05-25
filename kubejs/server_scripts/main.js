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
})
