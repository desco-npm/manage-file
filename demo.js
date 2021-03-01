const manageFile = require('./index') // @desco/manage-file

// Carrega conteúdo de um arquivo
// Load contents of a file
manageFile.load('./demo_file.txt')

// Salva novo conteúdo no arquivo (sobrescreve o conteúdo atual)
// Save new content to the file (overwrite the current content)
manageFile.save('./demo_file.txt', 'New Content')

// Edita o conteúdo atual do arquivo
// Edit the current content of the file
manageFile.edit('./demo_file.txt', content => {
    return content.toUpperCase()
})

// Carrega o JSON presente em um arquivo
// Load the JSON present in a file
manageFile.loadJson('demo_json.json')

// Salva novo JSON no arquivo (sobrescreve o JSON atual)
// Save new JSON to file (overwrite the current JSON)
manageFile.saveJson('demo_json.json', { title: 'New Title', })

// Edita o JSON atual do arquivo
// Edit the current JSON of the file
manageFile.editJson('demo_json.json', json => {
    json.title = json.title.toUpperCase()

    return json
})