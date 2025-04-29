const countVowels = require('./TDD.js');

describe('This is the countVowels Function', function(){
    test('This is wrong', 
        function(){
            expect(countVowels('jest')).toEqual('jest has 1 vowels');
    }); 
    test('This is wrong pt.2',
        function(){
            expect(countVowels('eeeeeaaaaip')).toEqual('eeeeeaaaaip has 10 vowels')
        }
    )
    test('Testing for non-value',
        function(){
        expect(countVowels('Crypt')).toBe("Crypt has 0 vowels")
    }
)
})

