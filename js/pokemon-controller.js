'use strict'

var results = getPokemonList()
results.sort(function (a, b) {
    return a.name.localeCompare(b.name)
})

var container = document.querySelector(".pokemon-container")

for (var i = 0; i < results.length; i++) {
    var details = getPokemonDetails(results[i].url)
    var sprites = details.sprites
    var spriteUrls = []

    Object.keys(sprites).forEach(function (key) {
        if (typeof sprites[key] === "string" && sprites[key]) {
            spriteUrls.push(sprites[key])
        }
    })

    if (spriteUrls.length === 0) {
        spriteUrls.push(details.sprites.front_default)
    }

    var pokeDivId = "pokemon-img-" + i

    container.innerHTML +=
        '<div class="pokemon">' +
        '<h3>' + results[i].name + '</h3>' +
        '<img id="' + pokeDivId + '" src="' + spriteUrls[0] + '" alt="' + results[i].name + '">' +
        '<p>Weight: ' + details.weight + '</p>' +
        '</div>';

    (function (id, urls) {
        var imgIndex = 0
        setInterval(function () {
            imgIndex = (imgIndex + 1) % urls.length
            document.getElementById(id).src = urls[imgIndex]
        }, 500)
    })(pokeDivId, spriteUrls)
}

