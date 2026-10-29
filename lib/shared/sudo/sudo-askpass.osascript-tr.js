#!/usr/bin/env osascript -l JavaScript

ObjC.import('stdlib')

const app = Application.currentApplication()
app.includeStandardAdditions = true

const result = app.displayDialog('balenaEtcher, disklere yazabilmek için ayrıcalıklı erişime ihtiyaç duyuyor.\n\nBuna izin vermek için parolanızı girin.', {
  defaultAnswer: '',
  withIcon: 'caution',
  buttons: ['Vazgeç', 'Tamam'],
  defaultButton: 'Tamam',
  hiddenAnswer: true,
})

if (result.buttonReturned === 'Tamam') {
  result.textReturned
} else {
  $.exit(255)
}

