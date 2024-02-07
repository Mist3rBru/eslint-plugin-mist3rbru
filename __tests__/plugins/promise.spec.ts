import { promisePlugin as sut } from '#/plugins/promise.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('promise', () => {
  it("should include rule's reference link", async () => {
    const expectedReferencedRules = [
      ...Object.keys(sut.rules),
      ...Object.keys(sut.testRules),
    ].map(rule => rule.replace('promise/', ''))
    const file = await readFile(resolve('src/plugins/promise.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})