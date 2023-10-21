import { Injectable } from '@angular/core'
import { messages } from 'src/app/data/services/messages-validation'
import { wordsBase } from 'src/app/data/services/words-base'

@Injectable({
  providedIn: 'root'
})
export class ValidationMessages {
  validationMessages = messages
  words = wordsBase

  validationMessages2(word, type, limit?) {
    if (!this.words.hasOwnProperty(word)) {
      console.log('No implementado ' + word)
      return ''
    }

    word = this.words[word]
    let strings: string[] = ['a', 'e', 'o']
    let word2 = word.split(' ')

    const messageMappings = {
      required: this.validateWord(word, word2, strings),
      nameRequerid: this.validateWord(word, word2, strings),
      onlyLetter: word + ' sólo debe contener letras.',
      onlyLettersInitials: word + ' sólo debe contener letras, guiones o puntos.',
      onlyEmail: 'Ingrese un correo electrónico válido.',
      manyEmail: 'Ingrese un correo electrónico válido.',
      onlyPassword: word + ' debe tener una minúscula, una mayúscula, un carácter y un número.',
      onlyNumber: 'Sólo debe contener números.',
      onlyNumbersText: 'Sólo debe contener números y letras.',
      nameNumberMin: 'Debe de tener más de ' + limit + (limit == 1 ? ' carácter.' : ' caracteres.'),
      nameNumberMax: 'Debe de tener máximo ' + limit + (limit == 1 ? ' carácter.' : ' caracteres.')
    }

    return messageMappings[type] || ''
  }

  validateWord(word, word2, strings) {
    const lastChar = word2[0][word2[0].length - 1].toLowerCase()
    const secondLastChar = word2[0][word2[0].length - 2].toLowerCase()

    if (lastChar == 's') {
      word = word + ' son requerid' + word2[0][word2[0].length - 2] + 's.'
    } else if (strings.includes(lastChar)) {
      const suffix = lastChar != 'e' ? lastChar : 'o'
      word = word + ' es requerid' + suffix + '.'
    } else if (strings.includes(secondLastChar)) {
      const suffix = secondLastChar != 'e' ? secondLastChar : 'o'
      word = word + ' es requerid' + suffix + '.'
    }

    return word + ''
  }
}
