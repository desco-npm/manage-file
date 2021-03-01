const fs = require('fs-plus')

const load = (_file) => {
    return fs.readFileSync(_file, 'utf8')
}

const save = (_file, _content) => {
    fs.writeFileSync(_file, _content)
}

const edit = (_addrsFile, _fun) => {
    const content = this.load(_addrsFile)
    const newContent = _fun(content)

    this.save(_addrsFile, newContent)
}

const loadJson = (_file) => {
    return JSON.parse(fs.readFileSync(_file))
}

const saveJson = (_file, _data) => {
    fs.writeFileSync(_file, JSON.stringify(_data, undefined, '\t'))
}

const editJson = (_addrsFile, _fun) => {
    const json = this.loadJson(_addrsFile)
    const newJson = _fun(json)

    this.saveJson(_addrsFile, newJson)
}

exports.load = load
exports.save = save
exports.edit = edit

exports.loadJson = loadJson
exports.saveJson = saveJson
exports.editJson = editJson
